package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

type Partners struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPartners(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Partners {
	return &Partners{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AndroiddeviceprovisioningPartnersCustomersCreate - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
func (s *Partners) AndroiddeviceprovisioningPartnersCustomersCreate(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersCustomersCreateRequest) (*operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customers", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersCustomersCreateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Company
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Company = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersCustomersList - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
func (s *Partners) AndroiddeviceprovisioningPartnersCustomersList(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersCustomersListRequest) (*operations.AndroiddeviceprovisioningPartnersCustomersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/customers", request.PathParams)

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

	res := &operations.AndroiddeviceprovisioningPartnersCustomersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListCustomersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListCustomersResponse = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesClaim - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesClaim(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesClaimRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:claim", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesClaimResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ClaimDeviceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ClaimDeviceResponse = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesClaimAsync - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesClaimAsync(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:claimAsync", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesClaimAsyncResponse{
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

// AndroiddeviceprovisioningPartnersDevicesFindByIdentifier - Finds devices by hardware identifiers, such as IMEI.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesFindByIdentifier(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:findByIdentifier", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FindDevicesByDeviceIdentifierResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FindDevicesByDeviceIdentifierResponse = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesFindByOwner - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesFindByOwner(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:findByOwner", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesFindByOwnerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.FindDevicesByOwnerResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.FindDevicesByOwnerResponse = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesGet - Gets a device.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesGet(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesGetRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{name}", request.PathParams)

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

	res := &operations.AndroiddeviceprovisioningPartnersDevicesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Device
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Device = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesMetadata - Updates reseller metadata associated with the device. Android devices only.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesMetadata(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesMetadataRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{metadataOwnerId}/devices/{deviceId}/metadata", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesMetadataResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DeviceMetadata
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeviceMetadata = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersDevicesUnclaim - Unclaims a device from a customer and removes it from zero-touch enrollment.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesUnclaim(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesUnclaimRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:unclaim", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesUnclaimResponse{
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

// AndroiddeviceprovisioningPartnersDevicesUnclaimAsync - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesUnclaimAsync(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:unclaimAsync", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse{
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

// AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
func (s *Partners) AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsync(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest) (*operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/partners/{partnerId}/devices:updateMetadataAsync", request.PathParams)

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

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse{
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

// AndroiddeviceprovisioningPartnersVendorsCustomersList - Lists the customers of the vendor.
func (s *Partners) AndroiddeviceprovisioningPartnersVendorsCustomersList(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersVendorsCustomersListRequest) (*operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/customers", request.PathParams)

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

	res := &operations.AndroiddeviceprovisioningPartnersVendorsCustomersListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListVendorCustomersResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListVendorCustomersResponse = out
		}
	}

	return res, nil
}

// AndroiddeviceprovisioningPartnersVendorsList - Lists the vendors of the partner.
func (s *Partners) AndroiddeviceprovisioningPartnersVendorsList(ctx context.Context, request operations.AndroiddeviceprovisioningPartnersVendorsListRequest) (*operations.AndroiddeviceprovisioningPartnersVendorsListResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v1/{parent}/vendors", request.PathParams)

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

	res := &operations.AndroiddeviceprovisioningPartnersVendorsListResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListVendorsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListVendorsResponse = out
		}
	}

	return res, nil
}
