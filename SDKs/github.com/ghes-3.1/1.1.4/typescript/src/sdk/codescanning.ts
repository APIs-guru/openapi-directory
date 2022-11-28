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
   * codeScanningDeleteAnalysis - Delete a code scanning analysis from a repository
   *
   * Deletes a specified code scanning analysis from a repository. For
   * private repositories, you must use an access token with the `repo` scope. For public repositories,
   * you must use an access token with `public_repo` and `repo:security_events` scopes.
   * GitHub Apps must have the `security_events` write permission to use this endpoint.
   * 
   * You can delete one analysis at a time.
   * To delete a series of analyses, start with the most recent analysis and work backwards.
   * Conceptually, the process is similar to the undo function in a text editor.
   * 
   * **Note**: The ability to delete analyses was introduced in GitHub Enterprise Server 3.1.
   * You can delete analyses that were generated prior to installing this release,
   * however, if you do so, you will lose information about fixed alerts for all such analyses,
   * for the relevant code scanning tool.
   * We recommend that you only delete analyses that were generated with earlier releases
   * if you don't need the details of fixed alerts from pre-3.1 releases.
   * 
   * When you list the analyses for a repository,
   * one or more will be identified as deletable in the response:
   * 
   * ```
   * "deletable": true
   * ```
   * 
   * An analysis is deletable when it's the most recent in a set of analyses.
   * Typically, a repository will have multiple sets of analyses
   * for each enabled code scanning tool,
   * where a set is determined by a unique combination of analysis values:
   * 
   * * `ref`
   * * `tool`
   * * `analysis_key`
   * * `environment`
   * 
   * If you attempt to delete an analysis that is not the most recent in a set,
   * you'll get a 400 response with the message:
   * 
   * ```
   * Analysis specified is not deletable.
   * ```
   * 
   * The response from a successful `DELETE` operation provides you with
   * two alternative URLs for deleting the next analysis in the set
   * (see the example default response below).
   * Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
   * in the set. This is a useful option if you want to preserve at least one analysis
   * for the specified tool in your repository.
   * Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
   * When you delete the last analysis in a set the value of `next_analysis_url` and `confirm_delete_url`
   * in the 200 response is `null`.
   * 
   * As an example of the deletion process,
   * let's imagine that you added a workflow that configured a particular code scanning tool
   * to analyze the code in a repository. This tool has added 15 analyses:
   * 10 on the default branch, and another 5 on a topic branch.
   * You therefore have two separate sets of analyses for this tool.
   * You've now decided that you want to remove all of the analyses for the tool.
   * To do this you must make 15 separate deletion requests.
   * To start, you must find the deletable analysis for one of the sets,
   * step through deleting the analyses in that set,
   * and then repeat the process for the second set.
   * The procedure therefore consists of a nested loop:
   * 
   * **Outer loop**:
   * * List the analyses for the repository, filtered by tool.
   * * Parse this list to find a deletable analysis. If found:
   * 
   *   **Inner loop**:
   *   * Delete the identified analysis.
   *   * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.
   * 
   * The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository - API method documentation
  **/
  codeScanningDeleteAnalysis(
    req: operations.CodeScanningDeleteAnalysisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningDeleteAnalysisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningDeleteAnalysisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", req.pathParams);
    
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
        method: "delete",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodeScanningDeleteAnalysisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAnalysisDeletion = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
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
                res.codeScanningDeleteAnalysis503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningGetAlert - Get a code scanning alert
   *
   * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
   * 
   * **Deprecation notice**:
   * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
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
   * codeScanningGetAnalysis - Get a code scanning analysis for a repository
   *
   * Gets a specified code scanning analysis for a repository.
   * You must use an access token with the `security_events` scope to use this endpoint.
   * GitHub Apps must have the `security_events` read permission to use this endpoint.
   * 
   * The default JSON response contains fields that describe the analysis.
   * This includes the Git reference and commit SHA to which the analysis relates,
   * the datetime of the analysis, the name of the code scanning tool,
   * and the number of alerts.
   * 
   * The `rules_count` field in the default response give the number of rules
   * that were run in the analysis.
   * For very old analyses this data is not available,
   * and `0` is returned in this field.
   * 
   * If you use the Accept header `application/sarif+json`,
   * the response contains the analysis data that was uploaded.
   * This is formatted as
   * [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
   * For an example response, see "[Custom media type for code scanning](#custom-media-type-for-code-scanning)."
   * 
   * **Deprecation notice**:
   * The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository - API method documentation
  **/
  codeScanningGetAnalysis(
    req: operations.CodeScanningGetAnalysisRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningGetAnalysisResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningGetAnalysisRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodeScanningGetAnalysisResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAnalysis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/json+sarif`)) {
                res.codeScanningGetAnalysis200ApplicationJsonPlusSarifString = JSON.stringify(httpRes?.data);
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
                res.codeScanningGetAnalysis503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningGetSarif - Get information about a SARIF upload
   *
   * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository - API method documentation
  **/
  codeScanningGetSarif(
    req: operations.CodeScanningGetSarifRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningGetSarifResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningGetSarifRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CodeScanningGetSarifResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningSarifsStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningGetSarif503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * codeScanningListAlertInstances - List instances of a code scanning alert
   *
   * Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert - API method documentation
  **/
  codeScanningListAlertInstances(
    req: operations.CodeScanningListAlertInstancesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CodeScanningListAlertInstancesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CodeScanningListAlertInstancesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", req.pathParams);
    
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
        const res: operations.CodeScanningListAlertInstancesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeScanningAlertInstances = httpRes?.data;
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
                res.codeScanningListAlertInstances503ApplicationJsonObject = httpRes?.data;
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
   * The response includes a `most_recent_instance` object.
   * This provides details of the most recent instance of this alert
   * for the default branch or for the specified Git reference
   * (if you used `ref` in the request).
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
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
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
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
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
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
   *  - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."
   *  - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."
   * 
   * You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
   * 
   * ```
   * gzip -c analysis-data.sarif | base64 -w0
   * ```
   * 
   * SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
   * 
   * The `202 Accepted`, response includes an `id` value.
   * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
   * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
   *
   * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
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
