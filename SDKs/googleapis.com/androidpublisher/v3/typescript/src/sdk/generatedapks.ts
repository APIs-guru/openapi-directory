import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Generatedapks {
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
   * androidpublisherGeneratedapksDownload - Downloads a single signed APK generated from an app bundle.
  **/
  androidpublisherGeneratedapksDownload(
    req: operations.AndroidpublisherGeneratedapksDownloadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidpublisherGeneratedapksDownloadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidpublisherGeneratedapksDownloadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}/downloads/{downloadId}:download", req.pathParams);
    
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
        const res: operations.AndroidpublisherGeneratedapksDownloadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * androidpublisherGeneratedapksList - Returns download metadata for all APKs that were generated from a given app bundle.
  **/
  androidpublisherGeneratedapksList(
    req: operations.AndroidpublisherGeneratedapksListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AndroidpublisherGeneratedapksListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AndroidpublisherGeneratedapksListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/androidpublisher/v3/applications/{packageName}/generatedApks/{versionCode}", req.pathParams);
    
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
        const res: operations.AndroidpublisherGeneratedapksListResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.generatedApksListResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
