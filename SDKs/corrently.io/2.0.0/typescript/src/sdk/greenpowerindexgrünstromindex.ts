import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class GreenPowerIndexGrünstromIndex {
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
   * gsiBesthour - Get best hour (with most regional green energy) in a given timeframe.
   *
   * Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).
   * 
  **/
  gsiBesthour(
    req: operations.GsiBesthourRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GsiBesthourResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GsiBesthourRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/gsi/bestHour";
    
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
        const res: operations.GsiBesthourResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gsiBesthour200ApplicationJsonBoolean = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gsiDispatch - Dispatch (Green Energy Distribution Schedule)
   *
   * Dispatch of green energy has two aspects to consider:
   *   - Availability of gerneration facility (depends on weather and installed capacity)
   *   - Demand of energy
   * Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).
   * 
  **/
  gsiDispatch(
    req: operations.GsiDispatchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GsiDispatchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GsiDispatchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/gsi/dispatch";
    
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
        const res: operations.GsiDispatchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gsiDispatch200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gsiMarketdata - Marketdata
   *
   * Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.
   * 
  **/
  gsiMarketdata(
    req: operations.GsiMarketdataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GsiMarketdataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GsiMarketdataRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/gsi/marketdata";
    
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
        const res: operations.GsiMarketdataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gsiMarketdata200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * gsiPrediction - Prediction
   *
   * Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.
   * 
  **/
  gsiPrediction(
    req: operations.GsiPredictionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GsiPredictionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GsiPredictionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/gsi/prediction";
    
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
        const res: operations.GsiPredictionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.gsiPrediction200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
