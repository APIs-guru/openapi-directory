import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://searchly.asuarez.dev/api/v1",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

// SDK Documentation: https://searchly.asuarez.dev/ - SearchLy demo
export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // SrcSearchlyApiV1ControllersSimilarityByContent - API endpoint to search similarity using content
  /** 
   * Endpoint for an end-user client to search similarity by content.
   * 
   * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/similarity/by_content
   * ```
   * 
  **/
  SrcSearchlyApiV1ControllersSimilarityByContent(
    req: operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSimilarityByContentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarity/by_content";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiResponseSimilarity = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSimilarityByContentDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SrcSearchlyApiV1ControllersSimilarityBySong - API endpoint to search similarity using a song identifier
  /** 
   * Endpoint for an end-user client to search similarity by song identifier.
   * 
   * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/similarity/by_song
   * ```
   * 
  **/
  SrcSearchlyApiV1ControllersSimilarityBySong(
    req: operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/similarity/by_song";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiResponseSimilarity = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSimilarityBySongDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // SrcSearchlyApiV1ControllersSongSearch - API endpoint to search songs from the database given a query
  /** 
   * Endpoint for an end-user client to search songs from the database given a String query.
   * 
   * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/song/search
   * ```
   * 
  **/
  SrcSearchlyApiV1ControllersSongSearch(
    req: operations.SrcSearchlyApiV1ControllersSongSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSongSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSongSearchRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/song/search";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SrcSearchlyApiV1ControllersSongSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiResponseSong = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
