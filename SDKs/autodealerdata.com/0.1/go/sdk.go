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

var ServerList = []string{
	"https://autodealerdata.com",
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

// DaysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
// Average, median, standard deviation, population variance, and whole region average of the
// days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
// a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
// The average field may differ from the whole region average, especially when dealers are out of
// a given model.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SDK) DaysSupplyDaysSupplyGet(ctx context.Context, request operations.DaysSupplyDaysSupplyGetRequest) (*operations.DaysSupplyDaysSupplyGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/daysSupply"

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

	res := &operations.DaysSupplyDaysSupplyGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// DaysToSellDaysToSellGet - Days a vehicle takes to sell
// Average, median, standard deviation, population variance, and whole region average of the
// number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
// a dealer by dealer basis while the whole region average treats the entire region like a single dealership.
// The average field may differ from the whole region average.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SDK) DaysToSellDaysToSellGet(ctx context.Context, request operations.DaysToSellDaysToSellGetRequest) (*operations.DaysToSellDaysToSellGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/daysToSell"

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

	res := &operations.DaysToSellDaysToSellGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetAvgListPriceListPriceGet - Stats on ask price of new vehicles
// Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SDK) GetAvgListPriceListPriceGet(ctx context.Context, request operations.GetAvgListPriceListPriceGetRequest) (*operations.GetAvgListPriceListPriceGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listPrice"

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

	res := &operations.GetAvgListPriceListPriceGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicModelStatsResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicModelStatsResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetAvgSalePriceSalePriceGet - Stats on sale price of new vehicles
// Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
//
// The available brand and region names can be retrieved from their respective endpoints.
func (s *SDK) GetAvgSalePriceSalePriceGet(ctx context.Context, request operations.GetAvgSalePriceSalePriceGetRequest) (*operations.GetAvgSalePriceSalePriceGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/salePrice"

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

	res := &operations.GetAvgSalePriceSalePriceGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicModelStatsResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicModelStatsResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetBrandNamesGetBrandsGet - Get a list of brand names
// Get vehicle brand names.
//
// These names are used as arguments for other endpoints. The names are generally not case sensitive
// when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
func (s *SDK) GetBrandNamesGetBrandsGet(ctx context.Context, request operations.GetBrandNamesGetBrandsGetRequest) (*operations.GetBrandNamesGetBrandsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getBrands"

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

	res := &operations.GetBrandNamesGetBrandsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BrandResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BrandResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetDealerSalesRegionDailySalesGet - Brand sales by region and Day
// Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
//
// The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
//
// Data availability depends on region and goes back up to 2016.
func (s *SDK) GetDealerSalesRegionDailySalesGet(ctx context.Context, request operations.GetDealerSalesRegionDailySalesGetRequest) (*operations.GetDealerSalesRegionDailySalesGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/regionDailySales"

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

	res := &operations.GetDealerSalesRegionDailySalesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetDealerSalesRegionSalesGet - Premium. Brand sales by region and month
// Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
//
// The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
//
// Data availability depends on region and goes back up to 2016.
func (s *SDK) GetDealerSalesRegionSalesGet(ctx context.Context, request operations.GetDealerSalesRegionSalesGetRequest) (*operations.GetDealerSalesRegionSalesGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/regionSales"

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

	res := &operations.GetDealerSalesRegionSalesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetDealersGetDealersByIDGet - Premium. Dealers by ID
// Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
// Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
func (s *SDK) GetDealersGetDealersByIDGet(ctx context.Context, request operations.GetDealersGetDealersByIDGetRequest) (*operations.GetDealersGetDealersByIDGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getDealersByID"

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

	res := &operations.GetDealersGetDealersByIDGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DealershipDataResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DealershipDataResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetDealersGetDealersByRegionGet - Premium. Dealers in a region.
// Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
func (s *SDK) GetDealersGetDealersByRegionGet(ctx context.Context, request operations.GetDealersGetDealersByRegionGetRequest) (*operations.GetDealersGetDealersByRegionGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getDealersByRegion"

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

	res := &operations.GetDealersGetDealersByRegionGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DealershipDataPaginatedResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DealershipDataPaginatedResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetDealersGetDealersGet - Premium. Dealers in a zip code.
// Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
// For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
func (s *SDK) GetDealersGetDealersGet(ctx context.Context, request operations.GetDealersGetDealersGetRequest) (*operations.GetDealersGetDealersGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getDealers"

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

	res := &operations.GetDealersGetDealersGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DealershipDataResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DealershipDataResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
// Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
// price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.
//
// If your use case involves checking if a vehicle has appeared on the open market on or after a given date see
// the /vehicleSeen endpoint.
func (s *SDK) GetHistory2VehicleHistoryGet(ctx context.Context, request operations.GetHistory2VehicleHistoryGetRequest) (*operations.GetHistory2VehicleHistoryGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vehicleHistory"

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

	res := &operations.GetHistory2VehicleHistoryGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HistoryResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HistoryResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetListings2Listings2Get - Flexible Listing Search
// Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
// The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
//
// Dealer selection uses the most restictive criteria supplied.
//
// Listing selection logically ANDs all options given.
//
// Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it
// as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
// and look back by the supplied daysBack value.
//
// Maximum time interval is 45 days.
//
// ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
// If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
// Setting extendedSearch to true will result in a slower response time.
//
// For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
//
// If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return
// used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
// because the request matched no listings.
//
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) GetListings2Listings2Get(ctx context.Context, request operations.GetListings2Listings2GetRequest) (*operations.GetListings2Listings2GetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listings2"

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

	res := &operations.GetListings2Listings2GetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.
// Maximum time interval between startDate and endDate is 45 days.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) GetListingsByDealerListingsByDateGet(ctx context.Context, request operations.GetListingsByDealerListingsByDateGetRequest) (*operations.GetListingsByDealerListingsByDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByDate"

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

	res := &operations.GetListingsByDealerListingsByDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetListingsByDealerListingsGet - Listings by Dealer ID
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) GetListingsByDealerListingsGet(ctx context.Context, request operations.GetListingsByDealerListingsGetRequest) (*operations.GetListingsByDealerListingsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listings"

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

	res := &operations.GetListingsByDealerListingsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
// See /listings2 endpoint for more flexible listing search.
// Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) GetListingsByRegionAndDateListingsByRegionAndDateGet(ctx context.Context, request operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest) (*operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByRegionAndDate"

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

	res := &operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetListingsByRegionListingsByRegionGet - Listings by Region
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days by region.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) GetListingsByRegionListingsByRegionGet(ctx context.Context, request operations.GetListingsByRegionListingsByRegionGetRequest) (*operations.GetListingsByRegionListingsByRegionGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByRegion"

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

	res := &operations.GetListingsByRegionListingsByRegionGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
// Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.
// Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
func (s *SDK) GetMarket3SimilarSalePriceGet(ctx context.Context, request operations.GetMarket3SimilarSalePriceGetRequest) (*operations.GetMarket3SimilarSalePriceGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/similarSalePrice"

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

	res := &operations.GetMarket3SimilarSalePriceGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SimilarSalePriceResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SimilarSalePriceResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
// Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
// they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
// endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
// someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time.
//
// These names are used as arguments for other endpoints. The names are generally not case sensitive
// when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
func (s *SDK) GetModelNamesAllGetInactiveModelsGet(ctx context.Context, request operations.GetModelNamesAllGetInactiveModelsGetRequest) (*operations.GetModelNamesAllGetInactiveModelsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getInactiveModels"

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

	res := &operations.GetModelNamesAllGetInactiveModelsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ModelResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModelResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetModelNamesGetModelsGet - Get a list of model names
// Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have
// sold less than 10 vehicles in the last month and a half.
//
// These names are used as arguments for other endpoints. The names are generally not case sensitive
// when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
func (s *SDK) GetModelNamesGetModelsGet(ctx context.Context, request operations.GetModelNamesGetModelsGetRequest) (*operations.GetModelNamesGetModelsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getModels"

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

	res := &operations.GetModelNamesGetModelsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ModelResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModelResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetModelSaleBucketsSalePriceHistogramGet - Histogram of sales price of new vehicles by model
// Histogram of the sale price of vehicles over the last 45 days for a given model and region.
// Price buckets are grouped in units of $1000
// The available brand, model, and region names can be retrieved from their respective endpoints.
func (s *SDK) GetModelSaleBucketsSalePriceHistogramGet(ctx context.Context, request operations.GetModelSaleBucketsSalePriceHistogramGetRequest) (*operations.GetModelSaleBucketsSalePriceHistogramGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/salePriceHistogram"

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

	res := &operations.GetModelSaleBucketsSalePriceHistogramGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BucketResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BucketResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetModelUsedDistModelYearDistGet - Used market share of model year by model
// Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
// For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market
// in the given region over the last 45 days were from the 2017 model year.
func (s *SDK) GetModelUsedDistModelYearDistGet(ctx context.Context, request operations.GetModelUsedDistModelYearDistGetRequest) (*operations.GetModelUsedDistModelYearDistGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/modelYearDist"

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

	res := &operations.GetModelUsedDistModelYearDistGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ModelYearDistResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ModelYearDistResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetRegionBrandMarketShareGetRegionBrandMarketShareGet - Market share of a brand in region
// Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
func (s *SDK) GetRegionBrandMarketShareGetRegionBrandMarketShareGet(ctx context.Context, request operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest) (*operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getRegionBrandMarketShare"

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

	res := &operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetRegionMarketShareGetRegionMarketShareGet - Market share of all brands in region
// Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
func (s *SDK) GetRegionMarketShareGetRegionMarketShareGet(ctx context.Context, request operations.GetRegionMarketShareGetRegionMarketShareGetRequest) (*operations.GetRegionMarketShareGetRegionMarketShareGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getRegionMarketShare"

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

	res := &operations.GetRegionMarketShareGetRegionMarketShareGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetRegionsGetRegionsGet - Get a list of region names
// Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
// when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
func (s *SDK) GetRegionsGetRegionsGet(ctx context.Context, request operations.GetRegionsGetRegionsGetRequest) (*operations.GetRegionsGetRegionsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getRegions"

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

	res := &operations.GetRegionsGetRegionsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RegionResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RegionResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetSubUserKeysGetSubUserKeysGet - Get all Sub User Keys associated with your account.
// Get a list of your issued SubUser API Keys. Includes active and revoked keys.
func (s *SDK) GetSubUserKeysGetSubUserKeysGet(ctx context.Context, request operations.GetSubUserKeysGetSubUserKeysGetRequest) (*operations.GetSubUserKeysGetSubUserKeysGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getSubUserKeys"

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

	res := &operations.GetSubUserKeysGetSubUserKeysGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetTopModelsTopModelsGet - Top models in a given region
// Sales ranking of different models by region over the last 45 days.
// The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents.
//
// For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
//
// The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
// over the report's time interval.
func (s *SDK) GetTopModelsTopModelsGet(ctx context.Context, request operations.GetTopModelsTopModelsGetRequest) (*operations.GetTopModelsTopModelsGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/topModels"

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

	res := &operations.GetTopModelsTopModelsGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.TopModelResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TopModelResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// GetVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
// Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.
// This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
// requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
func (s *SDK) GetVehicleSeenVehicleSeenGet(ctx context.Context, request operations.GetVehicleSeenVehicleSeenGetRequest) (*operations.GetVehicleSeenVehicleSeenGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vehicleSeen"

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

	res := &operations.GetVehicleSeenVehicleSeenGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BooleanResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BooleanResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// ListingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) ListingsByZipCodeAndDateListingsByZipCodeAndDateGet(ctx context.Context, request operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest) (*operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByZipCodeAndDate"

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

	res := &operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// ListingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
// See /listings2 endpoint for more flexible listing search.
// Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
// Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
// Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
func (s *SDK) ListingsByZipCodeListingsByZipCodeGet(ctx context.Context, request operations.ListingsByZipCodeListingsByZipCodeGetRequest) (*operations.ListingsByZipCodeListingsByZipCodeGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/listingsByZipCode"

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

	res := &operations.ListingsByZipCodeListingsByZipCodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListingResp
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListingResp = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeSubUserKeyMakeSubUserKeyPost - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
// This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
// This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls.
// The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
// all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
// All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate
// higher than once per second.
func (s *SDK) MakeSubUserKeyMakeSubUserKeyPost(ctx context.Context, request operations.MakeSubUserKeyMakeSubUserKeyPostRequest) (*operations.MakeSubUserKeyMakeSubUserKeyPostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/makeSubUserKey"

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

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.MakeSubUserKeyMakeSubUserKeyPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SubUserJSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubUserJSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeTokenGetTokenGet - Get a JWT from your API credentials
// This is the first function you should call.
//
// If you are accessing our API through a third party provider they will handle authenticating to our API for you
// and you will not need call this function or retrieve a JSON Web Token.
//
// All other functions require the JSON Web Token (JWT) from this function to
// be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
// are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
// API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
// to get a new token.
func (s *SDK) MakeTokenGetTokenGet(ctx context.Context, request operations.MakeTokenGetTokenGetRequest) (*operations.MakeTokenGetTokenGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getToken"

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

	res := &operations.MakeTokenGetTokenGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// MakeTokenGetTokenPost - Get a JWT from your API credentials
// This is the first function you should call.
//
// If you are accessing our API through a third party provider they will handle authenticating to our API for you
// and you will not need call this function or retrieve a JSON Web Token.
//
// All other functions require the JSON Web Token (JWT) from this function to
// be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
// are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
// API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
// to get a new token.
func (s *SDK) MakeTokenGetTokenPost(ctx context.Context, request operations.MakeTokenGetTokenPostRequest) (*operations.MakeTokenGetTokenPostResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/getToken"

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.MakeTokenGetTokenPostResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JSONWebToken
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JSONWebToken = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// RevokeSubUserKeyRevokeSubUserKeyPut - Revoke a Sub User Key associated with your account.
// Revoke a SubUser API Key with the given UUID. This action can not be undone.
func (s *SDK) RevokeSubUserKeyRevokeSubUserKeyPut(ctx context.Context, request operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest) (*operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/revokeSubUserKey"

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
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

	res := &operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}

// VinDecodeVinDecodeGet - Vin decoder and Recall Info
// Decodes the provided North American vin and provides recall information if available.
// We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
// If passEmpty (default False) is True we will also include the empty fields in the response json.
// If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
func (s *SDK) VinDecodeVinDecodeGet(ctx context.Context, request operations.VinDecodeVinDecodeGetRequest) (*operations.VinDecodeVinDecodeGetResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/vinDecode"

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

	res := &operations.VinDecodeVinDecodeGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GenericResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GenericResponse = out
		}
	case httpRes.StatusCode == 422:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.HTTPValidationError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.HTTPValidationError = out
		}
	}

	return res, nil
}
