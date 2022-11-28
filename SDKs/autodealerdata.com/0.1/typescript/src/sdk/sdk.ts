import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://autodealerdata.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * daysSupplyDaysSupplyGet - Days worth of supply left on dealer lots
   *
   * Average, median, standard deviation, population variance, and whole region average of the 
   * days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
   * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
   * The average field may differ from the whole region average, especially when dealers are out of 
   * a given model. 
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  daysSupplyDaysSupplyGet(
    req: operations.DaysSupplyDaysSupplyGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DaysSupplyDaysSupplyGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DaysSupplyDaysSupplyGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/daysSupply";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DaysSupplyDaysSupplyGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * daysToSellDaysToSellGet - Days a vehicle takes to sell
   *
   * Average, median, standard deviation, population variance, and whole region average of the 
   * number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
   * a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
   * The average field may differ from the whole region average.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  daysToSellDaysToSellGet(
    req: operations.DaysToSellDaysToSellGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DaysToSellDaysToSellGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DaysToSellDaysToSellGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/daysToSell";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DaysToSellDaysToSellGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAvgListPriceListPriceGet - Stats on ask price of new vehicles
   *
   * Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  getAvgListPriceListPriceGet(
    req: operations.GetAvgListPriceListPriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvgListPriceListPriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvgListPriceListPriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listPrice";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAvgListPriceListPriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicModelStatsResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAvgSalePriceSalePriceGet - Stats on sale price of new vehicles
   *
   * Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
   * 
   * The available brand and region names can be retrieved from their respective endpoints.
  **/
  getAvgSalePriceSalePriceGet(
    req: operations.GetAvgSalePriceSalePriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAvgSalePriceSalePriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAvgSalePriceSalePriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/salePrice";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAvgSalePriceSalePriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicModelStatsResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getBrandNamesGetBrandsGet - Get a list of brand names
   *
   * Get vehicle brand names. 
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getBrandNamesGetBrandsGet(
    req: operations.GetBrandNamesGetBrandsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBrandNamesGetBrandsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBrandNamesGetBrandsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getBrands";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetBrandNamesGetBrandsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.brandResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDealerSalesRegionDailySalesGet - Brand sales by region and Day
   *
   * Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
   *     
   * The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
   * 
   * Data availability depends on region and goes back up to 2016.
  **/
  getDealerSalesRegionDailySalesGet(
    req: operations.GetDealerSalesRegionDailySalesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDealerSalesRegionDailySalesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDealerSalesRegionDailySalesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/regionDailySales";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDealerSalesRegionDailySalesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDealerSalesRegionSalesGet - Premium. Brand sales by region and month
   *
   * Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
   *     
   * The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
   * 
   * Data availability depends on region and goes back up to 2016.
  **/
  getDealerSalesRegionSalesGet(
    req: operations.GetDealerSalesRegionSalesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDealerSalesRegionSalesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDealerSalesRegionSalesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/regionSales";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDealerSalesRegionSalesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDealersGetDealersByIdGet - Premium. Dealers by ID
   *
   * Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
   * Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
  **/
  getDealersGetDealersByIdGet(
    req: operations.GetDealersGetDealersByIdGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDealersGetDealersByIdGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDealersGetDealersByIdGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getDealersByID";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDealersGetDealersByIdGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dealershipDataResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDealersGetDealersByRegionGet - Premium. Dealers in a region.
   *
   * Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
  **/
  getDealersGetDealersByRegionGet(
    req: operations.GetDealersGetDealersByRegionGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDealersGetDealersByRegionGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDealersGetDealersByRegionGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getDealersByRegion";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDealersGetDealersByRegionGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dealershipDataPaginatedResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getDealersGetDealersGet - Premium. Dealers in a zip code.
   *
   * Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
   * For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
  **/
  getDealersGetDealersGet(
    req: operations.GetDealersGetDealersGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDealersGetDealersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDealersGetDealersGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getDealers";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDealersGetDealersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.dealershipDataResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getHistory2VehicleHistoryGet - Premium. Simple Vehicle History Report
   *
   * Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
   * price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 
   * 
   * If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
   * the /vehicleSeen endpoint.
  **/
  getHistory2VehicleHistoryGet(
    req: operations.GetHistory2VehicleHistoryGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHistory2VehicleHistoryGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHistory2VehicleHistoryGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicleHistory";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHistory2VehicleHistoryGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.historyResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListings2Listings2Get - Flexible Listing Search
   *
   * Generic getter for listings supporting a wide array of selection criteria. This is the new primary listing endpoint and we will phase out the older listing endpoints over time.
   * The other listing endpoints return the same data, but are more restrictive in the available geographic and vehicle selection criteria.
   * 
   * Dealer selection uses the most restictive criteria supplied. 
   * 
   * 
   * Listing selection logically ANDs all options given. 
   * 
   * Time interval selection will prefer explicit start and end dates. If only one of startDate/endDate is supplied, this endpoint will use it 
   * as an anchor and look forward or backwards by the daysBack value. If neither is supplied endpoint will set endDate to today
   * and look back by the supplied daysBack value.
   * 
   * Maximum time interval is 45 days.
   * 
   * ExtendedSearch modifies the slice of listings returned. If false (default) it only returns vehicles satisfying lastSeen >= startDate and lastSeen < endDate.
   * If true it will return vehicles that were in dealer's inventory at any point between startDate and endDate including vehicles that were sold after endDate.
   * Setting extendedSearch to true will result in a slower response time. 
   * 
   * For example: If both a region name and dealer ID are supplied the dealer ID will be used because it is the most restrictive.
   * 
   * If a brandName of Ford and modelYear of 2019, modelName of F-150, and newCars of False is supplied this endpoint will return 
   * used 2019 model year Ford F-150s. If a contradictory listing selection is supplied (for example Ford + Camry) no listings will be returned
   * because the request matched no listings.
   * 
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListings2Listings2Get(
    req: operations.GetListings2Listings2GetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListings2Listings2GetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListings2Listings2GetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings2";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListings2Listings2GetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsByDealerListingsByDateGet - Listings by Dealer ID and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint. 
   * Maximum time interval between startDate and endDate is 45 days.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByDealerListingsByDateGet(
    req: operations.GetListingsByDealerListingsByDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByDealerListingsByDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByDealerListingsByDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByDate";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsByDealerListingsByDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsByDealerListingsGet - Listings by Dealer ID
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint. 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByDealerListingsGet(
    req: operations.GetListingsByDealerListingsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByDealerListingsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByDealerListingsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listings";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsByDealerListingsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsByRegionAndDateListingsByRegionAndDateGet - Listings by Region and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByRegionAndDateListingsByRegionAndDateGet(
    req: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByRegionAndDateListingsByRegionAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByRegionAndDate";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsByRegionAndDateListingsByRegionAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getListingsByRegionListingsByRegionGet - Listings by Region
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days by region. 
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  getListingsByRegionListingsByRegionGet(
    req: operations.GetListingsByRegionListingsByRegionGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetListingsByRegionListingsByRegionGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetListingsByRegionListingsByRegionGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByRegion";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetListingsByRegionListingsByRegionGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMarket3SimilarSalePriceGet - Premium. Simple Vehicle Market Report
   *
   * Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
   * Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
  **/
  getMarket3SimilarSalePriceGet(
    req: operations.GetMarket3SimilarSalePriceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMarket3SimilarSalePriceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMarket3SimilarSalePriceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarSalePrice";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMarket3SimilarSalePriceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.similarSalePriceResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
   *
   * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
   * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
   * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
   * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getModelNamesAllGetInactiveModelsGet(
    req: operations.GetModelNamesAllGetInactiveModelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelNamesAllGetInactiveModelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelNamesAllGetInactiveModelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getInactiveModels";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModelNamesAllGetInactiveModelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.modelResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModelNamesGetModelsGet - Get a list of model names
   *
   * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
   * sold less than 10 vehicles in the last month and a half.
   * 
   * These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getModelNamesGetModelsGet(
    req: operations.GetModelNamesGetModelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelNamesGetModelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelNamesGetModelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getModels";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModelNamesGetModelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.modelResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModelSaleBucketsSalePriceHistogramGet - Histogram of sales price of new vehicles by model
   *
   * Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
   * Price buckets are grouped in units of $1000
   * The available brand, model, and region names can be retrieved from their respective endpoints.
  **/
  getModelSaleBucketsSalePriceHistogramGet(
    req: operations.GetModelSaleBucketsSalePriceHistogramGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelSaleBucketsSalePriceHistogramGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelSaleBucketsSalePriceHistogramGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/salePriceHistogram";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModelSaleBucketsSalePriceHistogramGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.bucketResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getModelUsedDistModelYearDistGet - Used market share of model year by model
   *
   * Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
   * For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market 
   * in the given region over the last 45 days were from the 2017 model year.
  **/
  getModelUsedDistModelYearDistGet(
    req: operations.GetModelUsedDistModelYearDistGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelUsedDistModelYearDistGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetModelUsedDistModelYearDistGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/modelYearDist";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetModelUsedDistModelYearDistGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.modelYearDistResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegionBrandMarketShareGetRegionBrandMarketShareGet - Market share of a brand in region
   *
   * Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
  **/
  getRegionBrandMarketShareGetRegionBrandMarketShareGet(
    req: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getRegionBrandMarketShare";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegionMarketShareGetRegionMarketShareGet - Market share of all brands in region
   *
   * Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
  **/
  getRegionMarketShareGetRegionMarketShareGet(
    req: operations.GetRegionMarketShareGetRegionMarketShareGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegionMarketShareGetRegionMarketShareGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegionMarketShareGetRegionMarketShareGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getRegionMarketShare";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegionMarketShareGetRegionMarketShareGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getRegionsGetRegionsGet - Get a list of region names
   *
   * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
   * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
  **/
  getRegionsGetRegionsGet(
    req: operations.GetRegionsGetRegionsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRegionsGetRegionsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRegionsGetRegionsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getRegions";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRegionsGetRegionsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.regionResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSubUserKeysGetSubUserKeysGet - Get all Sub User Keys associated with your account.
   *
   * Get a list of your issued SubUser API Keys. Includes active and revoked keys.
  **/
  getSubUserKeysGetSubUserKeysGet(
    req: operations.GetSubUserKeysGetSubUserKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubUserKeysGetSubUserKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubUserKeysGetSubUserKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getSubUserKeys";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSubUserKeysGetSubUserKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTopModelsTopModelsGet - Top models in a given region
   *
   * Sales ranking of different models by region over the last 45 days. 
   * The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. 
   * 
   * For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
   * 
   * The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
   * over the report's time interval.
  **/
  getTopModelsTopModelsGet(
    req: operations.GetTopModelsTopModelsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTopModelsTopModelsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTopModelsTopModelsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/topModels";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTopModelsTopModelsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.topModelResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getVehicleSeenVehicleSeenGet - Checks if a VIN appeared on the market on or after a given date.
   *
   * Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response. 
   * This endpoint is more cost effective than the /vehicleHistory endpoint if your use case
   * requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).
  **/
  getVehicleSeenVehicleSeenGet(
    req: operations.GetVehicleSeenVehicleSeenGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetVehicleSeenVehicleSeenGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetVehicleSeenVehicleSeenGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vehicleSeen";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetVehicleSeenVehicleSeenGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.booleanResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listingsByZipCodeAndDateListingsByZipCodeAndDateGet - Listings by ZipCode and Date
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  listingsByZipCodeAndDateListingsByZipCodeAndDateGet(
    req: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByZipCodeAndDate";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListingsByZipCodeAndDateListingsByZipCodeAndDateGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listingsByZipCodeListingsByZipCodeGet - Listings by ZipCode
   *
   * See /listings2 endpoint for more flexible listing search.
   * Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701.
   * Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName.
   * Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).
  **/
  listingsByZipCodeListingsByZipCodeGet(
    req: operations.ListingsByZipCodeListingsByZipCodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListingsByZipCodeListingsByZipCodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListingsByZipCodeListingsByZipCodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/listingsByZipCode";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListingsByZipCodeListingsByZipCodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listingResp = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * makeSubUserKeyMakeSubUserKeyPost - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
   *
   * This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
   * This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
   * The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
   * all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
   * All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
   * higher than once per second. 
  **/
  makeSubUserKeyMakeSubUserKeyPost(
    req: operations.MakeSubUserKeyMakeSubUserKeyPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeSubUserKeyMakeSubUserKeyPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeSubUserKeyMakeSubUserKeyPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/makeSubUserKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MakeSubUserKeyMakeSubUserKeyPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.subUserJsonWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * makeTokenGetTokenGet - Get a JWT from your API credentials
   *
   * This is the first function you should call. 
   * 
   * If you are accessing our API through a third party provider they will handle authenticating to our API for you 
   * and you will not need call this function or retrieve a JSON Web Token. 
   * 
   * All other functions require the JSON Web Token (JWT) from this function to 
   * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
   * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
   * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
   * to get a new token.
  **/
  makeTokenGetTokenGet(
    req: operations.MakeTokenGetTokenGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeTokenGetTokenGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeTokenGetTokenGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getToken";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MakeTokenGetTokenGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.jsonWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * makeTokenGetTokenPost - Get a JWT from your API credentials
   *
   * This is the first function you should call. 
   * 
   * If you are accessing our API through a third party provider they will handle authenticating to our API for you 
   * and you will not need call this function or retrieve a JSON Web Token. 
   * 
   * All other functions require the JSON Web Token (JWT) from this function to 
   * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
   * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
   * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
   * to get a new token.
  **/
  makeTokenGetTokenPost(
    req: operations.MakeTokenGetTokenPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeTokenGetTokenPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeTokenGetTokenPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getToken";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MakeTokenGetTokenPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.jsonWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * revokeSubUserKeyRevokeSubUserKeyPut - Revoke a Sub User Key associated with your account.
   *
   * Revoke a SubUser API Key with the given UUID. This action can not be undone.
  **/
  revokeSubUserKeyRevokeSubUserKeyPut(
    req: operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/revokeSubUserKey";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "put",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * vinDecodeVinDecodeGet - Vin decoder and Recall Info
   *
   * Decodes the provided North American vin and provides recall information if available. 
   * We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
   * If passEmpty (default False) is True we will also include the empty fields in the response json. 
   * If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
  **/
  vinDecodeVinDecodeGet(
    req: operations.VinDecodeVinDecodeGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VinDecodeVinDecodeGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VinDecodeVinDecodeGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/vinDecode";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.VinDecodeVinDecodeGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
