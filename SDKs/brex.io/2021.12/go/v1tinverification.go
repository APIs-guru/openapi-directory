package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type V1TinVerification struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewV1TinVerification(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *V1TinVerification {
	return &V1TinVerification{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// TinVerificationBasicCheck - Verifies a TIN number
// Performs a basic verification check of a given TIN number and name.
func (s *V1TinVerification) TinVerificationBasicCheck(ctx context.Context, request operations.TinVerificationBasicCheckRequest) (*operations.TinVerificationBasicCheckResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/v1/tin-verification/basic-check"

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

	res := &operations.TinVerificationBasicCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationBasicCheck200ApplicationJSONAny = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationBasicCheckDefaultApplicationJSONAny = out
		}
	}

	return res, nil
}

// TinVerificationComprehensiveCheck - EIN Name Lookup with TIN number and retrieves company data
// Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details
func (s *V1TinVerification) TinVerificationComprehensiveCheck(ctx context.Context, request operations.TinVerificationComprehensiveCheckRequest) (*operations.TinVerificationComprehensiveCheckResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/v1/tin-verification/comprehensive-check"

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

	res := &operations.TinVerificationComprehensiveCheckResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationComprehensiveCheck200ApplicationJSONAny = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationComprehensiveCheckDefaultApplicationJSONAny = out
		}
	}

	return res, nil
}

// TinVerificationNameLookup - EIN Name Lookup with TIN number
// Performs an EIN name match using provided TIN Number
func (s *V1TinVerification) TinVerificationNameLookup(ctx context.Context, request operations.TinVerificationNameLookupRequest) (*operations.TinVerificationNameLookupResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/api/v1/tin-verification/name-lookup"

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

	res := &operations.TinVerificationNameLookupResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationNameLookup200ApplicationJSONAny = out
		}
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TinVerificationNameLookupDefaultApplicationJSONAny = out
		}
	}

	return res, nil
}
