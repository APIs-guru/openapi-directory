package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Bidders struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBidders(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Bidders {
	return &Bidders{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// Adexchangebuyer2BiddersFilterSetsBidMetricsList - Lists all metrics that are measured in terms of number of bids.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsBidMetricsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/bidMetrics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsBidMetricsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBidMetricsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBidMetricsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList - List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsBidResponseErrorsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/bidResponseErrors", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsBidResponseErrorsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBidResponseErrorsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBidResponseErrorsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList - List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/bidResponsesWithoutBids", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsBidResponsesWithoutBidsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListBidResponsesWithoutBidsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListBidResponsesWithoutBidsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsCreate - Creates the specified filter set for the account with the given account ID.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsCreate(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsCreateRequest) (*operations.Adexchangebuyer2BiddersFilterSetsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{ownerName}/filterSets", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FilterSet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FilterSet = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsDelete - Deletes the requested filter set from the account with the given account ID.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsDelete(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsDeleteRequest) (*operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Empty = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList - List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/filteredBidRequests", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsFilteredBidRequestsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListFilteredBidRequestsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFilteredBidRequestsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList - List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsCreativesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCreativeStatusBreakdownByCreativeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCreativeStatusBreakdownByCreativeResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList - List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsDetailsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCreativeStatusBreakdownByDetailResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCreativeStatusBreakdownByDetailResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsFilteredBidsList - List all reasons for which bids were filtered, with the number of bids filtered for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsFilteredBidsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/filteredBids", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsFilteredBidsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListFilteredBidsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFilteredBidsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsGet - Retrieves the requested filter set for the account with the given account ID.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsGet(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsGetRequest) (*operations.Adexchangebuyer2BiddersFilterSetsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FilterSet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FilterSet = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsImpressionMetricsList - Lists all metrics that are measured in terms of number of impressions.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsImpressionMetricsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/impressionMetrics", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsImpressionMetricsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListImpressionMetricsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListImpressionMetricsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsList - Lists all filter sets for the account with the given account ID.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{ownerName}/filterSets", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListFilterSetsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListFilterSetsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsLosingBidsList - List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsLosingBidsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/losingBids", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsLosingBidsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListLosingBidsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListLosingBidsResponse = out
		}
	}

	return res, nil
}

// Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList - List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
func (s *Bidders) Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsList(ctx context.Context, request operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListRequest) (*operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2beta1/{filterSetName}/nonBillableWinningBids", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.Adexchangebuyer2BiddersFilterSetsNonBillableWinningBidsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListNonBillableWinningBidsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListNonBillableWinningBidsResponse = out
		}
	}

	return res, nil
}
