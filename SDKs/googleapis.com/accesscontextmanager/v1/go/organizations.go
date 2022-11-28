package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Organizations struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOrganizations(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Organizations {
	return &Organizations{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate - Creates a GcpUserAccessBinding. If the client specifies a name, the server ignores it. Fails if a resource already exists with the same group_key. Completion of this long-running operation does not necessarily signify that the new binding is deployed onto all affected users, which may take more time.
func (s *Organizations) AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreate(ctx context.Context, request operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateRequest) (*operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/gcpUserAccessBindings", request.PathParams)

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

	res := &operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete - Deletes a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the binding deletion is deployed onto all affected users, which may take more time.
func (s *Organizations) AccesscontextmanagerOrganizationsGcpUserAccessBindingsDelete(ctx context.Context, request operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteRequest) (*operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}

// AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet - Gets the GcpUserAccessBinding with the given name.
func (s *Organizations) AccesscontextmanagerOrganizationsGcpUserAccessBindingsGet(ctx context.Context, request operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetRequest) (*operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GcpUserAccessBinding
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GcpUserAccessBinding = out
		}
	}

	return res, nil
}

// AccesscontextmanagerOrganizationsGcpUserAccessBindingsList - Lists all GcpUserAccessBindings for a Google Cloud organization.
func (s *Organizations) AccesscontextmanagerOrganizationsGcpUserAccessBindingsList(ctx context.Context, request operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListRequest) (*operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/gcpUserAccessBindings", request.PathParams)

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

	res := &operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListGcpUserAccessBindingsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListGcpUserAccessBindingsResponse = out
		}
	}

	return res, nil
}

// AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch - Updates a GcpUserAccessBinding. Completion of this long-running operation does not necessarily signify that the changed binding is deployed onto all affected users, which may take more time.
func (s *Organizations) AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatch(ctx context.Context, request operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchRequest) (*operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.AccesscontextmanagerOrganizationsGcpUserAccessBindingsPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Operation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Operation = out
		}
	}

	return res, nil
}
