import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Repos {
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
   * reposAcceptInvitation - Accept a repository invitation
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#accept-a-repository-invitation - API method documentation
  **/
  reposAcceptInvitation(
    req: operations.ReposAcceptInvitationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAcceptInvitationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAcceptInvitationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/repository_invitations/{invitation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "patch",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposAcceptInvitationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
          case httpRes?.status == 409:
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
   * reposAddAppAccessRestrictions - Add app access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
   * 
   * | Type    | Description                                                                                                                                                |
   * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-app-access-restrictions - API method documentation
  **/
  reposAddAppAccessRestrictions(
    req: operations.ReposAddAppAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAddAppAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAddAppAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", req.pathParams);

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
        const res: operations.ReposAddAppAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrations = httpRes?.data;
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
   * reposAddCollaborator - Add a repository collaborator
   *
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   * 
   * For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
   * 
   * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#http-verbs)."
   * 
   * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#invitations).
   * 
   * **Rate limits**
   * 
   * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-a-repository-collaborator - API method documentation
  **/
  reposAddCollaborator(
    req: operations.ReposAddCollaboratorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAddCollaboratorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAddCollaboratorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/collaborators/{username}", req.pathParams);

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
        const res: operations.ReposAddCollaboratorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryInvitation = httpRes?.data;
            }
            break;
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
   * reposAddStatusCheckContexts - Add status check contexts
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-status-check-contexts - API method documentation
  **/
  reposAddStatusCheckContexts(
    req: operations.ReposAddStatusCheckContextsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAddStatusCheckContextsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAddStatusCheckContextsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", req.pathParams);

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
        const res: operations.ReposAddStatusCheckContextsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposAddStatusCheckContexts200ApplicationJsonStrings = httpRes?.data;
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
   * reposAddTeamAccessRestrictions - Add team access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Grants the specified teams push access for this branch. You can also give push access to child teams.
   * 
   * | Type    | Description                                                                                                                                |
   * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
   * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-team-access-restrictions - API method documentation
  **/
  reposAddTeamAccessRestrictions(
    req: operations.ReposAddTeamAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAddTeamAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAddTeamAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", req.pathParams);

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
        const res: operations.ReposAddTeamAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
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
   * reposAddUserAccessRestrictions - Add user access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Grants the specified people push access for this branch.
   * 
   * | Type    | Description                                                                                                                   |
   * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#add-user-access-restrictions - API method documentation
  **/
  reposAddUserAccessRestrictions(
    req: operations.ReposAddUserAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposAddUserAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposAddUserAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", req.pathParams);

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
        const res: operations.ReposAddUserAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
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
   * reposCheckCollaborator - Check if a user is a repository collaborator
   *
   * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
   * 
   * Team members will include the members of child teams.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#check-if-a-user-is-a-repository-collaborator - API method documentation
  **/
  reposCheckCollaborator(
    req: operations.ReposCheckCollaboratorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCheckCollaboratorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCheckCollaboratorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/collaborators/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposCheckCollaboratorResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposCompareCommits - Compare two commits
   *
   * The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.
   * 
   * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
   * 
   * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
   * 
   * **Working with large comparisons**
   * 
   * The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commits) to enumerate all commits in the range.
   * 
   * For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long
   * to generate. You can typically resolve this error by using a smaller commit range.
   * 
   * **Signature verification object**
   * 
   * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
   * 
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |
   * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
   * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
   * | `signature` | `string` | The signature that was extracted from the commit. |
   * | `payload` | `string` | The value that was signed. |
   * 
   * These are the possible values for `reason` in the `verification` object:
   * 
   * | Value | Description |
   * | ----- | ----------- |
   * | `expired_key` | The key that made the signature is expired. |
   * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
   * | `gpgverify_error` | There was an error communicating with the signature verification service. |
   * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
   * | `unsigned` | The object does not include a signature. |
   * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
   * | `no_user` | No user was associated with the `committer` email address in the commit. |
   * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
   * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
   * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
   * | `malformed_signature` | There was an error parsing the signature. |
   * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
   * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#compare-two-commits - API method documentation
  **/
  reposCompareCommits(
    req: operations.ReposCompareCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCompareCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCompareCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/compare/{basehead}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposCompareCommitsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComparison = httpRes?.data;
            }
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
   * reposCreateCommitComment - Create a commit comment
   *
   * Create a comment for a commit using its `:commit_sha`.
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-commit-comment - API method documentation
  **/
  reposCreateCommitComment(
    req: operations.ReposCreateCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{commit_sha}/comments", req.pathParams);

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
        const res: operations.ReposCreateCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComment = httpRes?.data;
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
   * reposCreateCommitSignatureProtection - Create commit signature protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-commit-signature-protection - API method documentation
  **/
  reposCreateCommitSignatureProtection(
    req: operations.ReposCreateCommitSignatureProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateCommitSignatureProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateCommitSignatureProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposCreateCommitSignatureProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchAdminEnforced = httpRes?.data;
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
   * reposCreateCommitStatus - Create a commit status
   *
   * Users with push access in a repository can create commit statuses for a given SHA.
   * 
   * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-commit-status - API method documentation
  **/
  reposCreateCommitStatus(
    req: operations.ReposCreateCommitStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateCommitStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateCommitStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/statuses/{sha}", req.pathParams);

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
        const res: operations.ReposCreateCommitStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.status = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposCreateDeployKey - Create a deploy key
   *
   * You can create a read-only deploy key.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deploy-key - API method documentation
  **/
  reposCreateDeployKey(
    req: operations.ReposCreateDeployKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateDeployKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateDeployKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/keys", req.pathParams);

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
        const res: operations.ReposCreateDeployKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployKey = httpRes?.data;
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
   * reposCreateDeployment - Create a deployment
   *
   * Deployments offer a few configurable parameters with certain defaults.
   * 
   * The `ref` parameter can be any named branch, tag, or SHA. At GitHub Enterprise Server we often deploy branches and verify them
   * before we merge a pull request.
   * 
   * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
   * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
   * makes it easier to track which environments have requested deployments. The default environment is `production`.
   * 
   * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
   * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
   * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
   * return a failure response.
   * 
   * By default, [commit statuses](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#statuses) for every submitted context must be in a `success`
   * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
   * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
   * not require any contexts or create any commit statuses, the deployment will always succeed.
   * 
   * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
   * field that will be passed on when a deployment event is dispatched.
   * 
   * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
   * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
   * application with debugging enabled.
   * 
   * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
   * 
   * #### Merged branch response
   * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
   * a deployment. This auto-merge happens when:
   * *   Auto-merge option is enabled in the repository
   * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
   * *   There are no merge conflicts
   * 
   * If there are no new commits in the base branch, a new request to create a deployment should give a successful
   * response.
   * 
   * #### Merge conflict response
   * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
   * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
   * 
   * #### Failed commit status checks
   * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
   * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deployment - API method documentation
  **/
  reposCreateDeployment(
    req: operations.ReposCreateDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateDeploymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments", req.pathParams);

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
        const res: operations.ReposCreateDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployment = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposCreateDeployment202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
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
   * reposCreateDeploymentStatus - Create a deployment status
   *
   * Users with `push` access can create deployment statuses for a given deployment.
   * 
   * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-deployment-status - API method documentation
  **/
  reposCreateDeploymentStatus(
    req: operations.ReposCreateDeploymentStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateDeploymentStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateDeploymentStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", req.pathParams);

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
        const res: operations.ReposCreateDeploymentStatusResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deploymentStatus = httpRes?.data;
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
   * reposCreateForAuthenticatedUser - Create a repository for the authenticated user
   *
   * Creates a new repository for the authenticated user.
   * 
   * **OAuth scope requirements**
   * 
   * When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
   * 
   * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
   * *   `repo` scope to create a private repository.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-for-the-authenticated-user - API method documentation
  **/
  reposCreateForAuthenticatedUser(
    req: operations.ReposCreateForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/repos";

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
        const res: operations.ReposCreateForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
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
   * reposCreateFork - Create a fork
   *
   * Create a fork for the authenticated user.
   * 
   * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Enterprise Server Support](https://support.github.com/contact) or [GitHub Enterprise Server Premium Support](https://premium.githubsupport.com).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-fork - API method documentation
  **/
  reposCreateFork(
    req: operations.ReposCreateForkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateForkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateForkRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/forks", req.pathParams);

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
        const res: operations.ReposCreateForkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fullRepository = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
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
   * reposCreateInOrg - Create an organization repository
   *
   * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
   * 
   * **OAuth scope requirements**
   * 
   * When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
   * 
   * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
   * *   `repo` scope to create a private repository
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-an-organization-repository - API method documentation
  **/
  reposCreateInOrg(
    req: operations.ReposCreateInOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateInOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateInOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/repos", req.pathParams);

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
        const res: operations.ReposCreateInOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
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
   * reposCreateOrUpdateFileContents - Create or update file contents
   *
   * Creates a new file or replaces an existing file in a repository.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-or-update-file-contents - API method documentation
  **/
  reposCreateOrUpdateFileContents(
    req: operations.ReposCreateOrUpdateFileContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateOrUpdateFileContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateOrUpdateFileContentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/contents/{path}", req.pathParams);

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
        const res: operations.ReposCreateOrUpdateFileContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileCommit = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileCommit = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
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
   * reposCreatePagesSite - Create a GitHub Pages site
   *
   * Configures a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-github-pages-site - API method documentation
  **/
  reposCreatePagesSite(
    req: operations.ReposCreatePagesSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreatePagesSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreatePagesSiteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages", req.pathParams);

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
        const res: operations.ReposCreatePagesSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.page = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposCreatePagesSite415ApplicationJsonObject = httpRes?.data;
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
   * reposCreateRelease - Create a release
   *
   * Users with push access to the repository can create a release.
   * 
   * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.20/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-release - API method documentation
  **/
  reposCreateRelease(
    req: operations.ReposCreateReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases", req.pathParams);

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
        const res: operations.ReposCreateReleaseResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.release = httpRes?.data;
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
   * reposCreateUsingTemplate - Create a repository using a template
   *
   * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
   * 
   * **OAuth scope requirements**
   * 
   * When using [OAuth](https://docs.github.com/enterprise-server@2.20/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
   * 
   * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
   * *   `repo` scope to create a private repository
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-using-a-template - API method documentation
  **/
  reposCreateUsingTemplate(
    req: operations.ReposCreateUsingTemplateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateUsingTemplateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateUsingTemplateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{template_owner}/{template_repo}/generate", req.pathParams);

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
        const res: operations.ReposCreateUsingTemplateResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repository = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposCreateWebhook - Create a repository webhook
   *
   * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
   * share the same `config` as long as those webhooks do not have any `events` that overlap.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-repository-webhook - API method documentation
  **/
  reposCreateWebhook(
    req: operations.ReposCreateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposCreateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposCreateWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks", req.pathParams);

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
        const res: operations.ReposCreateWebhookResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hook = httpRes?.data;
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
   * reposDeclineInvitation - Decline a repository invitation
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#decline-a-repository-invitation - API method documentation
  **/
  reposDeclineInvitation(
    req: operations.ReposDeclineInvitationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeclineInvitationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeclineInvitationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/user/repository_invitations/{invitation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeclineInvitationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
          case httpRes?.status == 409:
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
   * reposDelete - Delete a repository
   *
   * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
   * 
   * If an organization owner has configured the organization to prevent members from deleting organization-owned
   * repositories, you will get a `403 Forbidden` response.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository - API method documentation
  **/
  reposDelete(
    req: operations.ReposDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 307:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposDelete403ApplicationJsonObject = httpRes?.data;
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
   * reposDeleteAccessRestrictions - Delete access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Disables the ability to restrict who can push to this branch.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-access-restrictions - API method documentation
  **/
  reposDeleteAccessRestrictions(
    req: operations.ReposDeleteAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeleteAdminBranchProtection - Delete admin branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-admin-branch-protection - API method documentation
  **/
  reposDeleteAdminBranchProtection(
    req: operations.ReposDeleteAdminBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteAdminBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteAdminBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteAdminBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposDeleteBranchProtection - Delete branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-branch-protection - API method documentation
  **/
  reposDeleteBranchProtection(
    req: operations.ReposDeleteBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
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
   * reposDeleteCommitComment - Delete a commit comment
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-commit-comment - API method documentation
  **/
  reposDeleteCommitComment(
    req: operations.ReposDeleteCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposDeleteCommitSignatureProtection - Delete commit signature protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-commit-signature-protection - API method documentation
  **/
  reposDeleteCommitSignatureProtection(
    req: operations.ReposDeleteCommitSignatureProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteCommitSignatureProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteCommitSignatureProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteCommitSignatureProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposDeleteDeployKey - Delete a deploy key
   *
   * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-deploy-key - API method documentation
  **/
  reposDeleteDeployKey(
    req: operations.ReposDeleteDeployKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteDeployKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteDeployKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteDeployKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeleteFile - Delete a file
   *
   * Deletes a file in a repository.
   * 
   * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
   * 
   * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
   * 
   * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-file - API method documentation
  **/
  reposDeleteFile(
    req: operations.ReposDeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteFileRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/contents/{path}", req.pathParams);

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
        const res: operations.ReposDeleteFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fileCommit = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposDeleteFile503ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeleteInvitation - Delete a repository invitation
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository-invitation - API method documentation
  **/
  reposDeleteInvitation(
    req: operations.ReposDeleteInvitationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteInvitationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteInvitationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/invitations/{invitation_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteInvitationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeletePagesSite - Delete a GitHub Enterprise Server Pages site
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-github-pages-site - API method documentation
  **/
  reposDeletePagesSite(
    req: operations.ReposDeletePagesSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeletePagesSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeletePagesSiteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeletePagesSiteResponse = {statusCode: httpRes.status, contentType: contentType};
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
                res.reposDeletePagesSite415ApplicationJsonObject = httpRes?.data;
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
   * reposDeletePullRequestReviewProtection - Delete pull request review protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-pull-request-review-protection - API method documentation
  **/
  reposDeletePullRequestReviewProtection(
    req: operations.ReposDeletePullRequestReviewProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeletePullRequestReviewProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeletePullRequestReviewProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeletePullRequestReviewProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposDeleteRelease - Delete a release
   *
   * Users with push access to the repository can delete a release.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-release - API method documentation
  **/
  reposDeleteRelease(
    req: operations.ReposDeleteReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/{release_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeleteReleaseAsset - Delete a release asset
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-release-asset - API method documentation
  **/
  reposDeleteReleaseAsset(
    req: operations.ReposDeleteReleaseAssetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteReleaseAssetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteReleaseAssetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/assets/{asset_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteReleaseAssetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDeleteWebhook - Delete a repository webhook
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#delete-a-repository-webhook - API method documentation
  **/
  reposDeleteWebhook(
    req: operations.ReposDeleteWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDeleteWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDeleteWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks/{hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDeleteWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposDownloadTarballArchive - Download a repository archive (tar)
   *
   * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
   * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
   * the `Location` header to make a second `GET` request.
   * **Note**: For private repositories, these links are temporary and expire after five minutes.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#download-a-repository-archive - API method documentation
  **/
  reposDownloadTarballArchive(
    req: operations.ReposDownloadTarballArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDownloadTarballArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDownloadTarballArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/tarball/{ref}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDownloadTarballArchiveResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposDownloadZipballArchive - Download a repository archive (zip)
   *
   * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
   * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
   * the `Location` header to make a second `GET` request.
   * **Note**: For private repositories, these links are temporary and expire after five minutes.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#download-a-repository-archive - API method documentation
  **/
  reposDownloadZipballArchive(
    req: operations.ReposDownloadZipballArchiveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposDownloadZipballArchiveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposDownloadZipballArchiveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/zipball/{ref}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposDownloadZipballArchiveResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 302:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGet - Get a repository
   *
   * When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.
   * 
   * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository - API method documentation
  **/
  reposGet(
    req: operations.ReposGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fullRepository = httpRes?.data;
            }
            break;
          case httpRes?.status == 301:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
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
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetAccessRestrictions - Get access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Lists who has access to this protected branch.
   * 
   * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-access-restrictions - API method documentation
  **/
  reposGetAccessRestrictions(
    req: operations.ReposGetAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchRestrictionPolicy = httpRes?.data;
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
   * reposGetAdminBranchProtection - Get admin branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-admin-branch-protection - API method documentation
  **/
  reposGetAdminBranchProtection(
    req: operations.ReposGetAdminBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetAdminBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetAdminBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetAdminBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchAdminEnforced = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetAllStatusCheckContexts - Get all status check contexts
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-status-check-contexts - API method documentation
  **/
  reposGetAllStatusCheckContexts(
    req: operations.ReposGetAllStatusCheckContextsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetAllStatusCheckContextsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetAllStatusCheckContextsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetAllStatusCheckContextsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetAllStatusCheckContexts200ApplicationJsonStrings = httpRes?.data;
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
   * reposGetAllTopics - Get all repository topics
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-repository-topics - API method documentation
  **/
  reposGetAllTopics(
    req: operations.ReposGetAllTopicsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetAllTopicsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetAllTopicsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/topics", req.pathParams);
    
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
        const res: operations.ReposGetAllTopicsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.topic = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetAllTopics415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetAppsWithAccessToProtectedBranch - Get apps with access to the protected branch
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-apps-with-access-to-the-protected-branch - API method documentation
  **/
  reposGetAppsWithAccessToProtectedBranch(
    req: operations.ReposGetAppsWithAccessToProtectedBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetAppsWithAccessToProtectedBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetAppsWithAccessToProtectedBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetAppsWithAccessToProtectedBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrations = httpRes?.data;
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
   * reposGetBranch - Get a branch
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-branch - API method documentation
  **/
  reposGetBranch(
    req: operations.ReposGetBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchWithProtection = httpRes?.data;
            }
            break;
          case httpRes?.status == 301:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetBranch415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetBranchProtection - Get branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-branch-protection - API method documentation
  **/
  reposGetBranchProtection(
    req: operations.ReposGetBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchProtection = httpRes?.data;
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
   * reposGetCodeFrequencyStats - Get the weekly commit activity
   *
   * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-weekly-commit-activity - API method documentation
  **/
  reposGetCodeFrequencyStats(
    req: operations.ReposGetCodeFrequencyStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCodeFrequencyStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCodeFrequencyStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stats/code_frequency", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetCodeFrequencyStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeFrequencyStats = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetCodeFrequencyStats202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetCollaboratorPermissionLevel - Get repository permissions for a user
   *
   * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-repository-permissions-for-a-user - API method documentation
  **/
  reposGetCollaboratorPermissionLevel(
    req: operations.ReposGetCollaboratorPermissionLevelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCollaboratorPermissionLevelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCollaboratorPermissionLevelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/collaborators/{username}/permission", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetCollaboratorPermissionLevelResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryCollaboratorPermission = httpRes?.data;
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
   * reposGetCombinedStatusForRef - Get the combined status for a specific reference
   *
   * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
   * 
   * The most recent status for each context is returned, up to 100. This field [paginates](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#pagination) if there are over 100 contexts.
   * 
   * Additionally, a combined `state` is returned. The `state` is one of:
   * 
   * *   **failure** if any of the contexts report as `error` or `failure`
   * *   **pending** if there are no statuses or a context is `pending`
   * *   **success** if the latest status for all contexts is `success`
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-combined-status-for-a-specific-reference - API method documentation
  **/
  reposGetCombinedStatusForRef(
    req: operations.ReposGetCombinedStatusForRefRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCombinedStatusForRefResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCombinedStatusForRefRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{ref}/status", req.pathParams);
    
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
        const res: operations.ReposGetCombinedStatusForRefResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.combinedCommitStatus = httpRes?.data;
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
   * reposGetCommit - Get a commit
   *
   * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
   * 
   * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
   * 
   * You can pass the appropriate [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
   * 
   * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
   * 
   * **Signature verification object**
   * 
   * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
   * 
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |
   * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
   * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
   * | `signature` | `string` | The signature that was extracted from the commit. |
   * | `payload` | `string` | The value that was signed. |
   * 
   * These are the possible values for `reason` in the `verification` object:
   * 
   * | Value | Description |
   * | ----- | ----------- |
   * | `expired_key` | The key that made the signature is expired. |
   * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
   * | `gpgverify_error` | There was an error communicating with the signature verification service. |
   * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
   * | `unsigned` | The object does not include a signature. |
   * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
   * | `no_user` | No user was associated with the `committer` email address in the commit. |
   * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
   * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
   * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
   * | `malformed_signature` | There was an error parsing the signature. |
   * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
   * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-commit - API method documentation
  **/
  reposGetCommit(
    req: operations.ReposGetCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{ref}", req.pathParams);
    
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
        const res: operations.ReposGetCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
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
   * reposGetCommitActivityStats - Get the last year of commit activity
   *
   * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-last-year-of-commit-activity - API method documentation
  **/
  reposGetCommitActivityStats(
    req: operations.ReposGetCommitActivityStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCommitActivityStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCommitActivityStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stats/commit_activity", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetCommitActivityStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetCommitActivityStats202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetCommitComment - Get a commit comment
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-commit-comment - API method documentation
  **/
  reposGetCommitComment(
    req: operations.ReposGetCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComment = httpRes?.data;
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
   * reposGetCommitSignatureProtection - Get commit signature protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.
   * 
   * **Note**: You must enable branch protection to require signed commits.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-commit-signature-protection - API method documentation
  **/
  reposGetCommitSignatureProtection(
    req: operations.ReposGetCommitSignatureProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetCommitSignatureProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetCommitSignatureProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetCommitSignatureProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchAdminEnforced = httpRes?.data;
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
   * reposGetContent - Get repository content
   *
   * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
   * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories. 
   * 
   * Files and symlinks support [a custom media type](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for
   * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
   * type](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
   * object format.
   * 
   * **Note**:
   * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/enterprise-server@2.20/rest/reference/git#trees).
   * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
   * API](https://docs.github.com/enterprise-server@2.20/rest/reference/git#get-a-tree).
   * *   This API supports files up to 1 megabyte in size.
   * 
   * #### If the content is a directory
   * The response will be an array of objects, one object for each item in the directory.
   * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
   * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
   * In the next major version of the API, the type will be returned as "submodule".
   * 
   * #### If the content is a symlink 
   * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
   * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object 
   * describing the symlink itself.
   * 
   * #### If the content is a submodule
   * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
   * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
   * the submodule at that specific commit.
   * 
   * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
   * github.com URLs (`html_url` and `_links["html"]`) will have null values.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-repository-content - API method documentation
  **/
  reposGetContent(
    req: operations.ReposGetContentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetContentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetContentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/contents/{path}", req.pathParams);
    
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
        const res: operations.ReposGetContentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetContent200ApplicationJsonOneOf = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/vnd.github.v3.object`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 302:
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
   * reposGetContributorsStats - Get all contributor commit activity
   *
   * 
   * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
   * 
   * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
   * *   `a` - Number of additions
   * *   `d` - Number of deletions
   * *   `c` - Number of commits
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-all-contributor-commit-activity - API method documentation
  **/
  reposGetContributorsStats(
    req: operations.ReposGetContributorsStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetContributorsStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetContributorsStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stats/contributors", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetContributorsStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contributorActivities = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetContributorsStats202ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetDeployKey - Get a deploy key
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deploy-key - API method documentation
  **/
  reposGetDeployKey(
    req: operations.ReposGetDeployKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetDeployKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetDeployKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/keys/{key_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetDeployKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployKey = httpRes?.data;
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
   * reposGetDeployment - Get a deployment
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deployment - API method documentation
  **/
  reposGetDeployment(
    req: operations.ReposGetDeploymentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetDeploymentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetDeploymentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments/{deployment_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetDeploymentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployment = httpRes?.data;
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
   * reposGetDeploymentStatus - Get a deployment status
   *
   * Users with pull access can view a deployment status for a deployment:
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-deployment-status - API method documentation
  **/
  reposGetDeploymentStatus(
    req: operations.ReposGetDeploymentStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetDeploymentStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetDeploymentStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetDeploymentStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deploymentStatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetDeploymentStatus415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetLatestPagesBuild - Get latest Pages build
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-latest-pages-build - API method documentation
  **/
  reposGetLatestPagesBuild(
    req: operations.ReposGetLatestPagesBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetLatestPagesBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetLatestPagesBuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages/builds/latest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetLatestPagesBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pageBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetLatestRelease - Get the latest release
   *
   * View the latest published full release for the repository.
   * 
   * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-latest-release - API method documentation
  **/
  reposGetLatestRelease(
    req: operations.ReposGetLatestReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetLatestReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetLatestReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/latest", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetLatestReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.release = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetPages - Get a GitHub Enterprise Server Pages site
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-github-pages-site - API method documentation
  **/
  reposGetPages(
    req: operations.ReposGetPagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetPagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetPagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetPagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.page = httpRes?.data;
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
   * reposGetPagesBuild - Get GitHub Enterprise Server Pages build
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-github-pages-build - API method documentation
  **/
  reposGetPagesBuild(
    req: operations.ReposGetPagesBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetPagesBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetPagesBuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages/builds/{build_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetPagesBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pageBuild = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetParticipationStats - Get the weekly commit count
   *
   * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
   * 
   * The array order is oldest week (index 0) to most recent week.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-weekly-commit-count - API method documentation
  **/
  reposGetParticipationStats(
    req: operations.ReposGetParticipationStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetParticipationStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetParticipationStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stats/participation", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetParticipationStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.participationStats = httpRes?.data;
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
   * reposGetPullRequestReviewProtection - Get pull request review protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-pull-request-review-protection - API method documentation
  **/
  reposGetPullRequestReviewProtection(
    req: operations.ReposGetPullRequestReviewProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetPullRequestReviewProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetPullRequestReviewProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetPullRequestReviewProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchPullRequestReview = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetPunchCardStats - Get the hourly commit count for each day
   *
   * Each array contains the day number, hour number, and number of commits:
   * 
   * *   `0-6`: Sunday - Saturday
   * *   `0-23`: Hour of day
   * *   Number of commits
   * 
   * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-the-hourly-commit-count-for-each-day - API method documentation
  **/
  reposGetPunchCardStats(
    req: operations.ReposGetPunchCardStatsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetPunchCardStatsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetPunchCardStatsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/stats/punch_card", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetPunchCardStatsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.codeFrequencyStats = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetReadme - Get a repository README
   *
   * Gets the preferred README for a repository.
   * 
   * READMEs support [custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-readme - API method documentation
  **/
  reposGetReadme(
    req: operations.ReposGetReadmeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetReadmeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetReadmeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/readme", req.pathParams);
    
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
        const res: operations.ReposGetReadmeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contentFile = httpRes?.data;
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
   * reposGetReadmeInDirectory - Get a repository README for a directory
   *
   * Gets the README from a repository directory.
   * 
   * READMEs support [custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-directory-readme - API method documentation
  **/
  reposGetReadmeInDirectory(
    req: operations.ReposGetReadmeInDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetReadmeInDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetReadmeInDirectoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/readme/{dir}", req.pathParams);
    
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
        const res: operations.ReposGetReadmeInDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contentFile = httpRes?.data;
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
   * reposGetRelease - Get a release
   *
   * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#hypermedia).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release - API method documentation
  **/
  reposGetRelease(
    req: operations.ReposGetReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/{release_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.release = httpRes?.data;
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
   * reposGetReleaseAsset - Get a release asset
   *
   * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release-asset - API method documentation
  **/
  reposGetReleaseAsset(
    req: operations.ReposGetReleaseAssetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetReleaseAssetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetReleaseAssetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/assets/{asset_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetReleaseAssetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.releaseAsset = httpRes?.data;
            }
            break;
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposGetReleaseAsset415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposGetReleaseByTag - Get a release by tag name
   *
   * Get a published release with the specified tag.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-release-by-tag-name - API method documentation
  **/
  reposGetReleaseByTag(
    req: operations.ReposGetReleaseByTagRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetReleaseByTagResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetReleaseByTagRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/tags/{tag}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetReleaseByTagResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.release = httpRes?.data;
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
   * reposGetStatusChecksProtection - Get status checks protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-status-checks-protection - API method documentation
  **/
  reposGetStatusChecksProtection(
    req: operations.ReposGetStatusChecksProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetStatusChecksProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetStatusChecksProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetStatusChecksProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.statusCheckPolicy = httpRes?.data;
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
   * reposGetTeamsWithAccessToProtectedBranch - Get teams with access to the protected branch
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Lists the teams who have push access to this branch. The list includes child teams.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-teams-with-access-to-the-protected-branch - API method documentation
  **/
  reposGetTeamsWithAccessToProtectedBranch(
    req: operations.ReposGetTeamsWithAccessToProtectedBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetTeamsWithAccessToProtectedBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetTeamsWithAccessToProtectedBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetTeamsWithAccessToProtectedBranchResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
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
   * reposGetUsersWithAccessToProtectedBranch - Get users with access to the protected branch
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Lists the people who have push access to this branch.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-users-with-access-to-the-protected-branch - API method documentation
  **/
  reposGetUsersWithAccessToProtectedBranch(
    req: operations.ReposGetUsersWithAccessToProtectedBranchRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetUsersWithAccessToProtectedBranchResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetUsersWithAccessToProtectedBranchRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetUsersWithAccessToProtectedBranchResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposGetWebhook - Get a repository webhook
   *
   * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#get-a-repository-webhook - API method documentation
  **/
  reposGetWebhook(
    req: operations.ReposGetWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposGetWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposGetWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks/{hook_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposGetWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hook = httpRes?.data;
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
   * reposListBranches - List branches
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-branches - API method documentation
  **/
  reposListBranches(
    req: operations.ReposListBranchesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListBranchesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListBranchesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches", req.pathParams);
    
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
        const res: operations.ReposListBranchesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.shortBranches = httpRes?.data;
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
   * reposListBranchesForHeadCommit - List branches for HEAD commit
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-branches-for-head-commit - API method documentation
  **/
  reposListBranchesForHeadCommit(
    req: operations.ReposListBranchesForHeadCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListBranchesForHeadCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListBranchesForHeadCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposListBranchesForHeadCommitResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.branchShorts = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposListBranchesForHeadCommit415ApplicationJsonObject = httpRes?.data;
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
   * reposListCollaborators - List repository collaborators
   *
   * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
   * 
   * Team members will include the members of child teams.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-collaborators - API method documentation
  **/
  reposListCollaborators(
    req: operations.ReposListCollaboratorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListCollaboratorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListCollaboratorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/collaborators", req.pathParams);
    
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
        const res: operations.ReposListCollaboratorsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.collaborators = httpRes?.data;
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
   * reposListCommentsForCommit - List commit comments
   *
   * Use the `:commit_sha` to specify the commit that will have its comments listed.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-comments - API method documentation
  **/
  reposListCommentsForCommit(
    req: operations.ReposListCommentsForCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListCommentsForCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListCommentsForCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{commit_sha}/comments", req.pathParams);
    
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
        const res: operations.ReposListCommentsForCommitResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListCommitCommentsForRepo - List commit comments for a repository
   *
   * Commit Comments use [these custom media types](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/enterprise-server@2.20/rest/overview/media-types/).
   * 
   * Comments are ordered by ascending ID.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-comments-for-a-repository - API method documentation
  **/
  reposListCommitCommentsForRepo(
    req: operations.ReposListCommitCommentsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListCommitCommentsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListCommitCommentsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments", req.pathParams);
    
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
        const res: operations.ReposListCommitCommentsForRepoResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListCommitStatusesForRef - List commit statuses for a reference
   *
   * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
   * 
   * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commit-statuses-for-a-reference - API method documentation
  **/
  reposListCommitStatusesForRef(
    req: operations.ReposListCommitStatusesForRefRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListCommitStatusesForRefResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListCommitStatusesForRefRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{ref}/statuses", req.pathParams);
    
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
        const res: operations.ReposListCommitStatusesForRefResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.statuses = httpRes?.data;
            }
            break;
          case httpRes?.status == 301:
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
   * reposListCommits - List commits
   *
   * **Signature verification object**
   * 
   * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
   * 
   * | Name | Type | Description |
   * | ---- | ---- | ----------- |
   * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
   * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
   * | `signature` | `string` | The signature that was extracted from the commit. |
   * | `payload` | `string` | The value that was signed. |
   * 
   * These are the possible values for `reason` in the `verification` object:
   * 
   * | Value | Description |
   * | ----- | ----------- |
   * | `expired_key` | The key that made the signature is expired. |
   * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
   * | `gpgverify_error` | There was an error communicating with the signature verification service. |
   * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
   * | `unsigned` | The object does not include a signature. |
   * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
   * | `no_user` | No user was associated with the `committer` email address in the commit. |
   * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
   * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
   * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
   * | `malformed_signature` | There was an error parsing the signature. |
   * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
   * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-commits - API method documentation
  **/
  reposListCommits(
    req: operations.ReposListCommitsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListCommitsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListCommitsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits", req.pathParams);
    
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
        const res: operations.ReposListCommitsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commits = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
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
   * reposListContributors - List repository contributors
   *
   * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
   * 
   * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-contributors - API method documentation
  **/
  reposListContributors(
    req: operations.ReposListContributorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListContributorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListContributorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/contributors", req.pathParams);
    
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
        const res: operations.ReposListContributorsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.contributors = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
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
   * reposListDeployKeys - List deploy keys
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deploy-keys - API method documentation
  **/
  reposListDeployKeys(
    req: operations.ReposListDeployKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListDeployKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListDeployKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/keys", req.pathParams);
    
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
        const res: operations.ReposListDeployKeysResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployKeys = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListDeploymentStatuses - List deployment statuses
   *
   * Users with pull access can view deployment statuses for a deployment:
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deployment-statuses - API method documentation
  **/
  reposListDeploymentStatuses(
    req: operations.ReposListDeploymentStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListDeploymentStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListDeploymentStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses", req.pathParams);
    
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
        const res: operations.ReposListDeploymentStatusesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deploymentStatuses = httpRes?.data;
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
   * reposListDeployments - List deployments
   *
   * Simple filtering of deployments is available via query parameters:
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-deployments - API method documentation
  **/
  reposListDeployments(
    req: operations.ReposListDeploymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListDeploymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListDeploymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/deployments", req.pathParams);
    
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
        const res: operations.ReposListDeploymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deployments = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListForAuthenticatedUser - List repositories for the authenticated user
   *
   * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
   * 
   * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repositories-for-the-authenticated-user - API method documentation
  **/
  reposListForAuthenticatedUser(
    req: operations.ReposListForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/repos";
    
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
        const res: operations.ReposListForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositories = httpRes?.data;
            }
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
   * reposListForOrg - List organization repositories
   *
   * Lists repositories for the specified organization.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-organization-repositories - API method documentation
  **/
  reposListForOrg(
    req: operations.ReposListForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/orgs/{org}/repos", req.pathParams);
    
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
        const res: operations.ReposListForOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reposListForUser - List repositories for a user
   *
   * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repositories-for-a-user - API method documentation
  **/
  reposListForUser(
    req: operations.ReposListForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/users/{username}/repos", req.pathParams);
    
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
        const res: operations.ReposListForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reposListForks - List forks
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-forks - API method documentation
  **/
  reposListForks(
    req: operations.ReposListForksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListForksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListForksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/forks", req.pathParams);
    
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
        const res: operations.ReposListForksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListInvitations - List repository invitations
   *
   * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-invitations - API method documentation
  **/
  reposListInvitations(
    req: operations.ReposListInvitationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListInvitationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListInvitationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/invitations", req.pathParams);
    
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
        const res: operations.ReposListInvitationsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryInvitations = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListInvitationsForAuthenticatedUser - List repository invitations for the authenticated user
   *
   * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-invitations-for-the-authenticated-user - API method documentation
  **/
  reposListInvitationsForAuthenticatedUser(
    req: operations.ReposListInvitationsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListInvitationsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListInvitationsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/repository_invitations";
    
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
        const res: operations.ReposListInvitationsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryInvitations = httpRes?.data;
            }
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
   * reposListLanguages - List repository languages
   *
   * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-languages - API method documentation
  **/
  reposListLanguages(
    req: operations.ReposListLanguagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListLanguagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListLanguagesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/languages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposListLanguagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.language = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListPagesBuilds - List GitHub Enterprise Server Pages builds
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-github-pages-builds - API method documentation
  **/
  reposListPagesBuilds(
    req: operations.ReposListPagesBuildsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListPagesBuildsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListPagesBuildsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages/builds", req.pathParams);
    
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
        const res: operations.ReposListPagesBuildsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pageBuilds = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListPublic - List public repositories
   *
   * Lists all public repositories in the order that they were created.
   * 
   * Note:
   * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
   * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-public-repositories - API method documentation
  **/
  reposListPublic(
    req: operations.ReposListPublicRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListPublicResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListPublicRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/repositories";
    
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
        const res: operations.ReposListPublicResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
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
   * reposListPullRequestsAssociatedWithCommit - List pull requests associated with a commit
   *
   * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://docs.github.com/enterprise-server@2.20/rest/reference/pulls#list-pull-requests) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-pull-requests-associated-with-a-commit - API method documentation
  **/
  reposListPullRequestsAssociatedWithCommit(
    req: operations.ReposListPullRequestsAssociatedWithCommitRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListPullRequestsAssociatedWithCommitResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListPullRequestsAssociatedWithCommitRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/commits/{commit_sha}/pulls", req.pathParams);
    
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
        const res: operations.ReposListPullRequestsAssociatedWithCommitResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pullRequestSimples = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposListPullRequestsAssociatedWithCommit415ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListReleaseAssets - List release assets
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-release-assets - API method documentation
  **/
  reposListReleaseAssets(
    req: operations.ReposListReleaseAssetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListReleaseAssetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListReleaseAssetsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/{release_id}/assets", req.pathParams);
    
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
        const res: operations.ReposListReleaseAssetsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.releaseAssets = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListReleases - List releases
   *
   * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-tags).
   * 
   * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-releases - API method documentation
  **/
  reposListReleases(
    req: operations.ReposListReleasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListReleasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListReleasesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases", req.pathParams);
    
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
        const res: operations.ReposListReleasesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.releases = httpRes?.data;
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
   * reposListTags - List repository tags
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-tags - API method documentation
  **/
  reposListTags(
    req: operations.ReposListTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/tags", req.pathParams);
    
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
        const res: operations.ReposListTagsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tags = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposListTeams - List repository teams
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-teams - API method documentation
  **/
  reposListTeams(
    req: operations.ReposListTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/teams", req.pathParams);
    
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
        const res: operations.ReposListTeamsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
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
   * reposListWebhooks - List repository webhooks
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-repository-webhooks - API method documentation
  **/
  reposListWebhooks(
    req: operations.ReposListWebhooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposListWebhooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposListWebhooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks", req.pathParams);
    
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
        const res: operations.ReposListWebhooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hooks = httpRes?.data;
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
   * reposMerge - Merge a branch
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#merge-a-branch - API method documentation
  **/
  reposMerge(
    req: operations.ReposMergeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposMergeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposMergeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/merges", req.pathParams);

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
        const res: operations.ReposMergeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commit = httpRes?.data;
            }
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
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
   * reposPingWebhook - Ping a repository webhook
   *
   * This will trigger a [ping event](https://docs.github.com/enterprise-server@2.20/webhooks/#ping-event) to be sent to the hook.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#ping-a-repository-webhook - API method documentation
  **/
  reposPingWebhook(
    req: operations.ReposPingWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposPingWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposPingWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks/{hook_id}/pings", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposPingWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposRemoveAppAccessRestrictions - Remove app access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
   * 
   * | Type    | Description                                                                                                                                                |
   * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-app-access-restrictions - API method documentation
  **/
  reposRemoveAppAccessRestrictions(
    req: operations.ReposRemoveAppAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveAppAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveAppAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", req.pathParams);

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
        const res: operations.ReposRemoveAppAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrations = httpRes?.data;
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
   * reposRemoveCollaborator - Remove a repository collaborator
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-a-repository-collaborator - API method documentation
  **/
  reposRemoveCollaborator(
    req: operations.ReposRemoveCollaboratorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveCollaboratorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveCollaboratorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/collaborators/{username}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposRemoveCollaboratorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposRemoveStatusCheckContexts - Remove status check contexts
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-status-check-contexts - API method documentation
  **/
  reposRemoveStatusCheckContexts(
    req: operations.ReposRemoveStatusCheckContextsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveStatusCheckContextsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveStatusCheckContextsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", req.pathParams);

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
        const res: operations.ReposRemoveStatusCheckContextsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposRemoveStatusCheckContexts200ApplicationJsonStrings = httpRes?.data;
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
   * reposRemoveStatusCheckProtection - Remove status check protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-status-check-protection - API method documentation
  **/
  reposRemoveStatusCheckProtection(
    req: operations.ReposRemoveStatusCheckProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveStatusCheckProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveStatusCheckProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposRemoveStatusCheckProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposRemoveTeamAccessRestrictions - Remove team access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
   * 
   * | Type    | Description                                                                                                                                         |
   * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-team-access-restrictions - API method documentation
  **/
  reposRemoveTeamAccessRestrictions(
    req: operations.ReposRemoveTeamAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveTeamAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveTeamAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", req.pathParams);

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
        const res: operations.ReposRemoveTeamAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
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
   * reposRemoveUserAccessRestrictions - Remove user access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Removes the ability of a user to push to this branch.
   * 
   * | Type    | Description                                                                                                                                   |
   * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#remove-user-access-restrictions - API method documentation
  **/
  reposRemoveUserAccessRestrictions(
    req: operations.ReposRemoveUserAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRemoveUserAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRemoveUserAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", req.pathParams);

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
        const res: operations.ReposRemoveUserAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
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
   * reposReplaceAllTopics - Replace all repository topics
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#replace-all-repository-topics - API method documentation
  **/
  reposReplaceAllTopics(
    req: operations.ReposReplaceAllTopicsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposReplaceAllTopicsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposReplaceAllTopicsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/topics", req.pathParams);

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
        const res: operations.ReposReplaceAllTopicsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.topic = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposReplaceAllTopics415ApplicationJsonObject = httpRes?.data;
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
   * reposRequestPagesBuild - Request a GitHub Enterprise Server Pages build
   *
   * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
   * 
   * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#request-a-github-pages-build - API method documentation
  **/
  reposRequestPagesBuild(
    req: operations.ReposRequestPagesBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposRequestPagesBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposRequestPagesBuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages/builds", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposRequestPagesBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.pageBuildStatus = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposSetAdminBranchProtection - Set admin branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-admin-branch-protection - API method documentation
  **/
  reposSetAdminBranchProtection(
    req: operations.ReposSetAdminBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposSetAdminBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposSetAdminBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposSetAdminBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchAdminEnforced = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposSetAppAccessRestrictions - Set app access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
   * 
   * | Type    | Description                                                                                                                                                |
   * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-app-access-restrictions - API method documentation
  **/
  reposSetAppAccessRestrictions(
    req: operations.ReposSetAppAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposSetAppAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposSetAppAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", req.pathParams);

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
        const res: operations.ReposSetAppAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.integrations = httpRes?.data;
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
   * reposSetStatusCheckContexts - Set status check contexts
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-status-check-contexts - API method documentation
  **/
  reposSetStatusCheckContexts(
    req: operations.ReposSetStatusCheckContextsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposSetStatusCheckContextsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposSetStatusCheckContextsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", req.pathParams);

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
        const res: operations.ReposSetStatusCheckContextsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposSetStatusCheckContexts200ApplicationJsonStrings = httpRes?.data;
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
   * reposSetTeamAccessRestrictions - Set team access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
   * 
   * | Type    | Description                                                                                                                                |
   * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
   * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-team-access-restrictions - API method documentation
  **/
  reposSetTeamAccessRestrictions(
    req: operations.ReposSetTeamAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposSetTeamAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposSetTeamAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", req.pathParams);

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
        const res: operations.ReposSetTeamAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.teams = httpRes?.data;
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
   * reposSetUserAccessRestrictions - Set user access restrictions
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
   * 
   * | Type    | Description                                                                                                                   |
   * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
   * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#set-user-access-restrictions - API method documentation
  **/
  reposSetUserAccessRestrictions(
    req: operations.ReposSetUserAccessRestrictionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposSetUserAccessRestrictionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposSetUserAccessRestrictionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", req.pathParams);

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
        const res: operations.ReposSetUserAccessRestrictionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.simpleUsers = httpRes?.data;
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
   * reposTestPushWebhook - Test the push repository webhook
   *
   * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
   * 
   * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#test-the-push-repository-webhook - API method documentation
  **/
  reposTestPushWebhook(
    req: operations.ReposTestPushWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposTestPushWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposTestPushWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks/{hook_id}/tests", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposTestPushWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * reposTransfer - Transfer a repository
   *
   * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#transfer-a-repository - API method documentation
  **/
  reposTransfer(
    req: operations.ReposTransferRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposTransferResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposTransferRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/transfer", req.pathParams);

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
        const res: operations.ReposTransferResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.minimalRepository = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposUpdate - Update a repository
   *
   * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#replace-all-repository-topics) endpoint.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos/#update-a-repository - API method documentation
  **/
  reposUpdate(
    req: operations.ReposUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}", req.pathParams);

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
        const res: operations.ReposUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.fullRepository = httpRes?.data;
            }
            break;
          case httpRes?.status == 307:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
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
   * reposUpdateBranchProtection - Update branch protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Protecting a branch requires admin or owner permissions to the repository.
   * 
   * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
   * 
   * **Note**: The list of users, apps, and teams in total is limited to 100 items.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-branch-protection - API method documentation
  **/
  reposUpdateBranchProtection(
    req: operations.ReposUpdateBranchProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateBranchProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateBranchProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection", req.pathParams);

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
        const res: operations.ReposUpdateBranchProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranch = httpRes?.data;
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
          case httpRes?.status == 415:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.reposUpdateBranchProtection415ApplicationJsonObject = httpRes?.data;
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
   * reposUpdateCommitComment - Update a commit comment
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-commit-comment - API method documentation
  **/
  reposUpdateCommitComment(
    req: operations.ReposUpdateCommitCommentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateCommitCommentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateCommitCommentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/comments/{comment_id}", req.pathParams);

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
        const res: operations.ReposUpdateCommitCommentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.commitComment = httpRes?.data;
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
   * reposUpdateInformationAboutPagesSite - Update information about a GitHub Pages site
   *
   * Updates information for a GitHub Enterprise Server Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-information-about-a-github-pages-site - API method documentation
  **/
  reposUpdateInformationAboutPagesSite(
    req: operations.ReposUpdateInformationAboutPagesSiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateInformationAboutPagesSiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateInformationAboutPagesSiteRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/pages", req.pathParams);

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
        const res: operations.ReposUpdateInformationAboutPagesSiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/scim+json`)) {
                res.scimError = httpRes?.data;
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
   * reposUpdateInvitation - Update a repository invitation
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-repository-invitation - API method documentation
  **/
  reposUpdateInvitation(
    req: operations.ReposUpdateInvitationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateInvitationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateInvitationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/invitations/{invitation_id}", req.pathParams);

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
        const res: operations.ReposUpdateInvitationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.repositoryInvitation = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposUpdatePullRequestReviewProtection - Update pull request review protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
   * 
   * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-pull-request-review-protection - API method documentation
  **/
  reposUpdatePullRequestReviewProtection(
    req: operations.ReposUpdatePullRequestReviewProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdatePullRequestReviewProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdatePullRequestReviewProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews", req.pathParams);

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
        const res: operations.ReposUpdatePullRequestReviewProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.protectedBranchPullRequestReview = httpRes?.data;
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
   * reposUpdateRelease - Update a release
   *
   * Users with push access to the repository can edit a release.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-release - API method documentation
  **/
  reposUpdateRelease(
    req: operations.ReposUpdateReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateReleaseRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/{release_id}", req.pathParams);

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
        const res: operations.ReposUpdateReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.release = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposUpdateReleaseAsset - Update a release asset
   *
   * Users with push access to the repository can edit a release asset.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-release-asset - API method documentation
  **/
  reposUpdateReleaseAsset(
    req: operations.ReposUpdateReleaseAssetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateReleaseAssetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateReleaseAssetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/assets/{asset_id}", req.pathParams);

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
        const res: operations.ReposUpdateReleaseAssetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.releaseAsset = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * reposUpdateStatusCheckProtection - Update status check protection
   *
   * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
   * 
   * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-status-check-potection - API method documentation
  **/
  reposUpdateStatusCheckProtection(
    req: operations.ReposUpdateStatusCheckProtectionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateStatusCheckProtectionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateStatusCheckProtectionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", req.pathParams);

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
        const res: operations.ReposUpdateStatusCheckProtectionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.statusCheckPolicy = httpRes?.data;
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
   * reposUpdateWebhook - Update a repository webhook
   *
   * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#update-a-repository-webhook - API method documentation
  **/
  reposUpdateWebhook(
    req: operations.ReposUpdateWebhookRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUpdateWebhookResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUpdateWebhookRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/hooks/{hook_id}", req.pathParams);

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
        const res: operations.ReposUpdateWebhookResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.hook = httpRes?.data;
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
   * reposUploadReleaseAsset - Upload a release asset
   *
   * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/enterprise-server@2.20/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
   * the response of the [Create a release endpoint](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#create-a-release) to upload a release asset.
   * 
   * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
   * 
   * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 
   * 
   * `application/zip`
   * 
   * GitHub Enterprise Server expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
   * you'll still need to pass your authentication to be able to upload an asset.
   * 
   * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
   * 
   * **Notes:**
   * *   GitHub Enterprise Server renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/enterprise-server@2.20/rest/reference/repos#list-assets-for-a-release)"
   * endpoint lists the renamed filenames. For more information and help, contact [GitHub Enterprise Server Support](https://support.github.com/contact).
   * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
   *
   * https://docs.github.com/enterprise-server@2.20/rest/reference/repos#upload-a-release-asset - API method documentation
  **/
  reposUploadReleaseAsset(
    req: operations.ReposUploadReleaseAssetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReposUploadReleaseAssetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReposUploadReleaseAssetRequest(req);
    }
    
    let baseURL: string = operations.ReposUploadReleaseAssetServerList[0];
    if (req.serverUrl) {
      baseURL = req.serverUrl;
    }
    const url: string = utils.GenerateURL(baseURL, "/repos/{owner}/{repo}/releases/{release_id}/assets", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ReposUploadReleaseAssetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.releaseAsset = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
