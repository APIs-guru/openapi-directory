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

    
    def code_scanning_get_alert(self, request: operations.CodeScanningGetAlertRequest) -> operations.CodeScanningGetAlertResponse:
        r"""Get a code scanning alert
        Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
        
        **Deprecation notice**:
        The instances field is deprecated and will, in future, not be included in the response for this endpoint. From GitHub Enterprise Server 3.0, the same information can be retrieved via a GET request to the URL specified by `instances_url`, added in that release.
        https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#get-a-code-scanning-alert - API method documentation
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

    
    def code_scanning_list_alerts_for_repo(self, request: operations.CodeScanningListAlertsForRepoRequest) -> operations.CodeScanningListAlertsForRepoResponse:
        r"""List code scanning alerts for a repository
        Lists all open code scanning alerts for the default branch (usually `main`
        or `master`). You must use an access token with the `security_events` scope to use
        this endpoint. GitHub Apps must have the `security_events` read permission to use
        this endpoint.
        https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-alerts-for-a-repository - API method documentation
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
        https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#list-code-scanning-analyses-for-a-repository - API method documentation
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
        https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#update-a-code-scanning-alert - API method documentation
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
         - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see \"[Triaging code scanning alerts in pull requests](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests).\"
         - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see \"[Managing code scanning alerts for your repository](/github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository).\"
        
        You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:
        
        ```
        gzip -c analysis-data.sarif | base64 -w0
        ```
        
        SARIF upload supports a maximum of 1000 results per analysis run. Any results over this limit are ignored. Typically, but not necessarily, a SARIF file contains a single run of a single tool. If a code scanning tool generates too many results, you should update the analysis configuration to run only the most important rules or queries.
        
        The `202 Accepted`, response includes an `id` value.
        You can use this ID to check the status of the upload by using this for the `/sarifs/{sarif_id}` endpoint.
        For more information, see \"[Get information about a SARIF upload](/rest/reference/code-scanning#get-information-about-a-sarif-upload).\"
        https://docs.github.com/enterprise-server@2.22/rest/reference/code-scanning#upload-a-sarif-file - API method documentation
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

    