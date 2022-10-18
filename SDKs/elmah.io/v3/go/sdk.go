package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

var Servers = []string{
	"https://elmah.io",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk.securityClient = utils.CreateSecurityClient(security)
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) DeploymentsCreate(ctx context.Context, request operations.DeploymentsCreateRequest) (*operations.DeploymentsCreateResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/deployments"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeploymentsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateDeploymentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDeploymentResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.CreateDeploymentResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDeploymentResult = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) DeploymentsDelete(ctx context.Context, request operations.DeploymentsDeleteRequest) (*operations.DeploymentsDeleteResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/deployments/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeploymentsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) DeploymentsGet(ctx context.Context, request operations.DeploymentsGetRequest) (*operations.DeploymentsGetResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/deployments/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeploymentsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Deployment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deployment = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.Deployment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deployment = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) DeploymentsGetAll(ctx context.Context) (*operations.DeploymentsGetAllResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/deployments"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeploymentsGetAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Deployment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deployments = out
		case utils.MatchContentType(contentType, `text/json`):
			var out []shared.Deployment
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Deployments = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) HeartbeatsCreate(ctx context.Context, request operations.HeartbeatsCreateRequest) (*operations.HeartbeatsCreateResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/heartbeats/{logId}/{id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.HeartbeatsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) LogsCreate(ctx context.Context, request operations.LogsCreateRequest) (*operations.LogsCreateResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/logs"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LogsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateLogResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateLogResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.CreateLogResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateLogResult = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) LogsDisable(ctx context.Context, request operations.LogsDisableRequest) (*operations.LogsDisableResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/logs/{id}/_disable", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LogsDisableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) LogsEnable(ctx context.Context, request operations.LogsEnableRequest) (*operations.LogsEnableResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/logs/{id}/_enable", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LogsEnableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) LogsGet(ctx context.Context, request operations.LogsGetRequest) (*operations.LogsGetResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/logs/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LogsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Log
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Log = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.Log
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Log = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) LogsGetAll(ctx context.Context) (*operations.LogsGetAllResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/logs"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.LogsGetAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Log
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Logs = out
		case utils.MatchContentType(contentType, `text/json`):
			var out []shared.Log
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Logs = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesCreate(ctx context.Context, request operations.MessagesCreateRequest) (*operations.MessagesCreateResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMessageResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.CreateMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMessageResult = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMessageResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.CreateMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMessageResult = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 413:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesCreateBulk(ctx context.Context, request operations.MessagesCreateBulkRequest) (*operations.MessagesCreateBulkResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}/_bulk", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesCreateBulkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.CreateBulkMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateBulkMessageResults = out
		case utils.MatchContentType(contentType, `text/json`):
			var out []shared.CreateBulkMessageResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateBulkMessageResults = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesDelete(ctx context.Context, request operations.MessagesDeleteRequest) (*operations.MessagesDeleteResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesDeleteAll(ctx context.Context, request operations.MessagesDeleteAllRequest) (*operations.MessagesDeleteAllResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}
	req.Header.Set("Content-Type", reqContentType)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesDeleteAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesFix(ctx context.Context, request operations.MessagesFixRequest) (*operations.MessagesFixResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}/{id}/_fix", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesFixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesGet(ctx context.Context, request operations.MessagesGetRequest) (*operations.MessagesGetResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Message
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Message = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.Message
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Message = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesGetAll(ctx context.Context, request operations.MessagesGetAllRequest) (*operations.MessagesGetAllResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesGetAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MessagesResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MessagesResult = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.MessagesResult
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MessagesResult = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) MessagesHide(ctx context.Context, request operations.MessagesHideRequest) (*operations.MessagesHideResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/messages/{logId}/{id}/_hide", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MessagesHideResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) SourceMapsCreateOrUpdate(ctx context.Context, request operations.SourceMapsCreateOrUpdateRequest) (*operations.SourceMapsCreateOrUpdateResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v3/sourcemaps/{logId}", request.PathParams)

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

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SourceMapsCreateOrUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

func (s *SDK) UptimeChecksGetAll(ctx context.Context) (*operations.UptimeChecksGetAllResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v3/uptimechecks"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UptimeChecksGetAllResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UptimeCheck
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UptimeChecks = out
		case utils.MatchContentType(contentType, `text/json`):
			var out []shared.UptimeCheck
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UptimeChecks = out
		case utils.MatchContentType(contentType, `text/plain`):
			data, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = data
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 402:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}
