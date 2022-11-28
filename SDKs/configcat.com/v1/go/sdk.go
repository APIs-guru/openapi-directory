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
	"https://api.configcat.com",
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

// AddOrUpdateIntegrationLink - Add or update Integration link
func (s *SDK) AddOrUpdateIntegrationLink(ctx context.Context, request operations.AddOrUpdateIntegrationLinkRequest) (*operations.AddOrUpdateIntegrationLinkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.AddOrUpdateIntegrationLinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.IntegrationLinkModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IntegrationLinkModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IntegrationLinkModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IntegrationLinkModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreateConfig - Create Config
// This endpoint creates a new Config in a specified Product
// identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) CreateConfig(ctx context.Context, request operations.CreateConfigRequest) (*operations.CreateConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/configs", request.PathParams)

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

	res := &operations.CreateConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ConfigModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreateEnvironment - Create Environment
// This endpoint creates a new Environment in a specified Product
// identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) CreateEnvironment(ctx context.Context, request operations.CreateEnvironmentRequest) (*operations.CreateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/environments", request.PathParams)

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

	res := &operations.CreateEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.EnvironmentModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EnvironmentModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreatePermissionGroup - Create Permission Group
// This endpoint creates a new Permission Group in a specified Product
// identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) CreatePermissionGroup(ctx context.Context, request operations.CreatePermissionGroupRequest) (*operations.CreatePermissionGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/permissions", request.PathParams)

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

	res := &operations.CreatePermissionGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreateProduct - Create Product
// This endpoint creates a new Product in a specified Organization
// identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
func (s *SDK) CreateProduct(ctx context.Context, request operations.CreateProductRequest) (*operations.CreateProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/organizations/{organizationId}/products", request.PathParams)

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

	res := &operations.CreateProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ProductModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProductModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreateSetting - Create Flag
// This endpoint creates a new Feature Flag or Setting in a specified Config
// identified by the `configId` parameter.
//
// **Important:** The `key` attribute must be unique within the given Config.
func (s *SDK) CreateSetting(ctx context.Context, request operations.CreateSettingRequest) (*operations.CreateSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/settings", request.PathParams)

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

	res := &operations.CreateSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// CreateTag - Create Tag
// This endpoint creates a new Tag in a specified Product
// identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) CreateTag(ctx context.Context, request operations.CreateTagRequest) (*operations.CreateTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/tags", request.PathParams)

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

	res := &operations.CreateTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.TagModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TagModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteConfig - Delete Config
// This endpoint removes a Config identified by the `configId` parameter.
func (s *SDK) DeleteConfig(ctx context.Context, request operations.DeleteConfigRequest) (*operations.DeleteConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}", request.PathParams)

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

	res := &operations.DeleteConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteEnvironment - Delete Environment
// This endpoint removes an Environment identified by the `environmentId` parameter.
func (s *SDK) DeleteEnvironment(ctx context.Context, request operations.DeleteEnvironmentRequest) (*operations.DeleteEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}", request.PathParams)

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

	res := &operations.DeleteEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteIntegrationLink - Delete Integration link
func (s *SDK) DeleteIntegrationLink(ctx context.Context, request operations.DeleteIntegrationLinkRequest) (*operations.DeleteIntegrationLinkResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}", request.PathParams)

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

	res := &operations.DeleteIntegrationLinkResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.DeleteIntegrationLinkModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteIntegrationLinkModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DeleteIntegrationLinkModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteIntegrationLinkModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteOrganizationMember - Delete Member from Organization
// This endpoint removes a Member identified by the `userId` from the
// given Organization identified by the `organizationId` parameter.
func (s *SDK) DeleteOrganizationMember(ctx context.Context, request operations.DeleteOrganizationMemberRequest) (*operations.DeleteOrganizationMemberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/organizations/{organizationId}/members/{userId}", request.PathParams)

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

	res := &operations.DeleteOrganizationMemberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeletePermissionGroup - Delete Permission Group
// This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
func (s *SDK) DeletePermissionGroup(ctx context.Context, request operations.DeletePermissionGroupRequest) (*operations.DeletePermissionGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/permissions/{permissionGroupId}", request.PathParams)

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

	res := &operations.DeletePermissionGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteProduct - Delete Product
// This endpoint removes a Product identified by the `productId` parameter.
func (s *SDK) DeleteProduct(ctx context.Context, request operations.DeleteProductRequest) (*operations.DeleteProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}", request.PathParams)

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

	res := &operations.DeleteProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteProductMember - Delete Member from Product
// This endpoint removes a Member identified by the `userId` from the
// given Product identified by the `productId` parameter.
func (s *SDK) DeleteProductMember(ctx context.Context, request operations.DeleteProductMemberRequest) (*operations.DeleteProductMemberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/members/{userId}", request.PathParams)

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

	res := &operations.DeleteProductMemberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteSetting - Delete Flag
// This endpoint removes a Feature Flag or Setting from a specified Config,
// identified by the `configId` parameter.
func (s *SDK) DeleteSetting(ctx context.Context, request operations.DeleteSettingRequest) (*operations.DeleteSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

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

	res := &operations.DeleteSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// DeleteTag - Delete Tag
// This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
func (s *SDK) DeleteTag(ctx context.Context, request operations.DeleteTagRequest) (*operations.DeleteTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/tags/{tagId}", request.PathParams)

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

	res := &operations.DeleteTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetAuditlogs - List Audit log items for Product
// This endpoint returns the list of Audit log items for a given Product
// and the result can be optionally filtered by Config and/or Environment.
func (s *SDK) GetAuditlogs(ctx context.Context, request operations.GetAuditlogsRequest) (*operations.GetAuditlogsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/auditlogs", request.PathParams)

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

	res := &operations.GetAuditlogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.AuditLogItemModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditLogItemModels = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AuditLogItemModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditLogItemModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetConfig - Get Config
// This endpoint returns the metadata of a Config
// identified by the `configId`.
func (s *SDK) GetConfig(ctx context.Context, request operations.GetConfigRequest) (*operations.GetConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}", request.PathParams)

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

	res := &operations.GetConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ConfigModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetConfigs - List Configs
// This endpoint returns the list of the Configs that belongs to the given Product identified by the
// `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) GetConfigs(ctx context.Context, request operations.GetConfigsRequest) (*operations.GetConfigsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/configs", request.PathParams)

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

	res := &operations.GetConfigsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.ConfigModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ConfigModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetDeletedSettings - List Deleted Settings
// This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
func (s *SDK) GetDeletedSettings(ctx context.Context, request operations.GetDeletedSettingsRequest) (*operations.GetDeletedSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/deleted-settings", request.PathParams)

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

	res := &operations.GetDeletedSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetEnvironment - Get Environment
// This endpoint returns the metadata of an Environment
// identified by the `environmentId`.
func (s *SDK) GetEnvironment(ctx context.Context, request operations.GetEnvironmentRequest) (*operations.GetEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}", request.PathParams)

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

	res := &operations.GetEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.EnvironmentModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EnvironmentModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetEnvironments - List Environments
// This endpoint returns the list of the Environments that belongs to the given Product identified by the
// `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) GetEnvironments(ctx context.Context, request operations.GetEnvironmentsRequest) (*operations.GetEnvironmentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/environments", request.PathParams)

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

	res := &operations.GetEnvironmentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.EnvironmentModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.EnvironmentModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetIntegrationLinkDetails - Get Integration link
func (s *SDK) GetIntegrationLinkDetails(ctx context.Context, request operations.GetIntegrationLinkDetailsRequest) (*operations.GetIntegrationLinkDetailsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/integrationLink/{integrationLinkType}/{key}/details", request.PathParams)

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

	res := &operations.GetIntegrationLinkDetailsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.IntegrationLinkDetailsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IntegrationLinkDetailsModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.IntegrationLinkDetailsModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.IntegrationLinkDetailsModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetMe - Get authenticated user details
func (s *SDK) GetMe(ctx context.Context) (*operations.GetMeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/me"

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

	res := &operations.GetMeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.MeModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MeModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MeModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MeModel = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetOrganizationAuditlogs - List Audit log items for Organization
// This endpoint returns the list of Audit log items for a given Organization
// and the result can be optionally filtered by Product and/or Config and/or Environment.
func (s *SDK) GetOrganizationAuditlogs(ctx context.Context, request operations.GetOrganizationAuditlogsRequest) (*operations.GetOrganizationAuditlogsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/organizations/{organizationId}/auditlogs", request.PathParams)

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

	res := &operations.GetOrganizationAuditlogsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.AuditLogItemModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditLogItemModels = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.AuditLogItemModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AuditLogItemModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetOrganizationMembers - List Organization Members
// This endpoint returns the list of Members that belongs
// to the given Organization, identified by the `organizationId` parameter.
func (s *SDK) GetOrganizationMembers(ctx context.Context, request operations.GetOrganizationMembersRequest) (*operations.GetOrganizationMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/organizations/{organizationId}/members", request.PathParams)

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

	res := &operations.GetOrganizationMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.UserModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserModels = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.UserModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetOrganizations - List Organizations
// This endpoint returns the list of the Organizations that belongs to the user.
func (s *SDK) GetOrganizations(ctx context.Context) (*operations.GetOrganizationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/organizations"

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

	res := &operations.GetOrganizationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.OrganizationModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.OrganizationModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OrganizationModels = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetPermissionGroup - Get Permission Group
// This endpoint returns the metadata of a Permission Group
// identified by the `permissionGroupId`.
func (s *SDK) GetPermissionGroup(ctx context.Context, request operations.GetPermissionGroupRequest) (*operations.GetPermissionGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/permissions/{permissionGroupId}", request.PathParams)

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

	res := &operations.GetPermissionGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetPermissionGroups - List Permission Groups
// This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
// `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
func (s *SDK) GetPermissionGroups(ctx context.Context, request operations.GetPermissionGroupsRequest) (*operations.GetPermissionGroupsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/permissions", request.PathParams)

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

	res := &operations.GetPermissionGroupsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModels = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetProduct - Get Product
// This endpoint returns the metadata of a Product
// identified by the `productId`.
func (s *SDK) GetProduct(ctx context.Context, request operations.GetProductRequest) (*operations.GetProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}", request.PathParams)

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

	res := &operations.GetProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ProductModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProductModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetProductMembers - List Product Members
// This endpoint returns the list of Members that belongs
// to the given Product, identified by the `productId` parameter.
func (s *SDK) GetProductMembers(ctx context.Context, request operations.GetProductMembersRequest) (*operations.GetProductMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/members", request.PathParams)

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

	res := &operations.GetProductMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.MemberModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MemberModels = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.MemberModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MemberModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetProducts - List Products
// This endpoint returns the list of the Products that belongs to the user.
func (s *SDK) GetProducts(ctx context.Context) (*operations.GetProductsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1/products"

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

	res := &operations.GetProductsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.ProductModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.ProductModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModels = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSdkKeys - Get SDK Key
// This endpoint returns the SDK Key for your Config in a specified Environment.
func (s *SDK) GetSdkKeys(ctx context.Context, request operations.GetSDKKeysRequest) (*operations.GetSDKKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/environments/{environmentId}", request.PathParams)

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

	res := &operations.GetSDKKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SDKKeysModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SdkKeysModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SDKKeysModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SdkKeysModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSetting - Get Flag
// This endpoint returns the metadata attributes of a Feature Flag or Setting
// identified by the `settingId` parameter.
func (s *SDK) GetSetting(ctx context.Context, request operations.GetSettingRequest) (*operations.GetSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

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

	res := &operations.GetSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettingValue - Get value
// This endpoint returns the value of a Feature Flag or Setting
// in a specified Environment identified by the `environmentId` parameter.
//
// The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
// The `value` represents what the clients will get when the evaluation requests of our SDKs
// are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
//
// The `rolloutRules` and `percentageRules` attributes are representing the current
// Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
// in an **ordered** collection, which means the order of the returned rules is matching to the
// evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
func (s *SDK) GetSettingValue(ctx context.Context, request operations.GetSettingValueRequest) (*operations.GetSettingValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", request.PathParams)

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

	res := &operations.GetSettingValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettingValueBySdkkey - Get value
// This endpoint returns the value of a Feature Flag or Setting
// in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
//
// The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
// The `value` represents what the clients will get when the evaluation requests of our SDKs
// are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
//
// The `rolloutRules` and `percentageRules` attributes are representing the current
// Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
// in an **ordered** collection, which means the order of the returned rules is matching to the
// evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
func (s *SDK) GetSettingValueBySdkkey(ctx context.Context, request operations.GetSettingValueBySdkkeyRequest) (*operations.GetSettingValueBySdkkeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingKeyOrId}/value", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSettingValueBySdkkeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettingValues - Get values
// This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
// in a specified Environment identified by the `environmentId` parameter.
//
// The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
// The `value` represents what the clients will get when the evaluation requests of our SDKs
// are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
//
// The `rolloutRules` and `percentageRules` attributes are representing the current
// Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
// in an **ordered** collection, which means the order of the returned rules is matching to the
// evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
func (s *SDK) GetSettingValues(ctx context.Context, request operations.GetSettingValuesRequest) (*operations.GetSettingValuesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/environments/{environmentId}/values", request.PathParams)

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

	res := &operations.GetSettingValuesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ConfigSettingValuesModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSettingValuesModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigSettingValuesModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigSettingValuesModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettings - List Flags
// This endpoint returns the list of the Feature Flags and Settings defined in a
// specified Config, identified by the `configId` parameter.
func (s *SDK) GetSettings(ctx context.Context, request operations.GetSettingsRequest) (*operations.GetSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}/settings", request.PathParams)

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

	res := &operations.GetSettingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetSettingsByTag - List Settings by Tag
// This endpoint returns the list of the Settings that
// has the specified Tag, identified by the `tagId` parameter.
func (s *SDK) GetSettingsByTag(ctx context.Context, request operations.GetSettingsByTagRequest) (*operations.GetSettingsByTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/tags/{tagId}/settings", request.PathParams)

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

	res := &operations.GetSettingsByTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModels = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetTag - Get Tag
// This endpoint returns the metadata of a Tag
// identified by the `tagId`.
func (s *SDK) GetTag(ctx context.Context, request operations.GetTagRequest) (*operations.GetTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/tags/{tagId}", request.PathParams)

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

	res := &operations.GetTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.TagModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TagModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// GetTags - List Tags
// This endpoint returns the list of the Tags in a
// specified Product, identified by the `productId` parameter.
func (s *SDK) GetTags(ctx context.Context, request operations.GetTagsRequest) (*operations.GetTagsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/tags", request.PathParams)

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

	res := &operations.GetTagsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out []shared.TagModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModelHaljsons = out
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.TagModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModels = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// InviteMember - Invite Member
// This endpoint invites a Member into the given Product identified by the `productId` parameter.
func (s *SDK) InviteMember(ctx context.Context, request operations.InviteMemberRequest) (*operations.InviteMemberResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}/members/invite", request.PathParams)

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

	res := &operations.InviteMemberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// ReplaceSettingValue - Replace value
// This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
//
// Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
//
// **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
// want to change in its original state. Not listing one means that it will reset.
//
// For example: We have the following resource.
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": false
//	}
//
// ```
// If we send a replace request body as below:
// ```
//
//	{
//		"value": true
//	}
//
// ```
// Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
// So we get a response like this:
// ```
//
//	{
//		"rolloutPercentageItems": [],
//		"rolloutRules": [],
//		"value": true
//	}
//
// ```
func (s *SDK) ReplaceSettingValue(ctx context.Context, request operations.ReplaceSettingValueRequest) (*operations.ReplaceSettingValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReplaceSettingValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// ReplaceSettingValueBySdkkey - Replace value
// This endpoint replaces the value of a Feature Flag or Setting
// in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
//
// Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
//
// **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
// want to change to its original state. Not listing one means that it will reset.
//
// For example: We have the following resource.
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": false
//	}
//
// ```
// If we send a replace request body as below:
// ```
//
//	{
//		"value": true
//	}
//
// ```
// Then besides that the default served value is set to `true`, all the Percentage Rules are deleted.
// So we get a response like this:
// ```
//
//	{
//		"rolloutPercentageItems": [],
//		"rolloutRules": [],
//		"value": true
//	}
//
// ```
func (s *SDK) ReplaceSettingValueBySdkkey(ctx context.Context, request operations.ReplaceSettingValueBySdkkeyRequest) (*operations.ReplaceSettingValueBySdkkeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingKeyOrId}/value", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ReplaceSettingValueBySdkkeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateConfig - Update Config
// This endpoint updates a Config identified by the `configId` parameter.
func (s *SDK) UpdateConfig(ctx context.Context, request operations.UpdateConfigRequest) (*operations.UpdateConfigResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/configs/{configId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateConfigResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ConfigModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ConfigModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ConfigModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateEnvironment - Update Environment
// This endpoint updates an Environment identified by the `environmentId` parameter.
func (s *SDK) UpdateEnvironment(ctx context.Context, request operations.UpdateEnvironmentRequest) (*operations.UpdateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateEnvironmentResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.EnvironmentModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EnvironmentModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EnvironmentModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdatePermissionGroup - Update Permission Group
// This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
func (s *SDK) UpdatePermissionGroup(ctx context.Context, request operations.UpdatePermissionGroupRequest) (*operations.UpdatePermissionGroupResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/permissions/{permissionGroupId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdatePermissionGroupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PermissionGroupModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PermissionGroupModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateProduct - Update Product
// This endpoint updates a Product identified by the `productId` parameter.
func (s *SDK) UpdateProduct(ctx context.Context, request operations.UpdateProductRequest) (*operations.UpdateProductResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/products/{productId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.ProductModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ProductModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateSetting - Update Flag
// This endpoint updates the metadata of a Feature Flag or Setting
// with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
//
// Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
// The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
//
// The advantage of using JSON Patch is that you can describe individual update operations on a resource
// without touching attributes that you don't want to change.
//
// For example: We have the following resource.
// ```
//
//	{
//		"settingId": 5345,
//		"key": "myGrandFeature",
//		"name": "Tihs is a naem with soem typos.",
//		"hint": "This flag controls my grandioso feature.",
//		"settingType": "boolean",
//		"tags": [
//			{
//				"tagId": 0,
//				"name": "sample tag",
//				"color": "whale"
//			}
//		]
//	}
//
// ```
// If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
// ```
// [
//
//	{
//		"op": "replace",
//		"path": "/name",
//		"value": "This is the name without typos."
//	},
//	{
//		"op": "add",
//		"path": "/tags/-",
//		"value": 2
//	}
//
// ]
// ```
// Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
// So we get a response like this:
// ```
//
//	{
//		"settingId": 5345,
//		"key": "myGrandFeature",
//		"name": "This is the name without typos.",
//		"hint": "This flag controls my grandioso feature.",
//		"settingType": "boolean",
//		"tags": [
//			{
//				"tagId": 0,
//				"name": "sample tag",
//				"color": "whale"
//			},
//			{
//				"tagId": 2,
//				"name": "another tag",
//				"color": "koala"
//			}
//		]
//	}
//
// ```
func (s *SDK) UpdateSetting(ctx context.Context, request operations.UpdateSettingRequest) (*operations.UpdateSettingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.UpdateSettingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateSettingValue - Update value
// This endpoint updates the value of a Feature Flag or Setting
// with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
//
// Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
//
// The advantage of using JSON Patch is that you can describe individual update operations on a resource
// without touching attributes that you don't want to change. It supports collection reordering, so it also
// can be used for reordering the targeting rules of a Feature Flag or Setting.
//
// For example: We have the following resource.
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": false
//	}
//
// ```
// If we send an update request body as below:
// ```
// [
//
//	{
//		"op": "replace",
//		"path": "/value",
//		"value": true
//	}
//
// ]
// ```
// Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
// So we get a response like this:
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": true
//	}
//
// ```
func (s *SDK) UpdateSettingValue(ctx context.Context, request operations.UpdateSettingValueRequest) (*operations.UpdateSettingValueResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/environments/{environmentId}/settings/{settingId}/value", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSettingValueResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateSettingValueBySdkkey - Update value
// This endpoint updates the value of a Feature Flag or Setting
// with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
// identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
//
// Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
//
// The advantage of using JSON Patch is that you can describe individual update operations on a resource
// without touching attributes that you don't want to change. It supports collection reordering, so it also
// can be used for reordering the targeting rules of a Feature Flag or Setting.
//
// For example: We have the following resource.
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": false
//	}
//
// ```
// If we send an update request body as below:
// ```
// [
//
//	{
//		"op": "replace",
//		"path": "/value",
//		"value": true
//	}
//
// ]
// ```
// Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
// So we get a response like this:
// ```
//
//	{
//		"rolloutPercentageItems": [
//			{
//				"percentage": 30,
//				"value": true
//			},
//			{
//				"percentage": 70,
//				"value": false
//			}
//		],
//		"rolloutRules": [],
//		"value": true
//	}
//
// ```
func (s *SDK) UpdateSettingValueBySdkkey(ctx context.Context, request operations.UpdateSettingValueBySdkkeyRequest) (*operations.UpdateSettingValueBySdkkeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/settings/{settingKeyOrId}/value", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateSettingValueBySdkkeyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.SettingValueModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SettingValueModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SettingValueModel = out
		}
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}

// UpdateTag - Update Tag
// This endpoint updates a Tag identified by the `tagId` parameter.
func (s *SDK) UpdateTag(ctx context.Context, request operations.UpdateTagRequest) (*operations.UpdateTagResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/tags/{tagId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateTagResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/hal+json`):
			var out *shared.TagModelHaljson
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModelHaljson = out
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TagModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TagModel = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 429:
	}

	return res, nil
}
