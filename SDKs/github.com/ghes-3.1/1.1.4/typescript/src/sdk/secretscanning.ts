import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class SecretScanning {
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
   * secretScanningGetAlert - Get a secret scanning alert
   *
   * Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
   * 
   * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#get-a-secret-scanning-alert - API method documentation
  **/
  secretScanningGetAlert(
    req: operations.SecretScanningGetAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SecretScanningGetAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SecretScanningGetAlertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SecretScanningGetAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.secretScanningAlert = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.secretScanningGetAlert503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * secretScanningListAlertsForRepo - List secret scanning alerts for a repository
   *
   * Lists all secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.
   * 
   * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository - API method documentation
  **/
  secretScanningListAlertsForRepo(
    req: operations.SecretScanningListAlertsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SecretScanningListAlertsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SecretScanningListAlertsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/secret-scanning/alerts", req.pathParams);
    
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
        const res: operations.SecretScanningListAlertsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.secretScanningAlerts = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.secretScanningListAlertsForRepo503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
