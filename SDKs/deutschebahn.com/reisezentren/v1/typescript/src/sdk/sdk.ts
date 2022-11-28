import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.deutschebahn.com/reisezentren/v1",
	"http://api.deutschebahn.com/reisezentren/v1",
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
   * getReisezentren - Get all station infos
   *
   * Get all station infos
  **/
  getReisezentren(
    req: operations.GetReisezentrenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReisezentrenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReisezentrenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/reisezentren";
    
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
        const res: operations.GetReisezentrenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.travelCenterList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 416:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReisezentrenId - Get information about a specific station
   *
   * Get information about a specific station
  **/
  getReisezentrenId(
    req: operations.GetReisezentrenIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReisezentrenIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReisezentrenIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reisezentren/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReisezentrenIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `*/*`)) {
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
   * getReisezentrenLocLatLon - Get information about a station near a location
   *
   * Get information about a station near a location
  **/
  getReisezentrenLocLatLon(
    req: operations.GetReisezentrenLocLatLonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReisezentrenLocLatLonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReisezentrenLocLatLonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reisezentren/loc/{lat}/{lon}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReisezentrenLocLatLonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.travelCenter = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getReisezentrenLocLatLonDist - Get stations in a given radius
   *
   * Get stations in a given radius
  **/
  getReisezentrenLocLatLonDist(
    req: operations.GetReisezentrenLocLatLonDistRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetReisezentrenLocLatLonDistResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetReisezentrenLocLatLonDistRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reisezentren/loc/{lat}/{lon}/{dist}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetReisezentrenLocLatLonDistResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.travelCenter = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
