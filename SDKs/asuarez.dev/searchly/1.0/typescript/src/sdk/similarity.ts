import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Similarity {
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
   * srcSearchlyApiV1ControllersSimilarityByContent - API endpoint to search similarity using content
   *
   * Endpoint for an end-user client to search similarity by content.
   * 
   * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/similarity/by_content
   * ```
   * 
  **/
  srcSearchlyApiV1ControllersSimilarityByContent(
    req: operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarity/by_content";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSimilarity = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * srcSearchlyApiV1ControllersSimilarityBySong - API endpoint to search similarity using a song identifier
   *
   * Endpoint for an end-user client to search similarity by song identifier.
   * 
   * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/similarity/by_song
   * ```
   * 
  **/
  srcSearchlyApiV1ControllersSimilarityBySong(
    req: operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarity/by_song";
    
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
        const res: operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSimilarity = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
