import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Reactions {
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
   * reactionsCreateForCommitComment - Create reaction for a commit comment
   *
   * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
  **/
  reactionsCreateForCommitComment(
    req: operations.ReactionsCreateForCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsCreateForCommitComment415ApplicationJsonObject = httpRes?.data;
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
   * reactionsCreateForIssue - Create reaction for an issue
   *
   * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.20/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
  **/
  reactionsCreateForIssue(
    req: operations.ReactionsCreateForIssueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForIssueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForIssueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForIssueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsCreateForIssue415ApplicationJsonObject = httpRes?.data;
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
   * reactionsCreateForIssueComment - Create reaction for an issue comment
   *
   * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.20/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
  **/
  reactionsCreateForIssueComment(
    req: operations.ReactionsCreateForIssueCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForIssueCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForIssueCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForIssueCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsCreateForIssueComment415ApplicationJsonObject = httpRes?.data;
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
   * reactionsCreateForPullRequestReviewComment - Create reaction for a pull request review comment
   *
   * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
  **/
  reactionsCreateForPullRequestReviewComment(
    req: operations.ReactionsCreateForPullRequestReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForPullRequestReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForPullRequestReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForPullRequestReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsCreateForPullRequestReviewComment415ApplicationJsonObject = httpRes?.data;
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
   * reactionsCreateForTeamDiscussion - Create reaction for a team discussion
   *
   * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#create-reaction-for-a-team-discussion - API method documentation
  **/
  reactionsCreateForTeamDiscussion(
    req: operations.ReactionsCreateForTeamDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ReactionsCreateForTeamDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsCreateForTeamDiscussionComment - Create reaction for a team discussion comment
   *
   * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment - API method documentation
  **/
  reactionsCreateForTeamDiscussionComment(
    req: operations.ReactionsCreateForTeamDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
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
        const res: operations.ReactionsCreateForTeamDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reaction = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDelete - Delete a reaction
   *
   * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#delete-a-reaction-legacy - API method documentation
  **/
  reactionsDelete(
    req: operations.ReactionsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForCommitComment - List reactions for a commit comment
   *
   * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#comments).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
  **/
  reactionsListForCommitComment(
    req: operations.ReactionsListForCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsListForCommitComment415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForIssue - List reactions for an issue
   *
   * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.20/rest/reference/issues).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
  **/
  reactionsListForIssue(
    req: operations.ReactionsListForIssueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForIssueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForIssueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForIssueResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 410:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsListForIssue415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForIssueComment - List reactions for an issue comment
   *
   * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.20/rest/reference/issues#comments).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
  **/
  reactionsListForIssueComment(
    req: operations.ReactionsListForIssueCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForIssueCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForIssueCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForIssueCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsListForIssueComment415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForPullRequestReviewComment - List reactions for a pull request review comment
   *
   * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#review-comments).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
  **/
  reactionsListForPullRequestReviewComment(
    req: operations.ReactionsListForPullRequestReviewCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForPullRequestReviewCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForPullRequestReviewCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForPullRequestReviewCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactionsListForPullRequestReviewComment415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForTeamDiscussion - List reactions for a team discussion
   *
   * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#list-reactions-for-a-team-discussion - API method documentation
  **/
  reactionsListForTeamDiscussion(
    req: operations.ReactionsListForTeamDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsListForTeamDiscussionResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForTeamDiscussionComment - List reactions for a team discussion comment
   *
   * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.20/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment - API method documentation
  **/
  reactionsListForTeamDiscussionComment(
    req: operations.ReactionsListForTeamDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsListForTeamDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reactions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
