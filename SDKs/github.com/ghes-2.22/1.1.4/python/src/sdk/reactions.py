import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Reactions:
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

    
    def reactions_create_for_commit_comment(self, request: operations.ReactionsCreateForCommitCommentRequest) -> operations.ReactionsCreateForCommitCommentResponse:
        r"""Create reaction for a commit comment
        Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsCreateForCommitComment415ApplicationJSON])
                res.reactions_create_for_commit_comment_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def reactions_create_for_issue(self, request: operations.ReactionsCreateForIssueRequest) -> operations.ReactionsCreateForIssueResponse:
        r"""Create reaction for an issue
        Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsCreateForIssue415ApplicationJSON])
                res.reactions_create_for_issue_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def reactions_create_for_issue_comment(self, request: operations.ReactionsCreateForIssueCommentRequest) -> operations.ReactionsCreateForIssueCommentResponse:
        r"""Create reaction for an issue comment
        Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForIssueCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsCreateForIssueComment415ApplicationJSON])
                res.reactions_create_for_issue_comment_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def reactions_create_for_pull_request_review_comment(self, request: operations.ReactionsCreateForPullRequestReviewCommentRequest) -> operations.ReactionsCreateForPullRequestReviewCommentResponse:
        r"""Create reaction for a pull request review comment
        Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForPullRequestReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsCreateForPullRequestReviewComment415ApplicationJSON])
                res.reactions_create_for_pull_request_review_comment_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def reactions_create_for_team_discussion_comment_in_org(self, request: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest) -> operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse:
        r"""Create reaction for a team discussion comment
        Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out

        return res

    
    def reactions_create_for_team_discussion_comment_legacy(self, request: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest) -> operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse:
        r"""Create reaction for a team discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new \"[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)\" endpoint.
        
        Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out

        return res

    
    def reactions_create_for_team_discussion_in_org(self, request: operations.ReactionsCreateForTeamDiscussionInOrgRequest) -> operations.ReactionsCreateForTeamDiscussionInOrgResponse:
        r"""Create reaction for a team discussion
        Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForTeamDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out

        return res

    
    def reactions_create_for_team_discussion_legacy(self, request: operations.ReactionsCreateForTeamDiscussionLegacyRequest) -> operations.ReactionsCreateForTeamDiscussionLegacyResponse:
        r"""Create reaction for a team discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
        
        Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/reactions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsCreateForTeamDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reaction])
                res.reaction = out

        return res

    
    def reactions_delete_for_commit_comment(self, request: operations.ReactionsDeleteForCommitCommentRequest) -> operations.ReactionsDeleteForCommitCommentResponse:
        r"""Delete a commit comment reaction
        **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
        
        Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-commit-comment-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_for_issue(self, request: operations.ReactionsDeleteForIssueRequest) -> operations.ReactionsDeleteForIssueResponse:
        r"""Delete an issue reaction
        **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
        
        Delete a reaction to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues/).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_for_issue_comment(self, request: operations.ReactionsDeleteForIssueCommentRequest) -> operations.ReactionsDeleteForIssueCommentResponse:
        r"""Delete an issue comment reaction
        **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
        
        Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-an-issue-comment-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForIssueCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_for_pull_request_comment(self, request: operations.ReactionsDeleteForPullRequestCommentRequest) -> operations.ReactionsDeleteForPullRequestCommentResponse:
        r"""Delete a pull request comment reaction
        **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
        
        Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-a-pull-request-comment-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForPullRequestCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_for_team_discussion(self, request: operations.ReactionsDeleteForTeamDiscussionRequest) -> operations.ReactionsDeleteForTeamDiscussionResponse:
        r"""Delete team discussion reaction
        **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
        
        Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForTeamDiscussionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_for_team_discussion_comment(self, request: operations.ReactionsDeleteForTeamDiscussionCommentRequest) -> operations.ReactionsDeleteForTeamDiscussionCommentResponse:
        r"""Delete team discussion comment reaction
        **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
        
        Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#delete-team-discussion-comment-reaction - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteForTeamDiscussionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def reactions_delete_legacy(self, request: operations.ReactionsDeleteLegacyRequest) -> operations.ReactionsDeleteLegacyResponse:
        r"""Delete a reaction (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
        
        OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#delete-a-reaction-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/reactions/{reaction_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsDeleteLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsDeleteLegacy415ApplicationJSON])
                res.reactions_delete_legacy_415_application_json_object = out

        return res

    
    def reactions_list_for_commit_comment(self, request: operations.ReactionsListForCommitCommentRequest) -> operations.ReactionsListForCommitCommentResponse:
        r"""List reactions for a commit comment
        List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.22/rest/reference/repos#comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForCommitCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsListForCommitComment415ApplicationJSON])
                res.reactions_list_for_commit_comment_415_application_json_object = out

        return res

    
    def reactions_list_for_issue(self, request: operations.ReactionsListForIssueRequest) -> operations.ReactionsListForIssueResponse:
        r"""List reactions for an issue
        List the reactions to an [issue](https://docs.github.com/enterprise-server@2.22/rest/reference/issues).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out
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
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsListForIssue415ApplicationJSON])
                res.reactions_list_for_issue_415_application_json_object = out

        return res

    
    def reactions_list_for_issue_comment(self, request: operations.ReactionsListForIssueCommentRequest) -> operations.ReactionsListForIssueCommentResponse:
        r"""List reactions for an issue comment
        List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.22/rest/reference/issues#comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForIssueCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsListForIssueComment415ApplicationJSON])
                res.reactions_list_for_issue_comment_415_application_json_object = out

        return res

    
    def reactions_list_for_pull_request_review_comment(self, request: operations.ReactionsListForPullRequestReviewCommentRequest) -> operations.ReactionsListForPullRequestReviewCommentResponse:
        r"""List reactions for a pull request review comment
        List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.22/rest/reference/pulls#review-comments).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForPullRequestReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReactionsListForPullRequestReviewComment415ApplicationJSON])
                res.reactions_list_for_pull_request_review_comment_415_application_json_object = out

        return res

    
    def reactions_list_for_team_discussion_comment_in_org(self, request: operations.ReactionsListForTeamDiscussionCommentInOrgRequest) -> operations.ReactionsListForTeamDiscussionCommentInOrgResponse:
        r"""List reactions for a team discussion comment
        List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForTeamDiscussionCommentInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out

        return res

    
    def reactions_list_for_team_discussion_comment_legacy(self, request: operations.ReactionsListForTeamDiscussionCommentLegacyRequest) -> operations.ReactionsListForTeamDiscussionCommentLegacyResponse:
        r"""List reactions for a team discussion comment (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
        
        List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForTeamDiscussionCommentLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out

        return res

    
    def reactions_list_for_team_discussion_in_org(self, request: operations.ReactionsListForTeamDiscussionInOrgRequest) -> operations.ReactionsListForTeamDiscussionInOrgResponse:
        r"""List reactions for a team discussion
        List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        
        **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForTeamDiscussionInOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out

        return res

    
    def reactions_list_for_team_discussion_legacy(self, request: operations.ReactionsListForTeamDiscussionLegacyRequest) -> operations.ReactionsListForTeamDiscussionLegacyResponse:
        r"""List reactions for a team discussion (Legacy)
        **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
        
        List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
        https://docs.github.com/enterprise-server@2.22/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{team_id}/discussions/{discussion_number}/reactions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReactionsListForTeamDiscussionLegacyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Reaction]])
                res.reactions = out

        return res

    