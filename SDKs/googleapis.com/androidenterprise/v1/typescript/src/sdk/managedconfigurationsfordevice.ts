import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Managedconfigurationsfordevice {
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
   * androidenterpriseManagedconfigurationsfordeviceDelete - Removes a per-device managed configuration for an app for the specified device.
  **/
  androidenterpriseManagedconfigurationsfordeviceDelete(
    req: operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androidenterpriseManagedconfigurationsfordeviceGet - Retrieves details of a per-device managed configuration.
  **/
  androidenterpriseManagedconfigurationsfordeviceGet(
    req: operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidenterpriseManagedconfigurationsfordeviceGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}", req.pathParams);
    
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
        const res: operations.AndroidenterpriseManagedconfigurationsfordeviceGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managedConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androidenterpriseManagedconfigurationsfordeviceList - Lists all the per-device managed configurations for the specified device. Only the ID is set.
  **/
  androidenterpriseManagedconfigurationsfordeviceList(
    req: operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidenterpriseManagedconfigurationsfordeviceListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice", req.pathParams);
    
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
        const res: operations.AndroidenterpriseManagedconfigurationsfordeviceListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managedConfigurationsForDeviceListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androidenterpriseManagedconfigurationsfordeviceUpdate - Adds or updates a per-device managed configuration for an app for the specified device.
  **/
  androidenterpriseManagedconfigurationsfordeviceUpdate(
    req: operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.CreateSecurityClient(this._defaultClient!, req.security)!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.managedConfiguration = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
