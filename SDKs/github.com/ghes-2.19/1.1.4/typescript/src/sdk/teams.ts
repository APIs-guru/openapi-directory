import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Teams {
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
   * teamsAddMemberLegacy - Add team member (Legacy)
   *
   * The "Add team member" endpoint (described below) is deprecated.
   * 
   * We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   * 
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-team-member-legacy - API method documentation
  **/
  teamsAddMemberLegacy(
    req: operations.TeamsAddMemberLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddMemberLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddMemberLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/members/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "put",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsAddMemberLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAddOrUpdateMembershipForUser - Add or update team membership for a user
   *
   * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
   * 
   * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
   * 
   * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
  **/
  teamsAddOrUpdateMembershipForUser(
    req: operations.TeamsAddOrUpdateMembershipForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateMembershipForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateMembershipForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/memberships/{username}", req.pathParams);

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
        const res: operations.TeamsAddOrUpdateMembershipForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
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
   * teamsAddOrUpdateProjectPermissions - Add or update team project permissions
   *
   * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-project-permissions - API method documentation
  **/
  teamsAddOrUpdateProjectPermissions(
    req: operations.TeamsAddOrUpdateProjectPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateProjectPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateProjectPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects/{project_id}", req.pathParams);

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
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsAddOrUpdateProjectPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsAddOrUpdateProjectPermissions403ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAddOrUpdateRepoPermissions - Add or update team repository permissions
   *
   * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
   * 
   * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
  **/
  teamsAddOrUpdateRepoPermissions(
    req: operations.TeamsAddOrUpdateRepoPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateRepoPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateRepoPermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/repos/{owner}/{repo}", req.pathParams);

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
        const res: operations.TeamsAddOrUpdateRepoPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsCheckPermissionsForProject - Check team permissions for a project
   *
   * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-project - API method documentation
  **/
  teamsCheckPermissionsForProject(
    req: operations.TeamsCheckPermissionsForProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForProjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsCheckPermissionsForProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamProject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsCheckPermissionsForRepo - Check team permissions for a repository
   *
   * **Note**: If you pass the `hellcat-preview` media type, repositories inherited through a parent team will be checked.
   * 
   * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types/) via the `Accept` header:
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
  **/
  teamsCheckPermissionsForRepo(
    req: operations.TeamsCheckPermissionsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsCheckPermissionsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepository = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.github.v3.repository+json`)) {
                res.fullRepository = httpRes?.data;
            }
            break;
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
   * teamsCreate - Create a team
   *
   * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
   * 
   * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team - API method documentation
  **/
  teamsCreate(
    req: operations.TeamsCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams", req.pathParams);

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
        const res: operations.TeamsCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFull = httpRes?.data;
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
   * teamsCreateDiscussion - Create a discussion
   *
   * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion - API method documentation
  **/
  teamsCreateDiscussion(
    req: operations.TeamsCreateDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions", req.pathParams);

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
        const res: operations.TeamsCreateDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsCreateDiscussionComment - Create a discussion comment
   *
   * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-discussion-comment - API method documentation
  **/
  teamsCreateDiscussionComment(
    req: operations.TeamsCreateDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments", req.pathParams);

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
        const res: operations.TeamsCreateDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussionComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDelete - Delete a team
   *
   * To delete a team, the authenticated user must be an organization owner or team maintainer.
   * 
   * If you are an organization owner and you pass the `hellcat-preview` media type, deleting a parent team will delete all of its child teams as well.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#delete-a-team - API method documentation
  **/
  teamsDelete(
    req: operations.TeamsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteDiscussion - Delete a discussion
   *
   * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion - API method documentation
  **/
  teamsDeleteDiscussion(
    req: operations.TeamsDeleteDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteDiscussionComment - Delete a discussion comment
   *
   * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#delete-a-discussion-comment - API method documentation
  **/
  teamsDeleteDiscussionComment(
    req: operations.TeamsDeleteDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsGet - Get a team
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#get-a-team - API method documentation
  **/
  teamsGet(
    req: operations.TeamsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFull = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsGetByName - Get a team by name
   *
   * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-team-by-name - API method documentation
  **/
  teamsGetByName(
    req: operations.TeamsGetByNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetByNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetByNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetByNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFull = httpRes?.data;
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
   * teamsGetDiscussion - Get a discussion
   *
   * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion - API method documentation
  **/
  teamsGetDiscussion(
    req: operations.TeamsGetDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsGetDiscussionComment - Get a discussion comment
   *
   * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-a-discussion-comment - API method documentation
  **/
  teamsGetDiscussionComment(
    req: operations.TeamsGetDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussionComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsGetMemberLegacy - Get team member (Legacy)
   *
   * The "Get team member" endpoint (described below) is deprecated.
   * 
   * We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
   * 
   * To list members in a team, the team must be visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-member-legacy - API method documentation
  **/
  teamsGetMemberLegacy(
    req: operations.TeamsGetMemberLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetMemberLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetMemberLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/members/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetMemberLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetMembershipForUser - Get team membership for a user
   *
   * If you pass the `hellcat-preview` media type, team members will include the members of child teams.
   * 
   * To get a user's membership with a team, the team must be visible to the authenticated user.
   * 
   * **Note:**
   * The response contains the `state` of the membership and the member's `role`.
   * 
   * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#create-a-team).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#get-team-membership-for-a-user - API method documentation
  **/
  teamsGetMembershipForUser(
    req: operations.TeamsGetMembershipForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetMembershipForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetMembershipForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/memberships/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetMembershipForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsList - List teams
   *
   * Lists all teams in an organization that are visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams - API method documentation
  **/
  teamsList(
    req: operations.TeamsListRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams", req.pathParams);
    
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
        const res: operations.TeamsListResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * teamsListChild - List child teams
   *
   * You must use the `hellcat-preview` media type to use this endpoint.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-child-teams - API method documentation
  **/
  teamsListChild(
    req: operations.TeamsListChildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListChildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListChildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/teams", req.pathParams);
    
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
        const res: operations.TeamsListChildResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.team2s = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListDiscussionComments - List discussion comments
   *
   * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussion-comments - API method documentation
  **/
  teamsListDiscussionComments(
    req: operations.TeamsListDiscussionCommentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionCommentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionCommentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments", req.pathParams);
    
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
        const res: operations.TeamsListDiscussionCommentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussionComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListDiscussions - List discussions
   *
   * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-discussions - API method documentation
  **/
  teamsListDiscussions(
    req: operations.TeamsListDiscussionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions", req.pathParams);
    
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
        const res: operations.TeamsListDiscussionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussions = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListForAuthenticatedUser - List teams for the authenticated user
   *
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
  **/
  teamsListForAuthenticatedUser(
    req: operations.TeamsListForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/teams";
    
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
        const res: operations.TeamsListForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFulls = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListMembers - List team members
   *
   * If you pass the `hellcat-preview` media type, team members will include the members of child teams.
   * 
   * To list members in a team, the team must be visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#list-team-members - API method documentation
  **/
  teamsListMembers(
    req: operations.TeamsListMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/members", req.pathParams);
    
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
        const res: operations.TeamsListMembersResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListProjects - List team projects
   *
   * Lists the organization projects for a team. If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all projects for the team. If you pass the `hellcat-preview` media type, the response will include projects inherited from a parent team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-projects - API method documentation
  **/
  teamsListProjects(
    req: operations.TeamsListProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListProjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects", req.pathParams);
    
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
        const res: operations.TeamsListProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamProjects = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListRepos - List team repositories
   *
   * **Note**: If you pass the `hellcat-preview` media type, the response will include any repositories inherited through a parent team.
   * 
   * If you are an [authenticated](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#authentication) site administrator for your Enterprise instance, you will be able to list all repositories for the team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#list-team-repositories - API method documentation
  **/
  teamsListRepos(
    req: operations.TeamsListReposRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListReposResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListReposRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/repos", req.pathParams);
    
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
        const res: operations.TeamsListReposResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveMemberLegacy - Remove team member (Legacy)
   *
   * The "Remove team member" endpoint (described below) is deprecated.
   * 
   * We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-member-legacy - API method documentation
  **/
  teamsRemoveMemberLegacy(
    req: operations.TeamsRemoveMemberLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveMemberLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveMemberLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/members/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveMemberLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsRemoveMembershipForUser - Remove team membership for a user
   *
   * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
  **/
  teamsRemoveMembershipForUser(
    req: operations.TeamsRemoveMembershipForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveMembershipForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveMembershipForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/memberships/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveMembershipForUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveProject - Remove a project from a team
   *
   * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-project-from-a-team - API method documentation
  **/
  teamsRemoveProject(
    req: operations.TeamsRemoveProjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveProjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveProjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveProjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveRepo - Remove a repository from a team
   *
   * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
  **/
  teamsRemoveRepo(
    req: operations.TeamsRemoveRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsUpdate - Update a team
   *
   * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
   * 
   * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams/#update-a-team - API method documentation
  **/
  teamsUpdate(
    req: operations.TeamsUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}", req.pathParams);

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
        const res: operations.TeamsUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFull = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsUpdateDiscussion - Update a discussion
   *
   * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion - API method documentation
  **/
  teamsUpdateDiscussion(
    req: operations.TeamsUpdateDiscussionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}", req.pathParams);

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
        const res: operations.TeamsUpdateDiscussionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussion = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsUpdateDiscussionComment - Update a discussion comment
   *
   * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.19/rest/reference/teams#update-a-discussion-comment - API method documentation
  **/
  teamsUpdateDiscussionComment(
    req: operations.TeamsUpdateDiscussionCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);

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
        const res: operations.TeamsUpdateDiscussionCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamDiscussionComment = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
