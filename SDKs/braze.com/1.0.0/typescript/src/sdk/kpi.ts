import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Kpi {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * dailyActiveUsersByDate - Daily Active Users by Date
   *
   * This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "dau" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  dailyActiveUsersByDate(
    req: operations.DailyActiveUsersByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyActiveUsersByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyActiveUsersByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/dau/data_series";
    
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
        const res: operations.DailyActiveUsersByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * dailyNewUsersByDate - Daily New Users by Date
   *
   * This endpoint allows you to retrieve a daily series of the total number of new users on each date.
   * 
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "new_users" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  dailyNewUsersByDate(
    req: operations.DailyNewUsersByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DailyNewUsersByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DailyNewUsersByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/new_users/data_series";
    
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
        const res: operations.DailyNewUsersByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * kpIsForDailyAppUninstallsByDate - KPIs for Daily App Uninstalls by Date
   *
   * This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "uninstalls" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  kpIsForDailyAppUninstallsByDate(
    req: operations.KpIsForDailyAppUninstallsByDateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.KpIsForDailyAppUninstallsByDateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.KpIsForDailyAppUninstallsByDateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/uninstalls/data_series";
    
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
        const res: operations.KpIsForDailyAppUninstallsByDateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * monthlyActiveUsersForLast30Days - Monthly Active Users for Last 30 Days
   *
   * This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.
   * 
   * ## Response
   * 
   * ```json
   * Content-Type: application/json
   * Authorization: Bearer YOUR-REST-API-KEY
   * {
   *     "message": (required, string) the status of the export, returns 'success' when completed without errors,
   *     "data" : [
   *         {
   *             "time" : (string) date as ISO 8601 date,
   *             "mau" : (int)
   *         },
   *         ...
   *     ]
   * }
   * ```
  **/
  monthlyActiveUsersForLast30Days(
    req: operations.MonthlyActiveUsersForLast30DaysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MonthlyActiveUsersForLast30DaysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MonthlyActiveUsersForLast30DaysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/kpi/mau/data_series";
    
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
        const res: operations.MonthlyActiveUsersForLast30DaysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
