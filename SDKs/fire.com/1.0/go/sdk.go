package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var ServerList = []string{
	"https://api-preprod.fire.com/business/v1",
	"https://api.fire.com/business/v1",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// ActivateMandate - Activate a direct debit mandate
// This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
// The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
func (s *SDK) ActivateMandate(ctx context.Context, request operations.ActivateMandateRequest) (*operations.ActivateMandateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}/activate", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ActivateMandateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// AddAccount - Add a new account
// Creates a new fire.com account.
//
// **Please note there is a charge associated with creating a new account.**
func (s *SDK) AddAccount(ctx context.Context, request operations.AddAccountRequest) (*operations.AddAccountResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/accounts"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = out
		}
	}

	return res, nil
}

// AddBankTransferBatchPayment - Add payment for an bank transfers
// There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
//
// **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
//
// **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
func (s *SDK) AddBankTransferBatchPayment(ctx context.Context, request operations.AddBankTransferBatchPaymentRequest) (*operations.AddBankTransferBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/banktransfers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddBankTransferBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Onebatches1Percent7BbatchUUIDPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// AddInternalTransferBatchPayment - Add payment for an internal transfers
// Simply specify the source account, destination account, amount and a reference.
func (s *SDK) AddInternalTransferBatchPayment(ctx context.Context, request operations.AddInternalTransferBatchPaymentRequest) (*operations.AddInternalTransferBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/internaltransfers", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AddInternalTransferBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AddInternalTransferBatchPaymentNewBatchItemResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NewBatchItemResponse = out
		}
	}

	return res, nil
}

// Authenticate - Authenticate with the API.
// Authenticate with the API.
func (s *SDK) Authenticate(ctx context.Context, request operations.AuthenticateRequest) (*operations.AuthenticateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/apps/accesstokens"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AuthenticateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AuthenticateAccessToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AccessToken = out
		}
	}

	return res, nil
}

// CancelBatchPayment - Cancel a batch
// Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
func (s *SDK) CancelBatchPayment(ctx context.Context, request operations.CancelBatchPaymentRequest) (*operations.CancelBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// CancelMandateByUUID - Cancel a direct debit mandate
// This endpoint allows you to cancel a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
func (s *SDK) CancelMandateByUUID(ctx context.Context, request operations.CancelMandateByUUIDRequest) (*operations.CancelMandateByUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}/cancel", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CancelMandateByUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// CreateAPIApplication - Create a new API Application
// Create a new API Application with specified permissions
func (s *SDK) CreateAPIApplication(ctx context.Context, request operations.CreateAPIApplicationRequest) (*operations.CreateAPIApplicationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/apps"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateAPIApplicationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateAPIApplicationAPIApplication
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIApplication = out
		}
	}

	return res, nil
}

// CreateBatchPayment - Create a new bath of payments
// This is the first step in creating a batch payment.
func (s *SDK) CreateBatchPayment(ctx context.Context, request operations.CreateBatchPaymentRequest) (*operations.CreateBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/batches"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateBatchPaymentNewBatchResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NewBatchResponse = out
		}
	}

	return res, nil
}

// CreateNewCard - Create a new debit card.
// You can create multiple debit cards which can be linked to your fire.com accounts.
func (s *SDK) CreateNewCard(ctx context.Context, request operations.CreateNewCardRequest) (*operations.CreateNewCardResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cards"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateNewCardResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateNewCardNewCardResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NewCardResponse = out
		}
	}

	return res, nil
}

