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
   * Create a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-commit-comment - API method documentation
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
   * Create a reaction to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-an-issue - API method documentation
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
   * Create a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-an-issue-comment - API method documentation
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
   * Create a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment - API method documentation
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
   * reactionsCreateForTeamDiscussionCommentInOrg - Create reaction for a team discussion comment
   *
   * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-team-discussion-comment - API method documentation
  **/
  reactionsCreateForTeamDiscussionCommentInOrg(
    req: operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForTeamDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsCreateForTeamDiscussionCommentLegacy - Create reaction for a team discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
   * 
   * Create a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy - API method documentation
  **/
  reactionsCreateForTeamDiscussionCommentLegacy(
    req: operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionCommentLegacyRequest(req);
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
        const res: operations.ReactionsCreateForTeamDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reactionsCreateForTeamDiscussionInOrg - Create reaction for a team discussion
   *
   * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-team-discussion - API method documentation
  **/
  reactionsCreateForTeamDiscussionInOrg(
    req: operations.ReactionsCreateForTeamDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", req.pathParams);

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
        const res: operations.ReactionsCreateForTeamDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsCreateForTeamDiscussionLegacy - Create reaction for a team discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
   * 
   * Create a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy - API method documentation
  **/
  reactionsCreateForTeamDiscussionLegacy(
    req: operations.ReactionsCreateForTeamDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsCreateForTeamDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsCreateForTeamDiscussionLegacyRequest(req);
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
        const res: operations.ReactionsCreateForTeamDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reactionsDeleteForCommitComment - Delete a commit comment reaction
   *
   * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
   * 
   * Delete a reaction to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-a-commit-comment-reaction - API method documentation
  **/
  reactionsDeleteForCommitComment(
    req: operations.ReactionsDeleteForCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteForIssue - Delete an issue reaction
   *
   * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
   * 
   * Delete a reaction to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues/).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-an-issue-reaction - API method documentation
  **/
  reactionsDeleteForIssue(
    req: operations.ReactionsDeleteForIssueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForIssueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForIssueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForIssueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteForIssueComment - Delete an issue comment reaction
   *
   * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
   * 
   * Delete a reaction to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-an-issue-comment-reaction - API method documentation
  **/
  reactionsDeleteForIssueComment(
    req: operations.ReactionsDeleteForIssueCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForIssueCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForIssueCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForIssueCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteForPullRequestComment - Delete a pull request comment reaction
   *
   * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
   * 
   * Delete a reaction to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#review-comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-a-pull-request-comment-reaction - API method documentation
  **/
  reactionsDeleteForPullRequestComment(
    req: operations.ReactionsDeleteForPullRequestCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForPullRequestCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForPullRequestCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForPullRequestCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteForTeamDiscussion - Delete team discussion reaction
   *
   * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
   * 
   * Delete a reaction to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-team-discussion-reaction - API method documentation
  **/
  reactionsDeleteForTeamDiscussion(
    req: operations.ReactionsDeleteForTeamDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForTeamDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForTeamDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForTeamDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteForTeamDiscussionComment - Delete team discussion comment reaction
   *
   * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
   * 
   * Delete a reaction to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#delete-team-discussion-comment-reaction - API method documentation
  **/
  reactionsDeleteForTeamDiscussionComment(
    req: operations.ReactionsDeleteForTeamDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteForTeamDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteForTeamDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteForTeamDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsDeleteLegacy - Delete a reaction (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).
   * 
   * OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions) or [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#delete-a-reaction-legacy - API method documentation
  **/
  reactionsDeleteLegacy(
    req: operations.ReactionsDeleteLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsDeleteLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsDeleteLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/reactions/{reaction_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReactionsDeleteLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
                res.reactionsDeleteLegacy415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reactionsListForCommitComment - List reactions for a commit comment
   *
   * List the reactions to a [commit comment](https://docs.github.com/enterprise-server@2.21/rest/reference/repos#comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-commit-comment - API method documentation
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
   * List the reactions to an [issue](https://docs.github.com/enterprise-server@2.21/rest/reference/issues).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-an-issue - API method documentation
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
   * List the reactions to an [issue comment](https://docs.github.com/enterprise-server@2.21/rest/reference/issues#comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-an-issue-comment - API method documentation
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
   * List the reactions to a [pull request review comment](https://docs.github.com/enterprise-server@2.21/rest/reference/pulls#review-comments).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment - API method documentation
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
   * reactionsListForTeamDiscussionCommentInOrg - List reactions for a team discussion comment
   *
   * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-team-discussion-comment - API method documentation
  **/
  reactionsListForTeamDiscussionCommentInOrg(
    req: operations.ReactionsListForTeamDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForTeamDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reactionsListForTeamDiscussionCommentLegacy - List reactions for a team discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
   * 
   * List the reactions to a [team discussion comment](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy - API method documentation
  **/
  reactionsListForTeamDiscussionCommentLegacy(
    req: operations.ReactionsListForTeamDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionCommentLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForTeamDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reactionsListForTeamDiscussionInOrg - List reactions for a team discussion
   *
   * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-team-discussion - API method documentation
  **/
  reactionsListForTeamDiscussionInOrg(
    req: operations.ReactionsListForTeamDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForTeamDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reactionsListForTeamDiscussionLegacy - List reactions for a team discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/enterprise-server@2.21/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
   * 
   * List the reactions to a [team discussion](https://docs.github.com/enterprise-server@2.21/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.21/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.21/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy - API method documentation
  **/
  reactionsListForTeamDiscussionLegacy(
    req: operations.ReactionsListForTeamDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReactionsListForTeamDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReactionsListForTeamDiscussionLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/reactions", req.pathParams);
    
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
        const res: operations.ReactionsListForTeamDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
