

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://autodealerdata.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def days_supply_days_supply_get(self, request: operations.DaysSupplyDaysSupplyGetRequest) -> operations.DaysSupplyDaysSupplyGetResponse:
        r"""Days worth of supply left on dealer lots
        Average, median, standard deviation, population variance, and whole region average of the 
        days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
        a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
        The average field may differ from the whole region average, especially when dealers are out of 
        a given model. 
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/daysSupply"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DaysSupplyDaysSupplyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def days_to_sell_days_to_sell_get(self, request: operations.DaysToSellDaysToSellGetRequest) -> operations.DaysToSellDaysToSellGetResponse:
        r"""Days a vehicle takes to sell
        Average, median, standard deviation, population variance, and whole region average of the 
        number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
        a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
        The average field may differ from the whole region average.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/daysToSell"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DaysToSellDaysToSellGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_avg_list_price_list_price_get(self, request: operations.GetAvgListPriceListPriceGetRequest) -> operations.GetAvgListPriceListPriceGetResponse:
        r"""Stats on ask price of new vehicles
        Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvgListPriceListPriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicModelStatsResp])
                res.basic_model_stats_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_avg_sale_price_sale_price_get(self, request: operations.GetAvgSalePriceSalePriceGetRequest) -> operations.GetAvgSalePriceSalePriceGetResponse:
        r"""Stats on sale price of new vehicles
        Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/salePrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvgSalePriceSalePriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicModelStatsResp])
                res.basic_model_stats_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_brand_names_get_brands_get(self, request: operations.GetBrandNamesGetBrandsGetRequest) -> operations.GetBrandNamesGetBrandsGetResponse:
        r"""Get a list of brand names
        Get vehicle brand names. 
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getBrands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandNamesGetBrandsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandResp])
                res.brand_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealer_sales_region_daily_sales_get(self, request: operations.GetDealerSalesRegionDailySalesGetRequest) -> operations.GetDealerSalesRegionDailySalesGetResponse:
        r"""Brand sales by region and Day
        Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
            
        The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionDailySales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionDailySalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealer_sales_region_sales_get(self, request: operations.GetDealerSalesRegionSalesGetRequest) -> operations.GetDealerSalesRegionSalesGetResponse:
        r"""Premium. Brand sales by region and month
        Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
            
        The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionSales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionSalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_by_id_get(self, request: operations.GetDealersGetDealersByIDGetRequest) -> operations.GetDealersGetDealersByIDGetResponse:
        r"""Premium. Dealers by ID
        Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
        Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealersByID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersByIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataResp])
                res.dealership_data_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_by_region_get(self, request: operations.GetDealersGetDealersByRegionGetRequest) -> operations.GetDealersGetDealersByRegionGetResponse:
        r"""Premium. Dealers in a region.
        Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealersByRegion"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersByRegionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataPaginatedResp])
                res.dealership_data_paginated_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_get(self, request: operations.GetDealersGetDealersGetRequest) -> operations.GetDealersGetDealersGetResponse:
        r"""Premium. Dealers in a zip code.
        Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
        For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataResp])
                res.dealership_data_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_history2_vehicle_history_get(self, request: operations.GetHistory2VehicleHistoryGetRequest) -> operations.GetHistory2VehicleHistoryGetResponse:
        r"""Premium. Simple Vehicle History Report
        Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
        price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 
        
        If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
        the /vehicleSeen endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicleHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHistory2VehicleHistoryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryResp])
                res.history_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings2_listings2_get(self, request: operations.GetListings2Listings2GetRequest) -> operations.GetListings2Listings2GetResponse:
        r"""Flexible Listing Search
        Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
        The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
        
        Dealer selection uses the most restictive criteria supplied. 
        
        
        Listing selection logically ANDs all options given. 
        
        Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
        as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
        and look back by the supplied daysBack value.
        
        Maximum time interval is 45 days.
        
        ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
        If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
        Setting extendedSearch to true will result in a slower response time. 
        
        For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
        
        If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
        used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
        because the request matched no listings.
        
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings2"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListings2Listings2GetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_dealer_listings_by_date_get(self, request: operations.GetListingsByDealerListingsByDateGetRequest) -> operations.GetListingsByDealerListingsByDateGetResponse:
        r"""Listings by Dealer ID and Date
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
        Maximum time interval between startDate and endDate is 45 days.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByDealerListingsByDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_dealer_listings_get(self, request: operations.GetListingsByDealerListingsGetRequest) -> operations.GetListingsByDealerListingsGetResponse:
        r"""Listings by Dealer ID
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByDealerListingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_region_and_date_listings_by_region_and_date_get(self, request: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest) -> operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse:
        r"""Listings by Region and Date
        See /listings2 endpoint for more flexible listing search.
        Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByRegionAndDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_listings_by_region_listings_by_region_get(self, request: operations.GetListingsByRegionListingsByRegionGetRequest) -> operations.GetListingsByRegionListingsByRegionGetResponse:
        r"""Listings by Region
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days by region. 
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByRegion"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingsByRegionListingsByRegionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_market3_similar_sale_price_get(self, request: operations.GetMarket3SimilarSalePriceGetRequest) -> operations.GetMarket3SimilarSalePriceGetResponse:
        r"""Premium. Simple Vehicle Market Report
        Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
        Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similarSalePrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarket3SimilarSalePriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimilarSalePriceResp])
                res.similar_sale_price_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_names_all_get_inactive_models_get(self, request: operations.GetModelNamesAllGetInactiveModelsGetRequest) -> operations.GetModelNamesAllGetInactiveModelsGetResponse:
        r"""Get a list of model names including discontinued models
        Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
        they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
        endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
        someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getInactiveModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelNamesAllGetInactiveModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelResp])
                res.model_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_names_get_models_get(self, request: operations.GetModelNamesGetModelsGetRequest) -> operations.GetModelNamesGetModelsGetResponse:
        r"""Get a list of model names
        Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
        sold less than 10 vehicles in the last month and a half.
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelNamesGetModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelResp])
                res.model_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_sale_buckets_sale_price_histogram_get(self, request: operations.GetModelSaleBucketsSalePriceHistogramGetRequest) -> operations.GetModelSaleBucketsSalePriceHistogramGetResponse:
        r"""Histogram of sales price of new vehicles by model
        Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
        Price buckets are grouped in units of $1000
        The available brand, model, and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/salePriceHistogram"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelSaleBucketsSalePriceHistogramGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BucketResp])
                res.bucket_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_used_dist_model_year_dist_get(self, request: operations.GetModelUsedDistModelYearDistGetRequest) -> operations.GetModelUsedDistModelYearDistGetResponse:
        r"""Used market share of model year by model
        Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
        For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market 
        in the given region over the last 45 days were from the 2017 model year.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/modelYearDist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelUsedDistModelYearDistGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelYearDistResp])
                res.model_year_dist_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_brand_market_share_get_region_brand_market_share_get(self, request: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest) -> operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse:
        r"""Market share of a brand in region
        Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionBrandMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_market_share_get_region_market_share_get(self, request: operations.GetRegionMarketShareGetRegionMarketShareGetRequest) -> operations.GetRegionMarketShareGetRegionMarketShareGetResponse:
        r"""Market share of all brands in region
        Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionMarketShareGetRegionMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_regions_get_regions_get(self, request: operations.GetRegionsGetRegionsGetRequest) -> operations.GetRegionsGetRegionsGetResponse:
        r"""Get a list of region names
        Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsGetRegionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionResp])
                res.region_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_sub_user_keys_get_sub_user_keys_get(self, request: operations.GetSubUserKeysGetSubUserKeysGetRequest) -> operations.GetSubUserKeysGetSubUserKeysGetResponse:
        r"""Get all Sub User Keys associated with your account.
        Get a list of your issued SubUser API Keys. Includes active and revoked keys.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getSubUserKeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubUserKeysGetSubUserKeysGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_top_models_top_models_get(self, request: operations.GetTopModelsTopModelsGetRequest) -> operations.GetTopModelsTopModelsGetResponse:
        r"""Top models in a given region
        Sales ranking of different models by region over the last 45 days. 
        The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. 
        
        For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
        
        The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
        over the report's time interval.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/topModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopModelsTopModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopModelResp])
                res.top_model_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_vehicle_seen_vehicle_seen_get(self, request: operations.GetVehicleSeenVehicleSeenGetRequest) -> operations.GetVehicleSeenVehicleSeenGetResponse:
        r"""Checks if a VIN appeared on the market on or after a given date.
        Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
        This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
        requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicleSeen"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleSeenVehicleSeenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooleanResp])
                res.boolean_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def listings_by_zip_code_and_date_listings_by_zip_code_and_date_get(self, request: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest) -> operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse:
        r"""Listings by ZipCode and Date
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByZipCodeAndDate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def listings_by_zip_code_listings_by_zip_code_get(self, request: operations.ListingsByZipCodeListingsByZipCodeGetRequest) -> operations.ListingsByZipCodeListingsByZipCodeGetResponse:
        r"""Listings by ZipCode
        See /listings2 endpoint for more flexible listing search.
        Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
        Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
        Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listingsByZipCode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListingsByZipCodeListingsByZipCodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingResp])
                res.listing_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_sub_user_key_make_sub_user_key_post(self, request: operations.MakeSubUserKeyMakeSubUserKeyPostRequest) -> operations.MakeSubUserKeyMakeSubUserKeyPostResponse:
        r"""Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
        This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the \"localhost\" domain.
        This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
        The \"endpoints\" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a \"*\" value in the array will allow
        all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
        All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
        higher than once per second. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/makeSubUserKey"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeSubUserKeyMakeSubUserKeyPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubUserJSONWebToken])
                res.sub_user_json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_token_get_token_get(self, request: operations.MakeTokenGetTokenGetRequest) -> operations.MakeTokenGetTokenGetResponse:
        r"""Get a JWT from your API credentials
        This is the first function you should call. 
        
        If you are accessing our API through a third party provider they will handle authenticating to our API for you 
        and you will not need call this function or retrieve a JSON Web Token. 
        
        All other functions require the JSON Web Token (JWT) from this function to 
        be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON
        are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
        API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
        to get a new token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getToken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeTokenGetTokenGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JSONWebToken])
                res.json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def make_token_get_token_post(self, request: operations.MakeTokenGetTokenPostRequest) -> operations.MakeTokenGetTokenPostResponse:
        r"""Get a JWT from your API credentials
        This is the first function you should call. 
        
        If you are accessing our API through a third party provider they will handle authenticating to our API for you 
        and you will not need call this function or retrieve a JSON Web Token. 
        
        All other functions require the JSON Web Token (JWT) from this function to 
        be incuded in their arguments. The value of the \"token\" field is the actual JWT and any other values in the returned JSON
        are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
        API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
        to get a new token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getToken"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MakeTokenGetTokenPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.JSONWebToken])
                res.json_web_token = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def revoke_sub_user_key_revoke_sub_user_key_put(self, request: operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest) -> operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse:
        r"""Revoke a Sub User Key associated with your account.
        Revoke a SubUser API Key with the given UUID. This action can not be undone.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/revokeSubUserKey"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def vin_decode_vin_decode_get(self, request: operations.VinDecodeVinDecodeGetRequest) -> operations.VinDecodeVinDecodeGetResponse:
        r"""Vin decoder and Recall Info
        Decodes the provided North American vin and provides recall information if available. 
        We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
        If passEmpty (default False) is True we will also include the empty fields in the response json. 
        If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vinDecode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VinDecodeVinDecodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    