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
   * We recommend using the [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   * 
   * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-team-member-legacy - API method documentation
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
   * teamsAddOrUpdateMembershipForUserInOrg - Add or update team membership for a user
   *
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   * 
   * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
   * 
   * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user - API method documentation
  **/
  teamsAddOrUpdateMembershipForUserInOrg(
    req: operations.TeamsAddOrUpdateMembershipForUserInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateMembershipForUserInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateMembershipForUserInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/memberships/{username}", req.pathParams);

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
        const res: operations.TeamsAddOrUpdateMembershipForUserInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 422:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAddOrUpdateMembershipForUserLegacy - Add or update team membership for a user (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   * 
   * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
   * 
   * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy - API method documentation
  **/
  teamsAddOrUpdateMembershipForUserLegacy(
    req: operations.TeamsAddOrUpdateMembershipForUserLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateMembershipForUserLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateMembershipForUserLegacyRequest(req);
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
        const res: operations.TeamsAddOrUpdateMembershipForUserLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
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
   * teamsAddOrUpdateProjectPermissionsInOrg - Add or update team project permissions
   *
   * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions - API method documentation
  **/
  teamsAddOrUpdateProjectPermissionsInOrg(
    req: operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateProjectPermissionsInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", req.pathParams);

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
        const res: operations.TeamsAddOrUpdateProjectPermissionsInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsAddOrUpdateProjectPermissionsInOrg403ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAddOrUpdateProjectPermissionsLegacy - Add or update team project permissions (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
   * 
   * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-project-permissions-legacy - API method documentation
  **/
  teamsAddOrUpdateProjectPermissionsLegacy(
    req: operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateProjectPermissionsLegacyRequest(req);
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
        const res: operations.TeamsAddOrUpdateProjectPermissionsLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsAddOrUpdateProjectPermissionsLegacy403ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsAddOrUpdateProjectPermissionsLegacy415ApplicationJsonObject = httpRes?.data;
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
   * teamsAddOrUpdateRepoPermissionsInOrg - Add or update team repository permissions
   *
   * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
   * 
   * For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions - API method documentation
  **/
  teamsAddOrUpdateRepoPermissionsInOrg(
    req: operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateRepoPermissionsInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", req.pathParams);

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
        const res: operations.TeamsAddOrUpdateRepoPermissionsInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsAddOrUpdateRepoPermissionsLegacy - Add or update team repository permissions (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
   * 
   * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
   * 
   * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#http-verbs)."
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#add-or-update-team-repository-permissions-legacy - API method documentation
  **/
  teamsAddOrUpdateRepoPermissionsLegacy(
    req: operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsAddOrUpdateRepoPermissionsLegacyRequest(req);
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
        const res: operations.TeamsAddOrUpdateRepoPermissionsLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * teamsCheckPermissionsForProjectInOrg - Check team permissions for a project
   *
   * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project - API method documentation
  **/
  teamsCheckPermissionsForProjectInOrg(
    req: operations.TeamsCheckPermissionsForProjectInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForProjectInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForProjectInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsCheckPermissionsForProjectInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsCheckPermissionsForProjectLegacy - Check team permissions for a project (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
   * 
   * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-project-legacy - API method documentation
  **/
  teamsCheckPermissionsForProjectLegacy(
    req: operations.TeamsCheckPermissionsForProjectLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForProjectLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForProjectLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsCheckPermissionsForProjectLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamProject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsCheckPermissionsForProjectLegacy415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsCheckPermissionsForRepoInOrg - Check team permissions for a repository
   *
   * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
   * 
   * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
   * 
   * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository - API method documentation
  **/
  teamsCheckPermissionsForRepoInOrg(
    req: operations.TeamsCheckPermissionsForRepoInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForRepoInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForRepoInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsCheckPermissionsForRepoInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamRepository = httpRes?.data;
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
   * teamsCheckPermissionsForRepoLegacy - Check team permissions for a repository (Legacy)
   *
   * **Note**: Repositories inherited through a parent team will also be checked.
   * 
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
   * 
   * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/enterprise-server@2.22/rest/overview/media-types/) via the `Accept` header:
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#check-team-permissions-for-a-repository-legacy - API method documentation
  **/
  teamsCheckPermissionsForRepoLegacy(
    req: operations.TeamsCheckPermissionsForRepoLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCheckPermissionsForRepoLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCheckPermissionsForRepoLegacyRequest(req);
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
        const res: operations.TeamsCheckPermissionsForRepoLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamRepository = httpRes?.data;
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
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team - API method documentation
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
   * teamsCreateDiscussionCommentInOrg - Create a discussion comment
   *
   * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment - API method documentation
  **/
  teamsCreateDiscussionCommentInOrg(
    req: operations.TeamsCreateDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", req.pathParams);

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
        const res: operations.TeamsCreateDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsCreateDiscussionCommentLegacy - Create a discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment) endpoint.
   * 
   * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-comment-legacy - API method documentation
  **/
  teamsCreateDiscussionCommentLegacy(
    req: operations.TeamsCreateDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionCommentLegacyRequest(req);
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
        const res: operations.TeamsCreateDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsCreateDiscussionInOrg - Create a discussion
   *
   * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion - API method documentation
  **/
  teamsCreateDiscussionInOrg(
    req: operations.TeamsCreateDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions", req.pathParams);

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
        const res: operations.TeamsCreateDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsCreateDiscussionLegacy - Create a discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion) endpoint.
   * 
   * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.22/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-discussion-legacy - API method documentation
  **/
  teamsCreateDiscussionLegacy(
    req: operations.TeamsCreateDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsCreateDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsCreateDiscussionLegacyRequest(req);
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
        const res: operations.TeamsCreateDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsDeleteDiscussionCommentInOrg - Delete a discussion comment
   *
   * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment - API method documentation
  **/
  teamsDeleteDiscussionCommentInOrg(
    req: operations.TeamsDeleteDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteDiscussionCommentLegacy - Delete a discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment) endpoint.
   * 
   * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-comment-legacy - API method documentation
  **/
  teamsDeleteDiscussionCommentLegacy(
    req: operations.TeamsDeleteDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionCommentLegacyRequest(req);
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
        const res: operations.TeamsDeleteDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteDiscussionInOrg - Delete a discussion
   *
   * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion - API method documentation
  **/
  teamsDeleteDiscussionInOrg(
    req: operations.TeamsDeleteDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteDiscussionLegacy - Delete a discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion) endpoint.
   * 
   * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-discussion-legacy - API method documentation
  **/
  teamsDeleteDiscussionLegacy(
    req: operations.TeamsDeleteDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteDiscussionLegacyRequest(req);
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
        const res: operations.TeamsDeleteDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteInOrg - Delete a team
   *
   * To delete a team, the authenticated user must be an organization owner or team maintainer.
   * 
   * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team - API method documentation
  **/
  teamsDeleteInOrg(
    req: operations.TeamsDeleteInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsDeleteInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsDeleteLegacy - Delete a team (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#delete-a-team) endpoint.
   * 
   * To delete a team, the authenticated user must be an organization owner or team maintainer.
   * 
   * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#delete-a-team-legacy - API method documentation
  **/
  teamsDeleteLegacy(
    req: operations.TeamsDeleteLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsDeleteLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsDeleteLegacyRequest(req);
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
        const res: operations.TeamsDeleteLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
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
   * teamsGetByName - Get a team by name
   *
   * Gets a team using the team's `slug`. GitHub Enterprise Server generates the `slug` from the team `name`.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name - API method documentation
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
   * teamsGetDiscussionCommentInOrg - Get a discussion comment
   *
   * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment - API method documentation
  **/
  teamsGetDiscussionCommentInOrg(
    req: operations.TeamsGetDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetDiscussionCommentLegacy - Get a discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment) endpoint.
   * 
   * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-comment-legacy - API method documentation
  **/
  teamsGetDiscussionCommentLegacy(
    req: operations.TeamsGetDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionCommentLegacyRequest(req);
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
        const res: operations.TeamsGetDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetDiscussionInOrg - Get a discussion
   *
   * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion - API method documentation
  **/
  teamsGetDiscussionInOrg(
    req: operations.TeamsGetDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetDiscussionLegacy - Get a discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion) endpoint.
   * 
   * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-discussion-legacy - API method documentation
  **/
  teamsGetDiscussionLegacy(
    req: operations.TeamsGetDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetDiscussionLegacyRequest(req);
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
        const res: operations.TeamsGetDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetLegacy - Get a team (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-a-team-by-name) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#get-a-team-legacy - API method documentation
  **/
  teamsGetLegacy(
    req: operations.TeamsGetLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetLegacyRequest(req);
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
        const res: operations.TeamsGetLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsGetMemberLegacy - Get team member (Legacy)
   *
   * The "Get team member" endpoint (described below) is deprecated.
   * 
   * We recommend using the [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
   * 
   * To list members in a team, the team must be visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-member-legacy - API method documentation
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
   * teamsGetMembershipForUserInOrg - Get team membership for a user
   *
   * Team members will include the members of child teams.
   * 
   * To get a user's membership with a team, the team must be visible to the authenticated user.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
   * 
   * **Note:**
   * The response contains the `state` of the membership and the member's `role`.
   * 
   * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user - API method documentation
  **/
  teamsGetMembershipForUserInOrg(
    req: operations.TeamsGetMembershipForUserInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetMembershipForUserInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetMembershipForUserInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/memberships/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsGetMembershipForUserInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
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
   * teamsGetMembershipForUserLegacy - Get team membership for a user (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user) endpoint.
   * 
   * Team members will include the members of child teams.
   * 
   * To get a user's membership with a team, the team must be visible to the authenticated user.
   * 
   * **Note:**
   * The response contains the `state` of the membership and the member's `role`.
   * 
   * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#create-a-team).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#get-team-membership-for-a-user-legacy - API method documentation
  **/
  teamsGetMembershipForUserLegacy(
    req: operations.TeamsGetMembershipForUserLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsGetMembershipForUserLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsGetMembershipForUserLegacyRequest(req);
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
        const res: operations.TeamsGetMembershipForUserLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamMembership = httpRes?.data;
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
   * teamsList - List teams
   *
   * Lists all teams in an organization that are visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams - API method documentation
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
   * teamsListChildInOrg - List child teams
   *
   * Lists the child teams of the team specified by `{team_slug}`.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams - API method documentation
  **/
  teamsListChildInOrg(
    req: operations.TeamsListChildInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListChildInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListChildInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/teams", req.pathParams);
    
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
        const res: operations.TeamsListChildInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListChildLegacy - List child teams (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-child-teams) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-child-teams-legacy - API method documentation
  **/
  teamsListChildLegacy(
    req: operations.TeamsListChildLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListChildLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListChildLegacyRequest(req);
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
        const res: operations.TeamsListChildLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
          case httpRes?.status == 404:
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
   * teamsListDiscussionCommentsInOrg - List discussion comments
   *
   * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments - API method documentation
  **/
  teamsListDiscussionCommentsInOrg(
    req: operations.TeamsListDiscussionCommentsInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionCommentsInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionCommentsInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", req.pathParams);
    
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
        const res: operations.TeamsListDiscussionCommentsInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListDiscussionCommentsLegacy - List discussion comments (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments) endpoint.
   * 
   * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussion-comments-legacy - API method documentation
  **/
  teamsListDiscussionCommentsLegacy(
    req: operations.TeamsListDiscussionCommentsLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionCommentsLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionCommentsLegacyRequest(req);
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
        const res: operations.TeamsListDiscussionCommentsLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListDiscussionsInOrg - List discussions
   *
   * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions - API method documentation
  **/
  teamsListDiscussionsInOrg(
    req: operations.TeamsListDiscussionsInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionsInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionsInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions", req.pathParams);
    
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
        const res: operations.TeamsListDiscussionsInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListDiscussionsLegacy - List discussions (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions) endpoint.
   * 
   * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-discussions-legacy - API method documentation
  **/
  teamsListDiscussionsLegacy(
    req: operations.TeamsListDiscussionsLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListDiscussionsLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListDiscussionsLegacyRequest(req);
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
        const res: operations.TeamsListDiscussionsLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-teams-for-the-authenticated-user - API method documentation
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
   * teamsListMembersInOrg - List team members
   *
   * Team members will include the members of child teams.
   * 
   * To list members in a team, the team must be visible to the authenticated user.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members - API method documentation
  **/
  teamsListMembersInOrg(
    req: operations.TeamsListMembersInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListMembersInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListMembersInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/members", req.pathParams);
    
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
        const res: operations.TeamsListMembersInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListMembersLegacy - List team members (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members) endpoint.
   * 
   * Team members will include the members of child teams.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-members-legacy - API method documentation
  **/
  teamsListMembersLegacy(
    req: operations.TeamsListMembersLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListMembersLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListMembersLegacyRequest(req);
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
        const res: operations.TeamsListMembersLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
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
   * teamsListProjectsInOrg - List team projects
   *
   * Lists the organization projects for a team.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects - API method documentation
  **/
  teamsListProjectsInOrg(
    req: operations.TeamsListProjectsInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListProjectsInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListProjectsInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/projects", req.pathParams);
    
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
        const res: operations.TeamsListProjectsInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListProjectsLegacy - List team projects (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-projects) endpoint.
   * 
   * Lists the organization projects for a team.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-projects-legacy - API method documentation
  **/
  teamsListProjectsLegacy(
    req: operations.TeamsListProjectsLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListProjectsLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListProjectsLegacyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/teams/{team_id}/projects", req.pathParams);
    
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
        const res: operations.TeamsListProjectsLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamProjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsListProjectsLegacy415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsListReposInOrg - List team repositories
   *
   * Lists a team's repositories visible to the authenticated user.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories - API method documentation
  **/
  teamsListReposInOrg(
    req: operations.TeamsListReposInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListReposInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListReposInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/repos", req.pathParams);
    
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
        const res: operations.TeamsListReposInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * teamsListReposLegacy - List team repositories (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#list-team-repositories) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#list-team-repositories-legacy - API method documentation
  **/
  teamsListReposLegacy(
    req: operations.TeamsListReposLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsListReposLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsListReposLegacyRequest(req);
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
        const res: operations.TeamsListReposLegacyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
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
   * teamsRemoveMemberLegacy - Remove team member (Legacy)
   *
   * The "Remove team member" endpoint (described below) is deprecated.
   * 
   * We recommend using the [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-member-legacy - API method documentation
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
   * teamsRemoveMembershipForUserInOrg - Remove team membership for a user
   *
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user - API method documentation
  **/
  teamsRemoveMembershipForUserInOrg(
    req: operations.TeamsRemoveMembershipForUserInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveMembershipForUserInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveMembershipForUserInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/memberships/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveMembershipForUserInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveMembershipForUserLegacy - Remove team membership for a user (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
   * 
   * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
   * 
   * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub Enterprise Server team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub Enterprise Server](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-team-membership-for-a-user-legacy - API method documentation
  **/
  teamsRemoveMembershipForUserLegacy(
    req: operations.TeamsRemoveMembershipForUserLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveMembershipForUserLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveMembershipForUserLegacyRequest(req);
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
        const res: operations.TeamsRemoveMembershipForUserLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveProjectInOrg - Remove a project from a team
   *
   * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team - API method documentation
  **/
  teamsRemoveProjectInOrg(
    req: operations.TeamsRemoveProjectInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveProjectInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveProjectInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/projects/{project_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveProjectInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveProjectLegacy - Remove a project from a team (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-project-from-a-team) endpoint.
   * 
   * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-project-from-a-team-legacy - API method documentation
  **/
  teamsRemoveProjectLegacy(
    req: operations.TeamsRemoveProjectLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveProjectLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveProjectLegacyRequest(req);
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
        const res: operations.TeamsRemoveProjectLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamsRemoveProjectLegacy415ApplicationJsonObject = httpRes?.data;
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
   * teamsRemoveRepoInOrg - Remove a repository from a team
   *
   * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team - API method documentation
  **/
  teamsRemoveRepoInOrg(
    req: operations.TeamsRemoveRepoInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveRepoInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveRepoInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TeamsRemoveRepoInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsRemoveRepoLegacy - Remove a repository from a team (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
   * 
   * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#remove-a-repository-from-a-team-legacy - API method documentation
  **/
  teamsRemoveRepoLegacy(
    req: operations.TeamsRemoveRepoLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsRemoveRepoLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsRemoveRepoLegacyRequest(req);
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
        const res: operations.TeamsRemoveRepoLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * teamsUpdateDiscussionCommentInOrg - Update a discussion comment
   *
   * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment - API method documentation
  **/
  teamsUpdateDiscussionCommentInOrg(
    req: operations.TeamsUpdateDiscussionCommentInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionCommentInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionCommentInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}", req.pathParams);

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
        const res: operations.TeamsUpdateDiscussionCommentInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsUpdateDiscussionCommentLegacy - Update a discussion comment (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment) endpoint.
   * 
   * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-comment-legacy - API method documentation
  **/
  teamsUpdateDiscussionCommentLegacy(
    req: operations.TeamsUpdateDiscussionCommentLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionCommentLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionCommentLegacyRequest(req);
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
        const res: operations.TeamsUpdateDiscussionCommentLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsUpdateDiscussionInOrg - Update a discussion
   *
   * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion - API method documentation
  **/
  teamsUpdateDiscussionInOrg(
    req: operations.TeamsUpdateDiscussionInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}", req.pathParams);

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
        const res: operations.TeamsUpdateDiscussionInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsUpdateDiscussionLegacy - Update a discussion (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion) endpoint.
   * 
   * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/enterprise-server@2.22/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-discussion-legacy - API method documentation
  **/
  teamsUpdateDiscussionLegacy(
    req: operations.TeamsUpdateDiscussionLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateDiscussionLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateDiscussionLegacyRequest(req);
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
        const res: operations.TeamsUpdateDiscussionLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsUpdateInOrg - Update a team
   *
   * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
   * 
   * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team - API method documentation
  **/
  teamsUpdateInOrg(
    req: operations.TeamsUpdateInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/teams/{team_slug}", req.pathParams);

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
        const res: operations.TeamsUpdateInOrgResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * teamsUpdateLegacy - Update a team (Legacy)
   *
   * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/enterprise-server@2.22/rest/reference/teams#update-a-team) endpoint.
   * 
   * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
   * 
   * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
   *
   * https://docs.github.com/enterprise-server@2.22/rest/reference/teams/#update-a-team-legacy - API method documentation
  **/
  teamsUpdateLegacy(
    req: operations.TeamsUpdateLegacyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TeamsUpdateLegacyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TeamsUpdateLegacyRequest(req);
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
        const res: operations.TeamsUpdateLegacyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teamFull = httpRes?.data;
            }
            break;
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
          case httpRes?.status == 404:
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

}
