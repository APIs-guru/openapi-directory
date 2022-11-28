import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Issues:
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

    
    def issues_add_assignees(self, request: operations.IssuesAddAssigneesRequest) -> operations.IssuesAddAssigneesResponse:
        r"""Add assignees to an issue
        Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#add-assignees-to-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/assignees", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesAddAssigneesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueSimple])
                res.issue_simple = out

        return res

    
    def issues_add_labels(self, request: operations.IssuesAddLabelsRequest) -> operations.IssuesAddLabelsResponse:
        r"""Add labels to an issue
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#add-labels-to-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesAddLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_check_user_can_be_assigned(self, request: operations.IssuesCheckUserCanBeAssignedRequest) -> operations.IssuesCheckUserCanBeAssignedResponse:
        r"""Check if a user can be assigned
        Checks if a user has permission to be assigned to an issue in this repository.
        
        If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
        
        Otherwise a `404` status code is returned.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#check-if-a-user-can-be-assigned - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/assignees/{assignee}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesCheckUserCanBeAssignedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_create(self, request: operations.IssuesCreateRequest) -> operations.IssuesCreateResponse:
        r"""Create an issue
        Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#create-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issue])
                res.issue = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IssuesCreate503ApplicationJSON])
                res.issues_create_503_application_json_object = out

        return res

    
    def issues_create_comment(self, request: operations.IssuesCreateCommentRequest) -> operations.IssuesCreateCommentResponse:
        r"""Create an issue comment
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.18/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#create-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesCreateCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueComment])
                res.issue_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_create_label(self, request: operations.IssuesCreateLabelRequest) -> operations.IssuesCreateLabelResponse:
        r"""Create a label
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#create-a-label - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesCreateLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_create_milestone(self, request: operations.IssuesCreateMilestoneRequest) -> operations.IssuesCreateMilestoneResponse:
        r"""Create a milestone
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#create-a-milestone - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesCreateMilestoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Milestone])
                res.milestone = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_delete_comment(self, request: operations.IssuesDeleteCommentRequest) -> operations.IssuesDeleteCommentResponse:
        r"""Delete an issue comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#delete-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def issues_delete_label(self, request: operations.IssuesDeleteLabelRequest) -> operations.IssuesDeleteLabelResponse:
        r"""Delete a label
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#delete-a-label - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/labels/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesDeleteLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def issues_delete_milestone(self, request: operations.IssuesDeleteMilestoneRequest) -> operations.IssuesDeleteMilestoneResponse:
        r"""Delete a milestone
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#delete-a-milestone - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones/{milestone_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesDeleteMilestoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_get(self, request: operations.IssuesGetRequest) -> operations.IssuesGetResponse:
        r"""Get an issue
        The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
        [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
        the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
        returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
        access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
        to the [`issues`](https://docs.github.com/enterprise-server@2.18/webhooks/event-payloads/#issues) webhook.
        
        **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
        reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by
        the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull
        request id, use the \"[List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests)\" endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#get-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issue])
                res.issue = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_get_comment(self, request: operations.IssuesGetCommentRequest) -> operations.IssuesGetCommentResponse:
        r"""Get an issue comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#get-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesGetCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueComment])
                res.issue_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_get_event(self, request: operations.IssuesGetEventRequest) -> operations.IssuesGetEventResponse:
        r"""Get an issue event
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#get-an-issue-event - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/events/{event_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesGetEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueEvent])
                res.issue_event = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_get_label(self, request: operations.IssuesGetLabelRequest) -> operations.IssuesGetLabelResponse:
        r"""Get a label
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#get-a-label - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/labels/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesGetLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_get_milestone(self, request: operations.IssuesGetMilestoneRequest) -> operations.IssuesGetMilestoneResponse:
        r"""Get a milestone
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#get-a-milestone - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones/{milestone_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesGetMilestoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Milestone])
                res.milestone = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list(self, request: operations.IssuesListRequest) -> operations.IssuesListResponse:
        r"""List issues assigned to the authenticated user
        List issues assigned to the authenticated user across all visible repositories including owned repositories, member
        repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
        necessarily assigned to you.
        
        
        **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
        reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by
        the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull
        request id, use the \"[List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests)\" endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-issues-assigned-to-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/issues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Issue]])
                res.issues = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_list_assignees(self, request: operations.IssuesListAssigneesRequest) -> operations.IssuesListAssigneesResponse:
        r"""List assignees
        Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-assignees - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/assignees", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListAssigneesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.SimpleUser]])
                res.simple_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_comments(self, request: operations.IssuesListCommentsRequest) -> operations.IssuesListCommentsResponse:
        r"""List issue comments
        Issue Comments are ordered by ascending ID.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-issue-comments - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueComment]])
                res.issue_comments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_comments_for_repo(self, request: operations.IssuesListCommentsForRepoRequest) -> operations.IssuesListCommentsForRepoResponse:
        r"""List issue comments for a repository
        By default, Issue Comments are ordered by ascending ID.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-issue-comments-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListCommentsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueComment]])
                res.issue_comments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_list_events(self, request: operations.IssuesListEventsRequest) -> operations.IssuesListEventsResponse:
        r"""List issue events
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-issue-events - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueEventForIssue]])
                res.issue_event_for_issues = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_events_for_repo(self, request: operations.IssuesListEventsForRepoRequest) -> operations.IssuesListEventsForRepoResponse:
        r"""List issue events for a repository
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-issue-events-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListEventsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueEvent]])
                res.issue_events = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_list_events_for_timeline(self, request: operations.IssuesListEventsForTimelineRequest) -> operations.IssuesListEventsForTimelineResponse:
        r"""List timeline events for an issue
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-timeline-events-for-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/timeline", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListEventsForTimelineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueEventForIssue]])
                res.issue_event_for_issues = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IssuesListEventsForTimeline415ApplicationJSON])
                res.issues_list_events_for_timeline_415_application_json_object = out

        return res

    
    def issues_list_for_authenticated_user(self, request: operations.IssuesListForAuthenticatedUserRequest) -> operations.IssuesListForAuthenticatedUserResponse:
        r"""List user account issues assigned to the authenticated user
        List issues across owned and member repositories assigned to the authenticated user.
        
        **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
        reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by
        the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull
        request id, use the \"[List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests)\" endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/issues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Issue]])
                res.issues = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_for_org(self, request: operations.IssuesListForOrgRequest) -> operations.IssuesListForOrgResponse:
        r"""List organization issues assigned to the authenticated user
        List issues in an organization assigned to the authenticated user.
        
        **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
        reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by
        the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull
        request id, use the \"[List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests)\" endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/issues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Issue]])
                res.issues = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_for_repo(self, request: operations.IssuesListForRepoRequest) -> operations.IssuesListForRepoResponse:
        r"""List repository issues
        List issues in a repository.
        
        **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
        reason, \"Issues\" endpoints may return both issues and pull requests in the response. You can identify pull requests by
        the `pull_request` key. Be aware that the `id` of a pull request returned from \"Issues\" endpoints will be an _issue id_. To find out the pull
        request id, use the \"[List pull requests](https://docs.github.com/enterprise-server@2.18/rest/reference/pulls#list-pull-requests)\" endpoint.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-repository-issues - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.IssueSimple]])
                res.issue_simples = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_list_labels_for_milestone(self, request: operations.IssuesListLabelsForMilestoneRequest) -> operations.IssuesListLabelsForMilestoneResponse:
        r"""List labels for issues in a milestone
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-labels-for-issues-in-a-milestone - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones/{milestone_number}/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListLabelsForMilestoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out

        return res

    
    def issues_list_labels_for_repo(self, request: operations.IssuesListLabelsForRepoRequest) -> operations.IssuesListLabelsForRepoResponse:
        r"""List labels for a repository
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-labels-for-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListLabelsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_labels_on_issue(self, request: operations.IssuesListLabelsOnIssueRequest) -> operations.IssuesListLabelsOnIssueResponse:
        r"""List labels for an issue
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-labels-for-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListLabelsOnIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_list_milestones(self, request: operations.IssuesListMilestonesRequest) -> operations.IssuesListMilestonesResponse:
        r"""List milestones
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#list-milestones - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesListMilestonesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Milestone]])
                res.milestones = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_lock(self, request: operations.IssuesLockRequest) -> operations.IssuesLockResponse:
        r"""Lock an issue
        Users with push access can lock an issue or pull request's conversation.
        
        Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see \"[HTTP verbs](https://docs.github.com/enterprise-server@2.18/rest/overview/resources-in-the-rest-api#http-verbs).\"
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#lock-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/lock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesLockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_remove_all_labels(self, request: operations.IssuesRemoveAllLabelsRequest) -> operations.IssuesRemoveAllLabelsResponse:
        r"""Remove all labels from an issue
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#remove-all-labels-from-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/labels", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesRemoveAllLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_remove_assignees(self, request: operations.IssuesRemoveAssigneesRequest) -> operations.IssuesRemoveAssigneesResponse:
        r"""Remove assignees from an issue
        Removes one or more assignees from an issue.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#remove-assignees-from-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/assignees", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesRemoveAssigneesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueSimple])
                res.issue_simple = out

        return res

    
    def issues_remove_label(self, request: operations.IssuesRemoveLabelRequest) -> operations.IssuesRemoveLabelResponse:
        r"""Remove a label from an issue
        Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#remove-a-label-from-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesRemoveLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_set_labels(self, request: operations.IssuesSetLabelsRequest) -> operations.IssuesSetLabelsResponse:
        r"""Set labels for an issue
        Removes any previous labels and sets the new labels for an issue.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#set-labels-for-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesSetLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Label]])
                res.labels = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_unlock(self, request: operations.IssuesUnlockRequest) -> operations.IssuesUnlockResponse:
        r"""Unlock an issue
        Users with push access can unlock an issue's conversation.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#unlock-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/lock", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesUnlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def issues_update(self, request: operations.IssuesUpdateRequest) -> operations.IssuesUpdateResponse:
        r"""Update an issue
        Issue owners and users with push access can edit an issue.
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues/#update-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issue])
                res.issue = out
        elif r.status_code == 301:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.IssuesUpdate503ApplicationJSON])
                res.issues_update_503_application_json_object = out

        return res

    
    def issues_update_comment(self, request: operations.IssuesUpdateCommentRequest) -> operations.IssuesUpdateCommentResponse:
        r"""Update an issue comment
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#update-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesUpdateCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssueComment])
                res.issue_comment = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def issues_update_milestone(self, request: operations.IssuesUpdateMilestoneRequest) -> operations.IssuesUpdateMilestoneResponse:
        r"""Update a milestone
        https://docs.github.com/enterprise-server@2.18/rest/reference/issues#update-a-milestone - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/milestones/{milestone_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IssuesUpdateMilestoneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Milestone])
                res.milestone = out

        return res

    