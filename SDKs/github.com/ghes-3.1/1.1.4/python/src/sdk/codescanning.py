import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class CodeScanning:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def code_scanning_delete_analysis(self, request: operations.CodeScanningDeleteAnalysisRequest) -> operations.CodeScanningDeleteAnalysisResponse:
        r"""Delete a code scanning analysis from a repository
        Deletes a specified code scanning analysis from a repository. For
        private repositories, you must use an access token with the `repo` scope. For public repositories,
        you must use an access token with `public_repo` and `repo:security_events` scopes.
        GitHub Apps must have the `security_events` write permission to use this endpoint.
        
        You can delete one analysis at a time.
        To delete a series of analyses, start with the most recent analysis and work backwards.
        Conceptually, the process is similar to the undo function in a text editor.
        
        **Note**: The ability to delete analyses was introduced in GitHub Enterprise Server 3.1.
        You can delete analyses that were generated prior to installing this release,
        however, if you do so, you will lose information about fixed alerts for all such analyses,
        for the relevant code scanning tool.
        We recommend that you only delete analyses that were generated with earlier releases
        if you don't need the details of fixed alerts from pre-3.1 releases.
        
        When you list the analyses for a repository,
        one or more will be identified as deletable in the response:
        
        ```
        \"deletable\": true
        ```
        
        An analysis is deletable when it's the most recent in a set of analyses.
        Typically, a repository will have multiple sets of analyses
        for each enabled code scanning tool,
        where a set is determined by a unique combination of analysis values:
        
        * `ref`
        * `tool`
        * `analysis_key`
        * `environment`
        
        If you attempt to delete an analysis that is not the most recent in a set,
        you'll get a 400 response with the message:
        
        ```
        Analysis specified is not deletable.
        ```
        
        The response from a successful `DELETE` operation provides you with
        two alternative URLs for deleting the next analysis in the set
        (see the example default response below).
        Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis
        in the set. This is a useful option if you want to preserve at least one analysis
        for the specified tool in your repository.
        Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.
        When you delete the last analysis in a set the value of `next_analysis_url` and `confirm_delete_url`
        in the 200 response is `null`.
        
        As an example of the deletion process,
        let's imagine that you added a workflow that configured a particular code scanning tool
        to analyze the code in a repository. This tool has added 15 analyses:
        10 on the default branch, and another 5 on a topic branch.
        You therefore have two separate sets of analyses for this tool.
        You've now decided that you want to remove all of the analyses for the tool.
        To do this you must make 15 separate deletion requests.
        To start, you must find the deletable analysis for one of the sets,
        step through deleting the analyses in that set,
        and then repeat the process for the second set.
        The procedure therefore consists of a nested loop:
        
        **Outer loop**:
        * List the analyses for the repository, filtered by tool.
        * Parse this list to find a deletable analysis. If found:
        
          **Inner loop**:
          * Delete the identified analysis.
          * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.
        
        The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningDeleteAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningAnalysisDeletion])
                res.code_scanning_analysis_deletion = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningDeleteAnalysis503ApplicationJSON])
                res.code_scanning_delete_analysis_503_application_json_object = out

        return res

    
    def code_scanning_get_alert(self, request: operations.CodeScanningGetAlertRequest) -> operations.CodeScanningGetAlertResponse:
        r"""Get a code scanning alert
        Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
        
        **Deprecation notice**:
        The instances field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The same information can now be retrieved via a GET request to the URL specified by `instances_url`.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningGetAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningAlert])
                res.code_scanning_alert = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningGetAlert503ApplicationJSON])
                res.code_scanning_get_alert_503_application_json_object = out

        return res

    
    def code_scanning_get_analysis(self, request: operations.CodeScanningGetAnalysisRequest) -> operations.CodeScanningGetAnalysisResponse:
        r"""Get a code scanning analysis for a repository
        Gets a specified code scanning analysis for a repository.
        You must use an access token with the `security_events` scope to use this endpoint.
        GitHub Apps must have the `security_events` read permission to use this endpoint.
        
        The default JSON response contains fields that describe the analysis.
        This includes the Git reference and commit SHA to which the analysis relates,
        the datetime of the analysis, the name of the code scanning tool,
        and the number of alerts.
        
        The `rules_count` field in the default response give the number of rules
        that were run in the analysis.
        For very old analyses this data is not available,
        and `0` is returned in this field.
        
        If you use the Accept header `application/sarif+json`,
        the response contains the analysis data that was uploaded.
        This is formatted as
        [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).
        For an example response, see \"[Custom media type for code scanning](#custom-media-type-for-code-scanning).\"
        
        **Deprecation notice**:
        The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningGetAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningAnalysis])
                res.code_scanning_analysis = out
            if utils.match_content_type(content_type, "application/json+sarif"):
                res.code_scanning_get_analysis_200_application_json_plus_sarif_string = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningGetAnalysis503ApplicationJSON])
                res.code_scanning_get_analysis_503_application_json_object = out

        return res

    
    def code_scanning_get_sarif(self, request: operations.CodeScanningGetSarifRequest) -> operations.CodeScanningGetSarifResponse:
        r"""Get information about a SARIF upload
        Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see \"[Get a code scanning analysis for a repository](/rest/reference/code-scanning#get-a-code-scanning-analysis-for-a-repository).\" You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-recent-code-scanning-analyses-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningGetSarifResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningSarifsStatus])
                res.code_scanning_sarifs_status = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningGetSarif503ApplicationJSON])
                res.code_scanning_get_sarif_503_application_json_object = out

        return res

    
    def code_scanning_list_alert_instances(self, request: operations.CodeScanningListAlertInstancesRequest) -> operations.CodeScanningListAlertInstancesResponse:
        r"""List instances of a code scanning alert
        Lists all instances of the specified code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-instances-of-a-code-scanning-alert - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningListAlertInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CodeScanningAlertInstance]])
                res.code_scanning_alert_instances = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningListAlertInstances503ApplicationJSON])
                res.code_scanning_list_alert_instances_503_application_json_object = out

        return res

    
    def code_scanning_list_alerts_for_repo(self, request: operations.CodeScanningListAlertsForRepoRequest) -> operations.CodeScanningListAlertsForRepoResponse:
        r"""List code scanning alerts for a repository
        Lists all open code scanning alerts for the default branch (usually `main`
        or `master`). You must use an access token with the `security_events` scope to use
        this endpoint. GitHub Apps must have the `security_events` read permission to use
        this endpoint.
        
        The response includes a `most_recent_instance` object.
        This provides details of the most recent instance of this alert
        for the default branch or for the specified Git reference
        (if you used `ref` in the request).
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/alerts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningListAlertsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CodeScanningAlertItems]])
                res.code_scanning_alert_items = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningListAlertsForRepo503ApplicationJSON])
                res.code_scanning_list_alerts_for_repo_503_application_json_object = out

        return res

    
    def code_scanning_list_recent_analyses(self, request: operations.CodeScanningListRecentAnalysesRequest) -> operations.CodeScanningListRecentAnalysesResponse:
        r"""List code scanning analyses for a repository
        Lists the details of all code scanning analyses for a repository,
        starting with the most recent.
        The response is paginated and you can use the `page` and `per_page` parameters
        to list the analyses you're interested in.
        By default 30 analyses are listed per page.
        
        The `rules_count` field in the response give the number of rules
        that were run in the analysis.
        For very old analyses this data is not available,
        and `0` is returned in this field.
        
        You must use an access token with the `security_events` scope to use this endpoint.
        GitHub Apps must have the `security_events` read permission to use this endpoint.
        
        **Deprecation notice**:
        The `tool_name` field is deprecated and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/analyses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningListRecentAnalysesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CodeScanningAnalysis]])
                res.code_scanning_analyses = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningListRecentAnalyses503ApplicationJSON])
                res.code_scanning_list_recent_analyses_503_application_json_object = out

        return res

    
    def code_scanning_update_alert(self, request: operations.CodeScanningUpdateAlertRequest) -> operations.CodeScanningUpdateAlertResponse:
        r"""Update a code scanning alert
        Updates the status of a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningUpdateAlertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningAlert])
                res.code_scanning_alert = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningUpdateAlert503ApplicationJSON])
                res.code_scanning_update_alert_503_application_json_object = out

        return res

    
    def code_scanning_upload_sarif(self, request: operations.CodeScanningUploadSarifRequest) -> operations.CodeScanningUploadSarifResponse:
        r"""Upload an analysis as SARIF data
        Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` write permission to use this endpoint.
        
        There are two places where you can upload code scanning results.
         - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see \"[Triaging code scanning alerts in pull requests](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests).\"
         - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see \"[Managing code scanning alerts for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).\"
        
        You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
        
        ```
        gzip -c analysis-data.sarif | base64 -w0
        ```
        
        SARIF upload supports a maximum of 5000 results per analysis run. Any results over this limit are ignored and any SARIF uploads with more than 25,000 results are rejected. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
        
        The `202 Accepted`, response includes an `id` value.
        You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
        For more information, see \"[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload).\"
        https://docs.github.com/enterprise-server@3.1/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/code-scanning/sarifs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CodeScanningUploadSarifResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CodeScanningSarifsReceipt])
                res.code_scanning_sarifs_receipt = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 413:
            pass
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CodeScanningUploadSarif503ApplicationJSON])
                res.code_scanning_upload_sarif_503_application_json_object = out

        return res

    