// DeleteBankTransferBatchPayment - Remove a Payment from the Batch (Bank Transfers)
// Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
func (s *SDK) DeleteBankTransferBatchPayment(ctx context.Context, request operations.DeleteBankTransferBatchPaymentRequest) (*operations.DeleteBankTransferBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/banktransfers/{itemUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteBankTransferBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// DeleteInternalTransferBatchPayment - Remove a Payment from the Batch (Internal Transfer)
// Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
func (s *SDK) DeleteInternalTransferBatchPayment(ctx context.Context, request operations.DeleteInternalTransferBatchPaymentRequest) (*operations.DeleteInternalTransferBatchPaymentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/internaltransfers/{itemUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteInternalTransferBatchPaymentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetAccountByID - Retrieve the details of a fire.com Account
// You can retrieve the details of a fire.com Account by its `ican`.
func (s *SDK) GetAccountByID(ctx context.Context, request operations.GetAccountByIDRequest) (*operations.GetAccountByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{ican}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems = out
		}
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetAccounts - List all fire.com Accounts
// Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.
func (s *SDK) GetAccounts(ctx context.Context) (*operations.GetAccountsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/accounts"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetAccountsAccounts
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Accounts = out
		}
	case httpRes.StatusCode == 401:
	}

	return res, nil
}

// GetBatches - List batches
// Returns the list of batch with the specified types and statuses.
func (s *SDK) GetBatches(ctx context.Context, request operations.GetBatchesRequest) (*operations.GetBatchesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/batches"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetBatchesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetBatchesBatchItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchItems = out
		}
	}

	return res, nil
}

// GetDetailsSingleBatch - Get details of a single Batch
// Returns the details of the batch specified in the API endpoint - {batchUuid}.
func (s *SDK) GetDetailsSingleBatch(ctx context.Context, request operations.GetDetailsSingleBatchRequest) (*operations.GetDetailsSingleBatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDetailsSingleBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnebatchesGetResponses200ContentApplication1jsonSchemaPropertiesItemsItems = out
		}
	}

	return res, nil
}

// GetDirectDebitByUUID - Get the deails of a direct debit
// Retrieve all details of a single direct debit collection/payment, whether successful or not.
// The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
func (s *SDK) GetDirectDebitByUUID(ctx context.Context, request operations.GetDirectDebitByUUIDRequest) (*operations.GetDirectDebitByUUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directdebits/{directDebitUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitByUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems = out
		}
	}

	return res, nil
}

// GetDirectDebitMandates - List all direct debit mandates
// The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
func (s *SDK) GetDirectDebitMandates(ctx context.Context) (*operations.GetDirectDebitMandatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/mandates"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitMandatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDirectDebitMandatesMandates
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Mandates = out
		}
	}

	return res, nil
}

// GetDirectDebitsForMandateUUID - Get all DD payments associated with a direct debit mandate
// Retrieve all direct debit payments associated with a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
func (s *SDK) GetDirectDebitsForMandateUUID(ctx context.Context, request operations.GetDirectDebitsForMandateUUIDRequest) (*operations.GetDirectDebitsForMandateUUIDResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/directdebits"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDirectDebitsForMandateUUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetDirectDebitsForMandateUUIDDirectDebits
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DirectDebits = out
		}
	}

	return res, nil
}

// GetItemsBatchBankTransfer - List items in a Batch
// Returns a paginated list of items in the specified batch.
func (s *SDK) GetItemsBatchBankTransfer(ctx context.Context, request operations.GetItemsBatchBankTransferRequest) (*operations.GetItemsBatchBankTransferResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/banktransfers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetItemsBatchBankTransferResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnebatchesGetResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnebatchesGetResponses200ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// GetItemsBatchInternalTrasnfer - List items in a Batch
// Returns a paginated list of items in the specified batch.
func (s *SDK) GetItemsBatchInternalTrasnfer(ctx context.Context, request operations.GetItemsBatchInternalTrasnferRequest) (*operations.GetItemsBatchInternalTrasnferResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/internaltransfers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetItemsBatchInternalTrasnferResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnebatchesGetResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnebatchesGetResponses200ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// GetListOfAspsps - Get list of ASPSPs / Banks
// Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
// ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
func (s *SDK) GetListOfAspsps(ctx context.Context, request operations.GetListOfAspspsRequest) (*operations.GetListOfAspspsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/aspsps"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListOfAspspsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetListOfAspspsAspsps
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Aspsps = out
		}
	}

	return res, nil
}

// GetListofApproversForBatch - List Approvers for a Batch
// Returns a list of approvers for this batch.
func (s *SDK) GetListofApproversForBatch(ctx context.Context, request operations.GetListofApproversForBatchRequest) (*operations.GetListofApproversForBatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/batches/{batchUuid}/approvals", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListofApproversForBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetListofApproversForBatchBatchApprovers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BatchApprovers = out
		}
	}

	return res, nil
}

