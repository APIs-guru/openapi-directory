import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CodeScanning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * codeScanningGetAlert - Get a code scanning alert
     *
     * Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * **Deprecation notice**:
     * The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
    **/
    codeScanningGetAlert(req: operations.CodeScanningGetAlertRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningGetAlertResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
    **/
    codeScanningListAlertsForRepo(req: operations.CodeScanningListAlertsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningListAlertsForRepoResponse>;
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
     * https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
    **/
    codeScanningListRecentAnalyses(req: operations.CodeScanningListRecentAnalysesRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningListRecentAnalysesResponse>;
    /**
     * codeScanningUpdateAlert - Update a code scanning alert
     *
     * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
    **/
    codeScanningUpdateAlert(req: operations.CodeScanningUpdateAlertRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningUpdateAlertResponse>;
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
     * SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
     *
     * The `202 Accepted`, response includes an `id` value.
     * You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
     * For more information, see "[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload)."
     *
     * https://docs.github.com/enterprise-server@3.0/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
    **/
    codeScanningUploadSarif(req: operations.CodeScanningUploadSarifRequest, config?: AxiosRequestConfig): Promise<operations.CodeScanningUploadSarifResponse>;
}
