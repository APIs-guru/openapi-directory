import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Song {
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
   * srcSearchlyApiV1ControllersSongSearch - API endpoint to search songs from the database given a query
   *
   * Endpoint for an end-user client to search songs from the database given a String query.
   * 
   * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
   * 
   * ```
   * https://searchly.asuarez.dev/api/v1/song/search
   * ```
   * 
  **/
  srcSearchlyApiV1ControllersSongSearch(
    req: operations.SrcSearchlyApiV1ControllersSongSearchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SrcSearchlyApiV1ControllersSongSearchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SrcSearchlyApiV1ControllersSongSearchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/song/search";
    
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
        const res: operations.SrcSearchlyApiV1ControllersSongSearchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.apiResponseSong = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/text`)) {
                res.srcSearchlyApiV1ControllersSongSearchDefaultApplicationTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
