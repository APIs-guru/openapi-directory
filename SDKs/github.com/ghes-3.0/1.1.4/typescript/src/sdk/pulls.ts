import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Pulls {
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
   * pullsCheckIfMerged - Check if a pull request has been merged
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#check-if-a-pull-request-has-been-merged - API method documentation
  **/
  pullsCheckIfMerged(
    req: operations.PullsCheckIfMergedRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsCheckIfMergedResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsCheckIfMergedRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/merge", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsCheckIfMergedResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsCreate - Create a pull request
   *
   * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
   * 
   * You can create a new pull request.
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-pull-request - API method documentation
  **/
  pullsCreate(
    req: operations.PullsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls", req.pathParams);

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
        const res: operations.PullsCreateResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsCreateReplyForReviewComment - Create a reply for a review comment
   *
   * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-reply-for-a-review-comment - API method documentation
  **/
  pullsCreateReplyForReviewComment(
    req: operations.PullsCreateReplyForReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsCreateReplyForReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsCreateReplyForReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies", req.pathParams);

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
        const res: operations.PullsCreateReplyForReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComment = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsCreateReview - Create a review for a pull request
   *
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   * 
   * Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.
   * 
   * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request) endpoint.
   * 
   * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-for-a-pull-request - API method documentation
  **/
  pullsCreateReview(
    req: operations.PullsCreateReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsCreateReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsCreateReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", req.pathParams);

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
        const res: operations.PullsCreateReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsCreateReviewComment - Create a review comment for a pull request
   *
   * 
   * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
   * 
   * You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see the [`comfort-fade` preview notice](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-comment-for-a-pull-request-preview-notices).
   * 
   * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#create-a-review-comment-for-a-pull-request - API method documentation
  **/
  pullsCreateReviewComment(
    req: operations.PullsCreateReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsCreateReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsCreateReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/comments", req.pathParams);

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
        const res: operations.PullsCreateReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComment = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsDeletePendingReview - Delete a pending review for a pull request
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#delete-a-pending-review-for-a-pull-request - API method documentation
  **/
  pullsDeletePendingReview(
    req: operations.PullsDeletePendingReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsDeletePendingReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsDeletePendingReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsDeletePendingReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsDeleteReviewComment - Delete a review comment for a pull request
   *
   * Deletes a review comment.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#delete-a-review-comment-for-a-pull-request - API method documentation
  **/
  pullsDeleteReviewComment(
    req: operations.PullsDeleteReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsDeleteReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsDeleteReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsDeleteReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsDismissReview - Dismiss a review for a pull request
   *
   * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#dismiss-a-review-for-a-pull-request - API method documentation
  **/
  pullsDismissReview(
    req: operations.PullsDismissReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsDismissReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsDismissReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsDismissReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsGet - Get a pull request
   *
   * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Lists details of a pull request by providing its number.
   * 
   * When you get, [create](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-pull-request) a pull request, GitHub Enterprise Server creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/enterprise-server@3.0/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
   * 
   * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub Enterprise Server has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
   * 
   * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
   * 
   * *   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
   * *   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
   * *   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
   * 
   * Pass the appropriate [media type](https://docs.github.com/enterprise-server@3.0/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-pull-request - API method documentation
  **/
  pullsGet(
    req: operations.PullsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsGetReview - Get a review for a pull request
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-review-for-a-pull-request - API method documentation
  **/
  pullsGetReview(
    req: operations.PullsGetReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsGetReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsGetReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsGetReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsGetReviewComment - Get a review comment for a pull request
   *
   * Provides details for a review comment.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#get-a-review-comment-for-a-pull-request - API method documentation
  **/
  pullsGetReviewComment(
    req: operations.PullsGetReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsGetReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsGetReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsGetReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComment = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsList - List pull requests
   *
   * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests - API method documentation
  **/
  pullsList(
    req: operations.PullsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls", req.pathParams);
    
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
        const res: operations.PullsListResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListCommentsForReview - List comments for a pull request review
   *
   * List comments for a specific pull request review.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-comments-for-a-pull-request-review - API method documentation
  **/
  pullsListCommentsForReview(
    req: operations.PullsListCommentsForReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListCommentsForReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListCommentsForReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", req.pathParams);
    
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
        const res: operations.PullsListCommentsForReviewResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reviewComments = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListCommits - List commits on a pull request
   *
   * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/enterprise-server@3.0/rest/reference/repos#list-commits) endpoint.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-commits-on-a-pull-request - API method documentation
  **/
  pullsListCommits(
    req: operations.PullsListCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/commits", req.pathParams);
    
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
        const res: operations.PullsListCommitsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commits = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListFiles - List pull requests files
   *
   * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests-files - API method documentation
  **/
  pullsListFiles(
    req: operations.PullsListFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListFilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/files", req.pathParams);
    
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
        const res: operations.PullsListFilesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.diffEntries = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListRequestedReviewers - List requested reviewers for a pull request
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-requested-reviewers-for-a-pull-request - API method documentation
  **/
  pullsListRequestedReviewers(
    req: operations.PullsListRequestedReviewersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListRequestedReviewersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListRequestedReviewersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", req.pathParams);
    
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
        const res: operations.PullsListRequestedReviewersResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewRequest = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListReviewComments - List review comments on a pull request
   *
   * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-review-comments-on-a-pull-request - API method documentation
  **/
  pullsListReviewComments(
    req: operations.PullsListReviewCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListReviewCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListReviewCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/comments", req.pathParams);
    
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
        const res: operations.PullsListReviewCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListReviewCommentsForRepo - List review comments in a repository
   *
   * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-review-comments-in-a-repository - API method documentation
  **/
  pullsListReviewCommentsForRepo(
    req: operations.PullsListReviewCommentsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListReviewCommentsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListReviewCommentsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments", req.pathParams);
    
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
        const res: operations.PullsListReviewCommentsForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsListReviews - List reviews for a pull request
   *
   * The list of reviews returns in chronological order.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-reviews-for-a-pull-request - API method documentation
  **/
  pullsListReviews(
    req: operations.PullsListReviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsListReviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsListReviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews", req.pathParams);
    
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
        const res: operations.PullsListReviewsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviews = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsMerge - Merge a pull request
   *
   * This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#merge-a-pull-request - API method documentation
  **/
  pullsMerge(
    req: operations.PullsMergeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsMergeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsMergeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/merge", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsMergeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestMergeResult = httpRes?.data;
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
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullsMerge405ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullsMerge409ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsRemoveRequestedReviewers - Remove requested reviewers from a pull request
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request - API method documentation
  **/
  pullsRemoveRequestedReviewers(
    req: operations.PullsRemoveRequestedReviewersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsRemoveRequestedReviewersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsRemoveRequestedReviewersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", req.pathParams);

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
        method: "delete",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsRemoveRequestedReviewersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestSimple = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsRequestReviewers - Request reviewers for a pull request
   *
   * This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#request-reviewers-for-a-pull-request - API method documentation
  **/
  pullsRequestReviewers(
    req: operations.PullsRequestReviewersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsRequestReviewersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsRequestReviewersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", req.pathParams);

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
        const res: operations.PullsRequestReviewersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestSimple = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsSubmitReview - Submit a review for a pull request
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#submit-a-review-for-a-pull-request - API method documentation
  **/
  pullsSubmitReview(
    req: operations.PullsSubmitReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsSubmitReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsSubmitReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events", req.pathParams);

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
        const res: operations.PullsSubmitReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
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
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsUpdate - Update a pull request
   *
   * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls/#update-a-pull-request - API method documentation
  **/
  pullsUpdate(
    req: operations.PullsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}", req.pathParams);

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
        const res: operations.PullsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequest = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsUpdateBranch - Update a pull request branch
   *
   * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-pull-request-branch - API method documentation
  **/
  pullsUpdateBranch(
    req: operations.PullsUpdateBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsUpdateBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsUpdateBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsUpdateBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullsUpdateBranch202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullsUpdateBranch415ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsUpdateReview - Update a review for a pull request
   *
   * Update the review summary comment with new text.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-review-for-a-pull-request - API method documentation
  **/
  pullsUpdateReview(
    req: operations.PullsUpdateReviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsUpdateReviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsUpdateReviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PullsUpdateReviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReview = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationErrorSimple = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * pullsUpdateReviewComment - Update a review comment for a pull request
   *
   * Enables you to edit a review comment.
   *
   * https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#update-a-review-comment-for-a-pull-request - API method documentation
  **/
  pullsUpdateReviewComment(
    req: operations.PullsUpdateReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PullsUpdateReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PullsUpdateReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}", req.pathParams);

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
        const res: operations.PullsUpdateReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestReviewComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
