var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
var CodeScanning = /** @class */ (function () {
    function CodeScanning(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
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
    CodeScanning.prototype.codeScanningDeleteAnalysis = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningDeleteAnalysisRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "delete" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAnalysisDeletion = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/scim+json")) {
                        res.scimError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningDeleteAnalysis503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    CodeScanning.prototype.codeScanningGetAlert = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningGetAlertRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAlert = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningGetAlert503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    CodeScanning.prototype.codeScanningGetAnalysis = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningGetAnalysisRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAnalysis = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    if (utils.MatchContentType(contentType, "application/json+sarif")) {
                        res.codeScanningGetAnalysis200ApplicationJsonPlusSarifString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningGetAnalysis503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * codeScanningGetSarif - Get information about a SARIF upload
     *
     * Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository)." You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository - API method documentation
    **/
    CodeScanning.prototype.codeScanningGetSarif = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningGetSarifRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", req.pathParams);
        var client = this._defaultClient;
        return client
            .request(__assign({ url: url, method: "get" }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningSarifsStatus = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningGetSarif503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * codeScanningListAlertInstances - List instances of a code scanning alert
     *
     * Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert - API method documentation
    **/
    CodeScanning.prototype.codeScanningListAlertInstances = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningListAlertInstancesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAlertInstances = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningListAlertInstances503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    CodeScanning.prototype.codeScanningListAlertsForRepo = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningListAlertsForRepoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAlertItems = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningListAlertsForRepo503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    CodeScanning.prototype.codeScanningListRecentAnalyses = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningListRecentAnalysesRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/analyses", req.pathParams);
        var client = this._defaultClient;
        var qpSerializer = utils.GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .request(__assign({ url: url, method: "get" }, requestConfig)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAnalyses = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningListRecentAnalyses503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    /**
     * codeScanningUpdateAlert - Update a code scanning alert
     *
     * Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
    **/
    CodeScanning.prototype.codeScanningUpdateAlert = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningUpdateAlertRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "patch", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningAlert = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningUpdateAlert503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
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
    CodeScanning.prototype.codeScanningUploadSarif = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CodeScanningUploadSarifRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/code-scanning/sarifs", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._defaultClient;
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        return client
            .request(__assign({ url: url, method: "post", headers: headers, data: body }, config)).then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 202:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningSarifsReceipt = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 403:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 404:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.basicError = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 413:
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 503:
                    if (utils.MatchContentType(contentType, "application/json")) {
                        res.codeScanningUploadSarif503ApplicationJsonObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return CodeScanning;
}());
export { CodeScanning };
