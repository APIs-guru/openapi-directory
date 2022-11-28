package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Monitors struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMonitors(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Monitors {
	return &Monitors{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AllMonitors - All Monitors
// The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.
//
// The response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) AllMonitors(ctx context.Context) (*operations.AllMonitorsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/monitors"

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

	res := &operations.AllMonitorsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AllMonitors200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AllMonitors200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// CreateMonitor - Create Monitor
// This endpoint allows you to create a monitor.
//
// Some sample `cron` values are:
//
// | Frequency                  | Cron Pattern   |
// |-----------------------|----------------|
// | Every 5 minutes       | `*/5 * * * *`  |
// | Every 30 minutes     | `*/30 * * * *` |
// | Every Hour         | `0 */1 * * *`  |
// | Every 6 Hours      | `0 */6 * * *`  |
// | Every day at 5pm    | `0 17 * * *`   |
// | Every Monday at 12pm  | `0 12 * * MON` |
// | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
//
// Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.
//
// For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
//
// You can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) CreateMonitor(ctx context.Context, request operations.CreateMonitorRequest) (*operations.CreateMonitorResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/monitors"

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

	res := &operations.CreateMonitorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateMonitor200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMonitor200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.CreateMonitor400ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateMonitor400ApplicationJSONObject = out
		}
	}

	return res, nil
}

// DeleteMonitor - Delete Monitor
// This endpoint can be used to delete an existing monitor using its `uid`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) DeleteMonitor(ctx context.Context, request operations.DeleteMonitorRequest) (*operations.DeleteMonitorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/monitors/{monitor_uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteMonitorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteMonitor200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteMonitor200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteMonitor404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteMonitor404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// RunAMonitor - Run a Monitor
// This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) RunAMonitor(ctx context.Context, request operations.RunAMonitorRequest) (*operations.RunAMonitorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/monitors/{monitor_uid}/run", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.RunAMonitorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RunAMonitor200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RunAMonitor200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SingleMonitor - Single Monitor
// This endpoint fetches you basic information about the monitor using its `uid`.
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) SingleMonitor(ctx context.Context, request operations.SingleMonitorRequest) (*operations.SingleMonitorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/monitors/{monitor_uid}", request.PathParams)

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

	res := &operations.SingleMonitorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SingleMonitor200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SingleMonitor200ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SingleMonitor404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SingleMonitor404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateMonitor - Update Monitor
// This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.
//
// Some example `cron` values are:
//
// | Frequency                  | Cron Pattern   |
// |-----------------------|----------------|
// | Every 5 minutes       | `*/5 * * * *`  |
// | Every 30 minutes     | `*/30 * * * *` |
// | Every Hour         | `0 */1 * * *`  |
// | Every 6 Hours      | `0 */6 * * *`  |
// | Every day at 5pm    | `0 17 * * *`   |
// | Every Monday at 12pm  | `0 12 * * MON` |
// | Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |
//
// Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.
//
// For more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
//
// > Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.
func (s *Monitors) UpdateMonitor(ctx context.Context, request operations.UpdateMonitorRequest) (*operations.UpdateMonitorResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/monitors/{monitor_uid}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
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

	res := &operations.UpdateMonitorResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UpdateMonitor200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateMonitor200ApplicationJSONObject = out
		}
	}

	return res, nil
}
