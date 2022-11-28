import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class FileMigrations {
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
   * getFileMigrationsId - Show File Migration
   *
   * Show File Migration
  **/
  getFileMigrationsId(
    req: operations.GetFileMigrationsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFileMigrationsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFileMigrationsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/file_migrations/{id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFileMigrationsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileMigrationEntity = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 405:
            break;
          case httpRes?.status == 409:
            break;
          case httpRes?.status == 412:
            break;
          case httpRes?.status == 422:
            break;
          case httpRes?.status == 423:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
