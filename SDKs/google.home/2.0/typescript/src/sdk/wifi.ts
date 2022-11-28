import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Wifi {
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
   * connecttoWiFiNetwork - Connect to Wi-Fi Network
   *
   * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
  **/
  connecttoWiFiNetwork(
    req: operations.ConnecttoWiFiNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ConnecttoWiFiNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ConnecttoWiFiNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/connect_wifi";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ConnecttoWiFiNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * forgetWiFiNetwork - Forget Wi-Fi Network
   *
   * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
  **/
  forgetWiFiNetwork(
    req: operations.ForgetWiFiNetworkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ForgetWiFiNetworkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ForgetWiFiNetworkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/forget_wifi";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ForgetWiFiNetworkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getSavedNetworks - Get Saved Networks
   *
   * This gets a list of all saved Wi-Fi networks.
   * 
   * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
   * `wpa_id` is an incrementing number used to identify a saved network.  
   * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
  **/
  getSavedNetworks(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSavedNetworksResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/configured_networks";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSavedNetworksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example113s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getWiFiScanResults - Get Wi-Fi Scan Results
   *
   * This gets a list of all nearby Wi-Fi access points.
   * 
   * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
  **/
  getWiFiScanResults(
    config?: AxiosRequestConfig
  ): Promise<operations.GetWiFiScanResultsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scan_results";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWiFiScanResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.example114s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scanforNetworks - Scan for Networks
   *
   * This initiates scanning for Wi-Fi networks.
   * 
   * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
  **/
  scanforNetworks(
    config?: AxiosRequestConfig
  ): Promise<operations.ScanforNetworksResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/scan_wifi";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ScanforNetworksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
