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

type Properties struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProperties(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Properties {
	return &Properties{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AnalyticsadminPropertiesAcknowledgeUserDataCollection - Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or via this API) before MeasurementProtocolSecret resources may be created.
func (s *Properties) AnalyticsadminPropertiesAcknowledgeUserDataCollection(ctx context.Context, request operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionRequest) (*operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{property}:acknowledgeUserDataCollection", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesAcknowledgeUserDataCollectionResponse{
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

			res.GoogleAnalyticsAdminV1alphaAcknowledgeUserDataCollectionResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesAudiencesCreate - Creates an Audience.
func (s *Properties) AnalyticsadminPropertiesAudiencesCreate(ctx context.Context, request operations.AnalyticsadminPropertiesAudiencesCreateRequest) (*operations.AnalyticsadminPropertiesAudiencesCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/audiences", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesAudiencesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaAudience
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaAudience = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesAudiencesList - Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
func (s *Properties) AnalyticsadminPropertiesAudiencesList(ctx context.Context, request operations.AnalyticsadminPropertiesAudiencesListRequest) (*operations.AnalyticsadminPropertiesAudiencesListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/audiences", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesAudiencesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListAudiencesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListAudiencesResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesConversionEventsCreate - Creates a conversion event with the specified attributes.
func (s *Properties) AnalyticsadminPropertiesConversionEventsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesConversionEventsCreateRequest) (*operations.AnalyticsadminPropertiesConversionEventsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/conversionEvents", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesConversionEventsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaConversionEvent
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaConversionEvent = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesConversionEventsList - Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
func (s *Properties) AnalyticsadminPropertiesConversionEventsList(ctx context.Context, request operations.AnalyticsadminPropertiesConversionEventsListRequest) (*operations.AnalyticsadminPropertiesConversionEventsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/conversionEvents", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesConversionEventsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListConversionEventsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListConversionEventsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCreate - Creates an "GA4" property with the specified location and attributes.
func (s *Properties) AnalyticsadminPropertiesCreate(ctx context.Context, request operations.AnalyticsadminPropertiesCreateRequest) (*operations.AnalyticsadminPropertiesCreateResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1alpha/properties"

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

	res := &operations.AnalyticsadminPropertiesCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaProperty
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaProperty = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCustomDimensionsCreate - Creates a CustomDimension.
func (s *Properties) AnalyticsadminPropertiesCustomDimensionsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesCustomDimensionsCreateRequest) (*operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/customDimensions", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesCustomDimensionsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaCustomDimension
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaCustomDimension = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCustomDimensionsList - Lists CustomDimensions on a property.
func (s *Properties) AnalyticsadminPropertiesCustomDimensionsList(ctx context.Context, request operations.AnalyticsadminPropertiesCustomDimensionsListRequest) (*operations.AnalyticsadminPropertiesCustomDimensionsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/customDimensions", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesCustomDimensionsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCustomMetricsArchive - Archives a CustomMetric on a property.
func (s *Properties) AnalyticsadminPropertiesCustomMetricsArchive(ctx context.Context, request operations.AnalyticsadminPropertiesCustomMetricsArchiveRequest) (*operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:archive", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesCustomMetricsArchiveResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCustomMetricsCreate - Creates a CustomMetric.
func (s *Properties) AnalyticsadminPropertiesCustomMetricsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesCustomMetricsCreateRequest) (*operations.AnalyticsadminPropertiesCustomMetricsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/customMetrics", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesCustomMetricsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaCustomMetric
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaCustomMetric = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesCustomMetricsList - Lists CustomMetrics on a property.
func (s *Properties) AnalyticsadminPropertiesCustomMetricsList(ctx context.Context, request operations.AnalyticsadminPropertiesCustomMetricsListRequest) (*operations.AnalyticsadminPropertiesCustomMetricsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/customMetrics", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesCustomMetricsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListCustomMetricsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDataStreamsCreate - Creates a DataStream.
func (s *Properties) AnalyticsadminPropertiesDataStreamsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesDataStreamsCreateRequest) (*operations.AnalyticsadminPropertiesDataStreamsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/dataStreams", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDataStreamsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaDataStream
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaDataStream = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDataStreamsList - Lists DataStreams on a property.
func (s *Properties) AnalyticsadminPropertiesDataStreamsList(ctx context.Context, request operations.AnalyticsadminPropertiesDataStreamsListRequest) (*operations.AnalyticsadminPropertiesDataStreamsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/dataStreams", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDataStreamsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListDataStreamsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListDataStreamsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate - Creates a measurement protocol secret.
func (s *Properties) AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateRequest) (*operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/measurementProtocolSecrets", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList - Returns child MeasurementProtocolSecrets under the specified parent Property.
func (s *Properties) AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsList(ctx context.Context, request operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListRequest) (*operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/measurementProtocolSecrets", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListMeasurementProtocolSecretsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove - Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprove(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:approve", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel - Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancel(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}:cancel", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCancelResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate - Creates a DisplayVideo360AdvertiserLinkProposal.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreate(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList - Lists DisplayVideo360AdvertiserLinkProposals on a property.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsList(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/displayVideo360AdvertiserLinkProposals", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate - Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreate(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList - Lists all DisplayVideo360AdvertiserLinks on a property.
func (s *Properties) AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksList(ctx context.Context, request operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListRequest) (*operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/displayVideo360AdvertiserLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesFirebaseLinksCreate - Creates a FirebaseLink. Properties can have at most one FirebaseLink.
func (s *Properties) AnalyticsadminPropertiesFirebaseLinksCreate(ctx context.Context, request operations.AnalyticsadminPropertiesFirebaseLinksCreateRequest) (*operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/firebaseLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesFirebaseLinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaFirebaseLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaFirebaseLink = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesFirebaseLinksList - Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
func (s *Properties) AnalyticsadminPropertiesFirebaseLinksList(ctx context.Context, request operations.AnalyticsadminPropertiesFirebaseLinksListRequest) (*operations.AnalyticsadminPropertiesFirebaseLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/firebaseLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesFirebaseLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesGoogleAdsLinksCreate - Creates a GoogleAdsLink.
func (s *Properties) AnalyticsadminPropertiesGoogleAdsLinksCreate(ctx context.Context, request operations.AnalyticsadminPropertiesGoogleAdsLinksCreateRequest) (*operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/googleAdsLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesGoogleAdsLinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaGoogleAdsLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaGoogleAdsLink = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesGoogleAdsLinksList - Lists GoogleAdsLinks on a property.
func (s *Properties) AnalyticsadminPropertiesGoogleAdsLinksList(ctx context.Context, request operations.AnalyticsadminPropertiesGoogleAdsLinksListRequest) (*operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/googleAdsLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesGoogleAdsLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesList - Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
func (s *Properties) AnalyticsadminPropertiesList(ctx context.Context, request operations.AnalyticsadminPropertiesListRequest) (*operations.AnalyticsadminPropertiesListResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v1alpha/properties"

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

	res := &operations.AnalyticsadminPropertiesListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListPropertiesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListPropertiesResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesRunAccessReport - Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).
func (s *Properties) AnalyticsadminPropertiesRunAccessReport(ctx context.Context, request operations.AnalyticsadminPropertiesRunAccessReportRequest) (*operations.AnalyticsadminPropertiesRunAccessReportResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{entity}:runAccessReport", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesRunAccessReportResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaRunAccessReportResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesSearchAds360LinksCreate - Creates a SearchAds360Link.
func (s *Properties) AnalyticsadminPropertiesSearchAds360LinksCreate(ctx context.Context, request operations.AnalyticsadminPropertiesSearchAds360LinksCreateRequest) (*operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/searchAds360Links", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesSearchAds360LinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaSearchAds360Link
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaSearchAds360Link = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesSearchAds360LinksList - Lists all SearchAds360Links on a property.
func (s *Properties) AnalyticsadminPropertiesSearchAds360LinksList(ctx context.Context, request operations.AnalyticsadminPropertiesSearchAds360LinksListRequest) (*operations.AnalyticsadminPropertiesSearchAds360LinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/searchAds360Links", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesSearchAds360LinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksAudit - Lists all user links on an account or property, including implicit ones that come from effective permissions granted by groups or organization admin roles. If a returned user link does not have direct permissions, they cannot be removed from the account or property directly with the DeleteUserLink command. They have to be removed from the group/etc that gives them permissions, which is currently only usable/discoverable in the GA or GMP UIs.
func (s *Properties) AnalyticsadminPropertiesUserLinksAudit(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksAuditRequest) (*operations.AnalyticsadminPropertiesUserLinksAuditResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks:audit", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksAuditResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaAuditUserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksBatchCreate - Creates information about multiple users' links to an account or property. This method is transactional. If any UserLink cannot be created, none of the UserLinks will be created.
func (s *Properties) AnalyticsadminPropertiesUserLinksBatchCreate(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksBatchCreateRequest) (*operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks:batchCreate", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksBatchCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksBatchDelete - Deletes information about multiple users' links to an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksBatchDelete(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksBatchDeleteRequest) (*operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks:batchDelete", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksBatchDeleteResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksBatchGet - Gets information about multiple users' links to an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksBatchGet(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksBatchGetRequest) (*operations.AnalyticsadminPropertiesUserLinksBatchGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks:batchGet", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksBatchGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksBatchUpdate - Updates information about multiple users' links to an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksBatchUpdate(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksBatchUpdateRequest) (*operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks:batchUpdate", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksBatchUpdateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksCreate - Creates a user link on an account or property. If the user with the specified email already has permissions on the account or property, then the user's existing permissions will be unioned with the permissions specified in the new UserLink.
func (s *Properties) AnalyticsadminPropertiesUserLinksCreate(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksCreateRequest) (*operations.AnalyticsadminPropertiesUserLinksCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaUserLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaUserLink = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksDelete - Deletes a user link on an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksDelete(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksDeleteRequest) (*operations.AnalyticsadminPropertiesUserLinksDeleteResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksDeleteResponse{
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

			res.GoogleProtobufEmpty = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksGet - Gets information about a user's link to an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksGet(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksGetRequest) (*operations.AnalyticsadminPropertiesUserLinksGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaUserLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaUserLink = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksList - Lists all user links on an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksList(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksListRequest) (*operations.AnalyticsadminPropertiesUserLinksListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{parent}/userLinks", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaListUserLinksResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaListUserLinksResponse = out
		}
	}

	return res, nil
}

// AnalyticsadminPropertiesUserLinksPatch - Updates a user link on an account or property.
func (s *Properties) AnalyticsadminPropertiesUserLinksPatch(ctx context.Context, request operations.AnalyticsadminPropertiesUserLinksPatchRequest) (*operations.AnalyticsadminPropertiesUserLinksPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1alpha/{name}", request.PathParams)

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

	res := &operations.AnalyticsadminPropertiesUserLinksPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GoogleAnalyticsAdminV1alphaUserLink
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GoogleAnalyticsAdminV1alphaUserLink = out
		}
	}

	return res, nil
}
