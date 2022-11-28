package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Entitlements struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEntitlements(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Entitlements {
	return &Entitlements{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AndroidenterpriseEntitlementsDelete - Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
func (s *Entitlements) AndroidenterpriseEntitlementsDelete(ctx context.Context, request operations.AndroidenterpriseEntitlementsDeleteRequest) (*operations.AndroidenterpriseEntitlementsDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}", request.PathParams)

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

	res := &operations.AndroidenterpriseEntitlementsDeleteResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// AndroidenterpriseEntitlementsGet - Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
func (s *Entitlements) AndroidenterpriseEntitlementsGet(ctx context.Context, request operations.AndroidenterpriseEntitlementsGetRequest) (*operations.AndroidenterpriseEntitlementsGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}", request.PathParams)

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

	res := &operations.AndroidenterpriseEntitlementsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Entitlement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Entitlement = out
		}
	}

	return res, nil
}

// AndroidenterpriseEntitlementsList - Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
func (s *Entitlements) AndroidenterpriseEntitlementsList(ctx context.Context, request operations.AndroidenterpriseEntitlementsListRequest) (*operations.AndroidenterpriseEntitlementsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements", request.PathParams)

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

	res := &operations.AndroidenterpriseEntitlementsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.EntitlementsListResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.EntitlementsListResponse = out
		}
	}

	return res, nil
}

// AndroidenterpriseEntitlementsUpdate - Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
func (s *Entitlements) AndroidenterpriseEntitlementsUpdate(ctx context.Context, request operations.AndroidenterpriseEntitlementsUpdateRequest) (*operations.AndroidenterpriseEntitlementsUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.AndroidenterpriseEntitlementsUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Entitlement
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Entitlement = out
		}
	}

	return res, nil
}
