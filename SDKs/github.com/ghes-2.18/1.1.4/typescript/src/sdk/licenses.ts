import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Licenses {
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
   * licensesGet - Get a license
   *
   * https://docs.github.com/enterprise-server@2.18/rest/reference/licenses#get-a-license - API method documentation
  **/
  licensesGet(
    req: operations.LicensesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicensesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicensesGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/licenses/{license}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LicensesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.license = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * licensesGetAllCommonlyUsed - Get all commonly used licenses
   *
   * https://docs.github.com/enterprise-server@2.18/rest/reference/licenses#get-all-commonly-used-licenses - API method documentation
  **/
  licensesGetAllCommonlyUsed(
    req: operations.LicensesGetAllCommonlyUsedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicensesGetAllCommonlyUsedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicensesGetAllCommonlyUsedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/licenses";
    
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
        const res: operations.LicensesGetAllCommonlyUsedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * licensesGetForRepo - Get the license for a repository
   *
   * This method returns the contents of the repository's license file, if one is detected.
   * 
   * Similar to [Get repository content](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
   *
   * https://docs.github.com/enterprise-server@2.18/rest/reference/licenses/#get-the-license-for-a-repository - API method documentation
  **/
  licensesGetForRepo(
    req: operations.LicensesGetForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicensesGetForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicensesGetForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/license", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LicensesGetForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.licenseContent = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
