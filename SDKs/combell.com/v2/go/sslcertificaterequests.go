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

type SslCertificateRequests struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSslCertificateRequests(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *SslCertificateRequests {
	return &SslCertificateRequests{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AddSslCertificateRequest - Add a SSL certificate request
// Executing this method causes the purchase of a paying product.<br />
// Log on to our website to see your current (renewal) prices or contact our Sales department.<br />
// Please note that promotional pricing does not apply for purchases made through our API.
func (s *SslCertificateRequests) AddSslCertificateRequest(ctx context.Context, request operations.AddSslCertificateRequestRequest) (*operations.AddSslCertificateRequestResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/sslcertificaterequests"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
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

	res := &operations.AddSslCertificateRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// GetSslCertificateRequest - Detail of a SSL certificate request
func (s *SslCertificateRequests) GetSslCertificateRequest(ctx context.Context, request operations.GetSslCertificateRequestRequest) (*operations.GetSslCertificateRequestResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/sslcertificaterequests/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSslCertificateRequestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SslCertificateRequestDetail
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SslCertificateRequestDetail = out
		}
	case httpRes.StatusCode == 303:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 410:
	}

	return res, nil
}

// GetSslCertificateRequests - Overview of SSL certificate requests
func (s *SslCertificateRequests) GetSslCertificateRequests(ctx context.Context, request operations.GetSslCertificateRequestsRequest) (*operations.GetSslCertificateRequestsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/sslcertificaterequests"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSslCertificateRequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.SslCertificateRequest
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SslCertificateRequests = out
		}
	}

	return res, nil
}

// VerifySslCertificateRequestDomainValidations - Verify the SSL certificate request domain validations
func (s *SslCertificateRequests) VerifySslCertificateRequestDomainValidations(ctx context.Context, request operations.VerifySslCertificateRequestDomainValidationsRequest) (*operations.VerifySslCertificateRequestDomainValidationsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/sslcertificaterequests/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.VerifySslCertificateRequestDomainValidationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 303:
		res.Headers = httpRes.Header

	case httpRes.StatusCode == 410:
	}

	return res, nil
}
