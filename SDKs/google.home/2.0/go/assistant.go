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

type Assistant struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssistant(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Assistant {
	return &Assistant{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// Accessibility - Accessibility
// This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.
// Sending an empty-body POST request returns the current values.
// Either of the fields or both can be sent and new values will be saved.
func (s *Assistant) Accessibility(ctx context.Context, request operations.AccessibilityRequest) (*operations.AccessibilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assistant/a11y_mode"

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

	res := &operations.AccessibilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Getcurrentvalues
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Getcurrentvalues = out
		}
	}

	return res, nil
}

// AlarmVolume - Alarm Volume
// This gets and sets alarms and timers volume.
// **Note:** This is not the same as normal volume.
//
// Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.
// Sending an empty body gets the volume. Sending `volume` sets the volume.
func (s *Assistant) AlarmVolume(ctx context.Context, request operations.AlarmVolumeRequest) (*operations.AlarmVolumeResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assistant/alarms/volume"

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

	res := &operations.AlarmVolumeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Getvolume
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Getvolume = out
		}
	}

	return res, nil
}

// DeleteAlarmsandTimers - Delete Alarms and Timers
// This deletes alarms and timers by their id.
//
// `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
func (s *Assistant) DeleteAlarmsandTimers(ctx context.Context, request operations.DeleteAlarmsandTimersRequest) (*operations.DeleteAlarmsandTimersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assistant/alarms/delete"

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

	res := &operations.DeleteAlarmsandTimersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Example19
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Example19 = out
		}
	}

	return res, nil
}

// DoNotDisturb - Do Not Disturb
// This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
func (s *Assistant) DoNotDisturb(ctx context.Context, request operations.DoNotDisturbRequest) (*operations.DoNotDisturbResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assistant/notifications"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.DoNotDisturbResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Getcurrentstate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Getcurrentstate = out
		}
	}

	return res, nil
}

// GetAlarmsandTimers - Get Alarms and Timers
// This gives a list of all active alarms and timers.
//
// Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
//
// Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).
// `status` is 1 for set up and 2 for ringing.
//
// Timers have `original_duration` is the original duration.
// `status` is 1 for set up and 3 for ringing.
func (s *Assistant) GetAlarmsandTimers(ctx context.Context) (*operations.GetAlarmsandTimersResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assistant/alarms"

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

	res := &operations.GetAlarmsandTimersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Example18
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Example18 = out
		}
	}

	return res, nil
}

// SetEqualizerValues - Set Equalizer Values
// This can only set new equalizer values. To get already set values, use /setup/eureka_info.
//
// The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
//
// `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
//
// Default values are 0 for both.
// While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
func (s *Assistant) SetEqualizerValues(ctx context.Context, request operations.SetEqualizerValuesRequest) (*operations.SetEqualizerValuesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user_eq/set_equalizer"

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

	res := &operations.SetEqualizerValuesResponse{
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
