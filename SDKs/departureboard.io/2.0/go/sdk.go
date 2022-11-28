package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

var ServerList = []string{
	"https://api.departureboard.io/api/v2.0",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
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

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// GetArrivalsAndDeparturesByCrs - getArrivalsAndDeparturesByCRS is used to get a list of services arriving to and departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
func (s *SDK) GetArrivalsAndDeparturesByCrs(ctx context.Context, request operations.GetArrivalsAndDeparturesByCrsRequest) (*operations.GetArrivalsAndDeparturesByCrsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getArrivalsAndDeparturesByCRS/{CRS}", request.PathParams)

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

	res := &operations.GetArrivalsAndDeparturesByCrsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetArrivalsByCrs - getArrivalsByCRS is used to get a list of services arriving to a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
func (s *SDK) GetArrivalsByCrs(ctx context.Context, request operations.GetArrivalsByCrsRequest) (*operations.GetArrivalsByCrsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getArrivalsByCRS/{CRS}", request.PathParams)

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

	res := &operations.GetArrivalsByCrsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetDeparturesByCrs - getDeparturesByCRS is used to get a list of services departing from a UK train station by the CRS (Computer Reservation System) code. This will typically return a list of train services, but will also return any replacement bus or ferry services that are in place.
func (s *SDK) GetDeparturesByCrs(ctx context.Context, request operations.GetDeparturesByCrsRequest) (*operations.GetDeparturesByCrsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getDeparturesByCRS/{CRS}", request.PathParams)

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

	res := &operations.GetDeparturesByCrsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetFastestDeparturesByCrs - getFastestDeparturesByCRS is used to get the fastest next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place.
func (s *SDK) GetFastestDeparturesByCrs(ctx context.Context, request operations.GetFastestDeparturesByCrsRequest) (*operations.GetFastestDeparturesByCrsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getFastestDeparturesByCRS/{CRS}", request.PathParams)

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

	res := &operations.GetFastestDeparturesByCrsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetNextDeparturesByCrs - getNextDeparturesByCRS is used to get the next service running between two stations. Multiple destinations can be specified. This will typically return a single train service, but will also return a replacement bus or ferry service if in place. This will return the next departures for each of the filterList stations specified. It may not return the fastest next service. To get the fastest next service use the getFastestDeparturesByCRS endpoint.
func (s *SDK) GetNextDeparturesByCrs(ctx context.Context, request operations.GetNextDeparturesByCrsRequest) (*operations.GetNextDeparturesByCrsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getNextDeparturesByCRS/{CRS}", request.PathParams)

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

	res := &operations.GetNextDeparturesByCrsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetServiceDetailsByID - getServiceDetailsByID is used to get information on a service, by the Service ID. This will typically return a train service, but will also return a bus and ferry services. The Service ID must be provided in the serviceIDUrlSafe format that is provided in the response for Arrival and Departure Boards. A service ID is specific to a station, and can only be looked up for a short time after a train/bus/ferry arrives at, or departs from a station. This is a National Rail limitation.
func (s *SDK) GetServiceDetailsByID(ctx context.Context, request operations.GetServiceDetailsByIDRequest) (*operations.GetServiceDetailsByIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/getServiceDetailsByID/{serviceID}", request.PathParams)

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

	res := &operations.GetServiceDetailsByIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 429:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}
