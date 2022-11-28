import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CodeScanning {
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
   * codeScanningGetAlert - Get a code scanning alert
   *
   * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
   * 
   * **Deprecation notice**:
   * The instances field is deprecated and will, in future, not be included in the response for this endpoint. From GitHub Enterprise Server 3.0, the same information can be retrieved via a GET request to the URL specified by `instances_url`, added in that release.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
  **/
  codeScanningGetAlert(
    req: operations.CodeScanningGetAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningGetAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningGetAlertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodeScanningGetAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAlert = httpRes?.data;
            }
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
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningGetAlert503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningListAlertsForRepo - List code scanning alerts for a repository
   *
   * Lists all open code scanning alerts for the default branch (usually `main`
   * or `master`). You must use an access token with the `security_events` scope to use
   * this endpoint. GitHub Apps must have the `security_events` read permission to use
   * this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
  **/
  codeScanningListAlertsForRepo(
    req: operations.CodeScanningListAlertsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningListAlertsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningListAlertsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts", req.pathParams);
    
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
        const res: operations.CodeScanningListAlertsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAlertItems = httpRes?.data;
            }
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
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningListAlertsForRepo503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningListRecentAnalyses - List code scanning analyses for a repository
   *
   * Lists the details of all code scanning analyses for a repository,
   * starting with the most recent.
   * The response is paginated and you can use the `page` and `per_page` parameters
   * to list the analyses you're interested in.
   * By default 30 analyses are listed per page.
   * 
   * The `rules_count` field in the response give the number of rules
   * that were run in the analysis.
   * For very old analyses this data is not available,
   * and `0` is returned in this field.
   * 
   * You must use an access token with the `security_events` scope to use this endpoint.
   * GitHub Apps must have the `security_events` read permission to use this endpoint.
   * 
   * **Deprecation notice**:
   * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
  **/
  codeScanningListRecentAnalyses(
    req: operations.CodeScanningListRecentAnalysesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningListRecentAnalysesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningListRecentAnalysesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses", req.pathParams);
    
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
        const res: operations.CodeScanningListRecentAnalysesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAnalyses = httpRes?.data;
            }
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
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningListRecentAnalyses503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningUpdateAlert - Update a code scanning alert
   *
   * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
  **/
  codeScanningUpdateAlert(
    req: operations.CodeScanningUpdateAlertRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningUpdateAlertResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningUpdateAlertRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", req.pathParams);

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
    return client
      .request({
        url: url,
        method: "patch",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodeScanningUpdateAlertResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAlert = httpRes?.data;
            }
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
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningUpdateAlert503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningUploadSarif - Upload an analysis as SARIF data
   *
   * Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
   * 
   * There are two places where you can upload code scanning results.
   *  - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)."
   *  - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
   * 
   * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
   * 
   * ```
   * gzip -c analysis-data.sarif | base64 -w0
   * ```
   * 
   * SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
   * 
   * The `202 Accepted`, response includes an `id` value.
   * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
   * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
  **/
  codeScanningUploadSarif(
    req: operations.CodeScanningUploadSarifRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningUploadSarifResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningUploadSarifRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/sarifs", req.pathParams);

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
        const res: operations.CodeScanningUploadSarifResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningSarifsReceipt = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
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
          case httpRes?.status == 413:
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningUploadSarif503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
