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

type Bluetooth struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBluetooth(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Bluetooth {
	return &Bluetooth{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ChangeDiscoverability - Change Discoverability
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For Part 1 only**
//
// This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
func (s *Bluetooth) ChangeDiscoverability(ctx context.Context, request operations.ChangeDiscoverabilityRequest) (*operations.ChangeDiscoverabilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/discovery"

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

	res := &operations.ChangeDiscoverabilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/plain`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// Forgetpaireddevice - Forget paired device
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For both parts**
//
// This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
func (s *Bluetooth) Forgetpaireddevice(ctx context.Context, request operations.ForgetpaireddeviceRequest) (*operations.ForgetpaireddeviceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/bond"

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

	res := &operations.ForgetpaireddeviceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/plain`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// GetPairedDevices - Get Paired Devices
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For both parts**
//
// This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
func (s *Bluetooth) GetPairedDevices(ctx context.Context) (*operations.GetPairedDevicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/get_bonded"

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

	res := &operations.GetPairedDevicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Example111
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Example111s = out
		}
	}

	return res, nil
}

// GetScanResults - Get Scan Results
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For Part 2 only**
//
// This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
//
// `rssi` is signal strength, `name` is name, `mac_address` is mac address.
// `device_class` and `device_type` are bluetooth codes.
//
// The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
func (s *Bluetooth) GetScanResults(ctx context.Context) (*operations.GetScanResultsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/scan_results"

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

	res := &operations.GetScanResultsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.Example112
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Example112s = out
		}
	}

	return res, nil
}

// PairwithSpeaker - Pair with Speaker
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For Part 2 only**
//
// This pairs with other bluetooth speakers by mac address.
func (s *Bluetooth) PairwithSpeaker(ctx context.Context, request operations.PairwithSpeakerRequest) (*operations.PairwithSpeakerResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/connect"

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

	res := &operations.PairwithSpeakerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/plain`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// Scanfordevices - Scan for devices
// *See note for Bluetooth under `/setup/bluetooth/status`*
//
// **For Part 2 only**
//
// This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.
// To get the scan results, see /setup/bluetooth/scan_results.
func (s *Bluetooth) Scanfordevices(ctx context.Context, request operations.ScanfordevicesRequest) (*operations.ScanfordevicesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/scan"

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

	res := &operations.ScanfordevicesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `text/plain`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// Status - Status
// > **There are 2 parts of Bluetooth.**
// >
// > *Part 1*: Devices like phones connect to Home and play audio through Home.
// > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
// >
// > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
// > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
// >
// > The other endpoints are common for both parts.
//
// **For both parts**
//
// This gives the status of all bluetooth things.
// - Not sure what `audio_mode` is.
// - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
// - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
// - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
// - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
func (s *Bluetooth) Status(ctx context.Context) (*operations.StatusResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/bluetooth/status"

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

	res := &operations.StatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Example110
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Example110 = out
		}
	}

	return res, nil
}
