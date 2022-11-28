import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Checks:
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

    
    def checks_create(self, request: operations.ChecksCreateRequest) -> operations.ChecksCreateResponse:
        r"""Create a check run
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
        
        Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
        
        In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#create-a-check-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-runs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckRun])
                res.check_run = out

        return res

    
    def checks_create_suite(self, request: operations.ChecksCreateSuiteRequest) -> operations.ChecksCreateSuiteResponse:
        r"""Create a check suite
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
        
        By default, check suites are automatically created when you create a [check run](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using \"[Update repository preferences for check suites](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#update-repository-preferences-for-check-suites)\". Your GitHub App must have the `checks:write` permission to create check suites.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#create-a-check-suite - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-suites", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksCreateSuiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckSuite])
                res.check_suite = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckSuite])
                res.check_suite = out

        return res

    
    def checks_get(self, request: operations.ChecksGetRequest) -> operations.ChecksGetResponse:
        r"""Get a check run
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
        
        Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#get-a-check-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-runs/{check_run_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckRun])
                res.check_run = out

        return res

    
    def checks_get_suite(self, request: operations.ChecksGetSuiteRequest) -> operations.ChecksGetSuiteResponse:
        r"""Get a check suite
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
        
        Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#get-a-check-suite - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-suites/{check_suite_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksGetSuiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckSuite])
                res.check_suite = out

        return res

    
    def checks_list_annotations(self, request: operations.ChecksListAnnotationsRequest) -> operations.ChecksListAnnotationsResponse:
        r"""List check run annotations
        Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#list-check-run-annotations - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksListAnnotationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.CheckAnnotation]])
                res.check_annotations = out

        return res

    
    def checks_list_for_ref(self, request: operations.ChecksListForRefRequest) -> operations.ChecksListForRefResponse:
        r"""List check runs for a Git reference
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
        
        Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#list-check-runs-for-a-git-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{ref}/check-runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksListForRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ChecksListForRef200ApplicationJSON])
                res.checks_list_for_ref_200_application_json_object = out

        return res

    
    def checks_list_for_suite(self, request: operations.ChecksListForSuiteRequest) -> operations.ChecksListForSuiteResponse:
        r"""List check runs in a check suite
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
        
        Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#list-check-runs-in-a-check-suite - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksListForSuiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ChecksListForSuite200ApplicationJSON])
                res.checks_list_for_suite_200_application_json_object = out

        return res

    
    def checks_list_suites_for_ref(self, request: operations.ChecksListSuitesForRefRequest) -> operations.ChecksListSuitesForRefResponse:
        r"""List check suites for a Git reference
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
        
        Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#list-check-suites-for-a-git-reference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/commits/{ref}/check-suites", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksListSuitesForRefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ChecksListSuitesForRef200ApplicationJSON])
                res.checks_list_suites_for_ref_200_application_json_object = out

        return res

    
    def checks_rerequest_suite(self, request: operations.ChecksRerequestSuiteRequest) -> operations.ChecksRerequestSuiteResponse:
        r"""Rerequest a check suite
        Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
        
        To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#rerequest-a-check-suite - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksRerequestSuiteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.checks_rerequest_suite_201_application_json_object = out

        return res

    
    def checks_set_suites_preferences(self, request: operations.ChecksSetSuitesPreferencesRequest) -> operations.ChecksSetSuitesPreferencesResponse:
        r"""Update repository preferences for check suites
        Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/enterprise-server@3.0/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#update-repository-preferences-for-check-suites - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-suites/preferences", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksSetSuitesPreferencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckSuitePreference])
                res.check_suite_preference = out

        return res

    
    def checks_update(self, request: operations.ChecksUpdateRequest) -> operations.ChecksUpdateResponse:
        r"""Update a check run
        **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
        
        Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
        https://docs.github.com/enterprise-server@3.0/rest/reference/checks#update-a-check-run - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/check-runs/{check_run_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChecksUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckRun])
                res.check_run = out

        return res

    