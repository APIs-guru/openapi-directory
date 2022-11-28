import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Pulls:
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

    
    def pulls_check_if_merged(self, request: operations.PullsCheckIfMergedRequest) -> operations.PullsCheckIfMergedResponse:
        r"""Check if a pull request has been merged
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#check-if-a-pull-request-has-been-merged - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/merge", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsCheckIfMergedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def pulls_create(self, request: operations.PullsCreateRequest) -> operations.PullsCreateResponse:
        r"""Create a pull request
        Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud. You can create a new pull request. This endpoint triggers [notifications](https://docs.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequest])
                res.pull_request = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_create_reply_for_review_comment(self, request: operations.PullsCreateReplyForReviewCommentRequest) -> operations.PullsCreateReplyForReviewCommentResponse:
        r"""Create a reply for a review comment
        Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-reply-for-a-review-comment - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsCreateReplyForReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReviewComment])
                res.pull_request_review_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_create_review(self, request: operations.PullsCreateReviewRequest) -> operations.PullsCreateReviewResponse:
        r"""Create a review for a pull request
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        
        Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
        
        **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request) endpoint.
        
        The `position` value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsCreateReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def pulls_create_review_comment(self, request: operations.PullsCreateReviewCommentRequest) -> operations.PullsCreateReviewCommentResponse:
        r"""Create a review comment for a pull request
        
        Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see \"[Create an issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#create-an-issue-comment).\" We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
        
        You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).
        
        **Note:** The position value equals the number of lines down from the first \"@@\" hunk header in the file you want to add a comment. The line just below the \"@@\" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
        
        This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#create-a-review-comment-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsCreateReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReviewComment])
                res.pull_request_review_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_delete_pending_review(self, request: operations.PullsDeletePendingReviewRequest) -> operations.PullsDeletePendingReviewResponse:
        r"""Delete a pending review for a pull request
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-pending-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsDeletePendingReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def pulls_delete_review_comment(self, request: operations.PullsDeleteReviewCommentRequest) -> operations.PullsDeleteReviewCommentResponse:
        r"""Delete a review comment for a pull request
        Deletes a review comment.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#delete-a-review-comment-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsDeleteReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_dismiss_review(self, request: operations.PullsDismissReviewRequest) -> operations.PullsDismissReviewResponse:
        r"""Dismiss a review for a pull request
        **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#dismiss-a-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsDismissReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def pulls_get(self, request: operations.PullsGetRequest) -> operations.PullsGetResponse:
        r"""Get a pull request
        Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
        
        Lists details of a pull request by providing its number.
        
        When you get, [create](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see \"[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@2.21/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)\".
        
        The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
        
        The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
        
        *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
        *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
        *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
        
        Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.21/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequest])
                res.pull_request = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_get_review(self, request: operations.PullsGetReviewRequest) -> operations.PullsGetReviewResponse:
        r"""Get a review for a pull request
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsGetReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_get_review_comment(self, request: operations.PullsGetReviewCommentRequest) -> operations.PullsGetReviewCommentResponse:
        r"""Get a review comment for a pull request
        Provides details for a review comment.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#get-a-review-comment-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsGetReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReviewComment])
                res.pull_request_review_comment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_list(self, request: operations.PullsListRequest) -> operations.PullsListResponse:
        r"""List pull requests
        Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PullRequestSimple]])
                res.pull_request_simples = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_list_comments_for_review(self, request: operations.PullsListCommentsForReviewRequest) -> operations.PullsListCommentsForReviewResponse:
        r"""List comments for a pull request review
        List comments for a specific pull request review.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-comments-for-a-pull-request-review - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListCommentsForReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ReviewComment]])
                res.review_comments = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_list_commits(self, request: operations.PullsListCommitsRequest) -> operations.PullsListCommitsResponse:
        r"""List commits on a pull request
        Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#list-commits) endpoint.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-commits-on-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/commits", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Commit]])
                res.commits = out

        return res

    
    def pulls_list_files(self, request: operations.PullsListFilesRequest) -> operations.PullsListFilesResponse:
        r"""List pull requests files
        **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-pull-requests-files - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/files", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DiffEntry]])
                res.diff_entries = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def pulls_list_requested_reviewers(self, request: operations.PullsListRequestedReviewersRequest) -> operations.PullsListRequestedReviewersResponse:
        r"""List requested reviewers for a pull request
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-requested-reviewers-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListRequestedReviewersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReviewRequest])
                res.pull_request_review_request = out

        return res

    
    def pulls_list_review_comments(self, request: operations.PullsListReviewCommentsRequest) -> operations.PullsListReviewCommentsResponse:
        r"""List review comments on a pull request
        Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-on-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListReviewCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PullRequestReviewComment]])
                res.pull_request_review_comments = out

        return res

    
    def pulls_list_review_comments_for_repo(self, request: operations.PullsListReviewCommentsForRepoRequest) -> operations.PullsListReviewCommentsForRepoResponse:
        r"""List review comments in a repository
        Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-review-comments-in-a-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListReviewCommentsForRepoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PullRequestReviewComment]])
                res.pull_request_review_comments = out

        return res

    
    def pulls_list_reviews(self, request: operations.PullsListReviewsRequest) -> operations.PullsListReviewsResponse:
        r"""List reviews for a pull request
        The list of reviews returns in chronological order.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#list-reviews-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsListReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.PullRequestReview]])
                res.pull_request_reviews = out

        return res

    
    def pulls_merge(self, request: operations.PullsMergeRequest) -> operations.PullsMergeResponse:
        r"""Merge a pull request
        This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#merge-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/merge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsMergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestMergeResult])
                res.pull_request_merge_result = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullsMerge405ApplicationJSON])
                res.pulls_merge_405_application_json_object = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullsMerge409ApplicationJSON])
                res.pulls_merge_409_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_remove_requested_reviewers(self, request: operations.PullsRemoveRequestedReviewersRequest) -> operations.PullsRemoveRequestedReviewersResponse:
        r"""Remove requested reviewers from a pull request
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("DELETE", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsRemoveRequestedReviewersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestSimple])
                res.pull_request_simple = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_request_reviewers(self, request: operations.PullsRequestReviewersRequest) -> operations.PullsRequestReviewersResponse:
        r"""Request reviewers for a pull request
        This endpoint triggers [notifications](https://docs.github.com/enterprise-server@2.21/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See \"[Abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/overview/resources-in-the-rest-api#abuse-rate-limits)\" and \"[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.21/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)\" for details.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#request-reviewers-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsRequestReviewersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestSimple])
                res.pull_request_simple = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            pass

        return res

    
    def pulls_submit_review(self, request: operations.PullsSubmitReviewRequest) -> operations.PullsSubmitReviewResponse:
        r"""Submit a review for a pull request
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#submit-a-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsSubmitReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def pulls_update(self, request: operations.PullsUpdateRequest) -> operations.PullsUpdateResponse:
        r"""Update a pull request
        Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team, GitHub Enterprise Server 2.17+, and GitHub Enterprise Cloud.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls/#update-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequest])
                res.pull_request = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_update_branch(self, request: operations.PullsUpdateBranchRequest) -> operations.PullsUpdateBranchResponse:
        r"""Update a pull request branch
        Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-pull-request-branch - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsUpdateBranchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullsUpdateBranch202ApplicationJSON])
                res.pulls_update_branch_202_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 415:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PullsUpdateBranch415ApplicationJSON])
                res.pulls_update_branch_415_application_json_object = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def pulls_update_review(self, request: operations.PullsUpdateReviewRequest) -> operations.PullsUpdateReviewResponse:
        r"""Update a review for a pull request
        Update the review summary comment with new text.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsUpdateReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReview])
                res.pull_request_review = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationErrorSimple])
                res.validation_error_simple = out

        return res

    
    def pulls_update_review_comment(self, request: operations.PullsUpdateReviewCommentRequest) -> operations.PullsUpdateReviewCommentResponse:
        r"""Update a review comment for a pull request
        Enables you to edit a review comment.
        https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#update-a-review-comment-for-a-pull-request - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PullsUpdateReviewCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PullRequestReviewComment])
                res.pull_request_review_comment = out

        return res

    