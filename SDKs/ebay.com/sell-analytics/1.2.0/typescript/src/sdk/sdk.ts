import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.ebay.com{basePath}",
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
   * findSellerStandardsProfiles - This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.
  **/
  findSellerStandardsProfiles(
    req: operations.FindSellerStandardsProfilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FindSellerStandardsProfilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FindSellerStandardsProfilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/seller_standards_profile";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FindSellerStandardsProfilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.findSellerStandardsProfilesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getCustomerServiceMetric - Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.
  **/
  getCustomerServiceMetric(
    req: operations.GetCustomerServiceMetricRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetCustomerServiceMetricResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetCustomerServiceMetricRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/customer_service_metric/{customer_service_metric_type}/{evaluation_type}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetCustomerServiceMetricResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getCustomerServiceMetricResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSellerStandardsProfile - This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.
  **/
  getSellerStandardsProfile(
    req: operations.GetSellerStandardsProfileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSellerStandardsProfileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSellerStandardsProfileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/seller_standards_profile/{program}/{cycle}", req.pathParams);
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSellerStandardsProfileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.standardsProfile = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getTrafficReport - This method returns a report that details the user traffic received by a seller's listings. A traffic report gives sellers the ability to review how often their listings appeared on eBay, how many times their listings are viewed, and how many purchases were made. The report also returns the report's start and end dates, and the date the information was last updated. When using this call: Be sure to URL-encode the values you pass in query parameters, as described in URI parameters. See the request samples below for details. You can only specify a single metric in the sort parameter and the specified metric must be listed in the metric parameter of your request. Parameter names are case sensitive, but metric names are not. For example, the following are correct: sort=LISTING_IMPRESSION_TOTAL sort=lisitng_impression_total metric=lisitng_impression_total However, these are incorrect: SORT=LISTING_IMPRESSION_TOTAL SORT=lisitng_impression_total Metric=lisitng_impression_total For more information, see Traffic report details.
  **/
  getTrafficReport(
    req: operations.GetTrafficReportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTrafficReportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTrafficReportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/traffic_report";
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetTrafficReportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.report = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