// GetListofCards - View List of Cards.
// Returns a list of cards related to your fire.com account.
func (s *SDK) GetListofCards(ctx context.Context) (*operations.GetListofCardsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/cards"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetListofCardsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetListofCardsCards
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Cards = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetMandate - Get direct debit mandate details
// Retrieve all details for a direct debit mandate.
// The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
func (s *SDK) GetMandate(ctx context.Context, request operations.GetMandateRequest) (*operations.GetMandateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMandateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems = out
		}
	}

	return res, nil
}

// GetPayees - List all Payee Bank Accounts
// Returns all your payee bank accounts.
//
// Ordered by date added descending.
//
// Can be paginated.
func (s *SDK) GetPayees(ctx context.Context) (*operations.GetPayeesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/payees"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPayeesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPayeesPayee
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Payee = out
		}
	}

	return res, nil
}

// GetPaymentDetails - Get Payment Details
// Returns the details of a specific payment.
//
// As the customer goes through the process of making the payment the status of the payment will change.
//
// * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
// * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
// * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
// * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
// * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
// * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
//
// You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
func (s *SDK) GetPaymentDetails(ctx context.Context, request operations.GetPaymentDetailsRequest) (*operations.GetPaymentDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/payments/{paymentUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPaymentDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetPaymentDetailsPaymentRequest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaymentRequest = out
		}
	}

	return res, nil
}

// GetTransactionsByID - List transactions for an account
// Retrieve a list of transactions against an account.
func (s *SDK) GetTransactionsByID(ctx context.Context, request operations.GetTransactionsByIDRequest) (*operations.GetTransactionsByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{ican}/transactions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTransactionsByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTransactionsByIDTransaction
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Transaction = out
		}
	}

	return res, nil
}

// GetTransactionsFilteredByID - Filtered list of transactions for an account
// Retrieve a filtered list of transactions against an account.
// * `dateRangeFrom` - A millisecond epoch time specifying the date range start date.
// * `dateRangeTo` - A millisecond epoch time specifying the date range end date.
// * `searchKeyword` - Search term to filter by from the reference field (`myRef`).
// * `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
func (s *SDK) GetTransactionsFilteredByID(ctx context.Context, request operations.GetTransactionsFilteredByIDRequest) (*operations.GetTransactionsFilteredByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{ican}/transactions/filter", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTransactionsFilteredByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema = out
		}
	}

	return res, nil
}

// GetUser - Returns details of a specific fire.com user.
// You can retrieve the details of a specific fire.com user
func (s *SDK) GetUser(ctx context.Context, request operations.GetUserRequest) (*operations.GetUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/{userId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.OneusersGetResponses200ContentApplication1jsonSchemaItems
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OneusersGetResponses200ContentApplication1jsonSchemaItems = out
		}
	}

	return res, nil
}

// GetUsers - Returns list of all users on your fire.com account
// You can retrieve the details of all fire.com users on your acount.
func (s *SDK) GetUsers(ctx context.Context) (*operations.GetUsersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/users"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetUsersUser
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Users = out
		}
	}

	return res, nil
}

// NewPaymentRequest - Create a Fire Open Payment request
// Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
// You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
func (s *SDK) NewPaymentRequest(ctx context.Context, request operations.NewPaymentRequestRequest) (*operations.NewPaymentRequestResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/paymentrequests"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.NewPaymentRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.NewPaymentRequestNewPaymentRequestResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.NewPaymentRequestResponse = out
		}
	}

	return res, nil
}

// RejectDirectDebit - Reject a direct debit payment
// This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
// Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
func (s *SDK) RejectDirectDebit(ctx context.Context, request operations.RejectDirectDebitRequest) (*operations.RejectDirectDebitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/directdebits/{directDebitUuid}/reject", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RejectDirectDebitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// SubmitBatch - Submit a batch for approval
// Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
//
// You can only submit a batch while it is in the OPEN state.
func (s *SDK) SubmitBatch(ctx context.Context) (*operations.SubmitBatchResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/batches"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SubmitBatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}

// UpdateMandateAlias - Update a direct debit mandate alias
// Update Direct Debit Mandate Alias
// The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
func (s *SDK) UpdateMandateAlias(ctx context.Context, request operations.UpdateMandateAliasRequest) (*operations.UpdateMandateAliasResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/mandates/{mandateUuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateMandateAliasResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
