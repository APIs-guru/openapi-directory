import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CodesOfConduct {
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
   * codesOfConductGetAllCodesOfConduct - Get all codes of conduct
   *
   * https://docs.github.com/enterprise-server@2.18/rest/reference/codes-of-conduct#get-all-codes-of-conduct - API method documentation
  **/
  codesOfConductGetAllCodesOfConduct(
    config?: AxiosRequestConfig
  ): Promise<operations.CodesOfConductGetAllCodesOfConductResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/codes_of_conduct";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodesOfConductGetAllCodesOfConductResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeOfConducts = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codesOfConductGetAllCodesOfConduct415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codesOfConductGetConductCode - Get a code of conduct
   *
   * https://docs.github.com/enterprise-server@2.18/rest/reference/codes-of-conduct#get-a-code-of-conduct - API method documentation
  **/
  codesOfConductGetConductCode(
    req: operations.CodesOfConductGetConductCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodesOfConductGetConductCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodesOfConductGetConductCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/codes_of_conduct/{key}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodesOfConductGetConductCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeOfConduct = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codesOfConductGetConductCode415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
