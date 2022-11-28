import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.bitbucket.org/2.0"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteAddon - Deletes the application for the user.
     *
     * This endpoint is intended to be used by Bitbucket Connect apps
     * and only supports JWT authentication -- that is how Bitbucket
     * identifies the particular installation of the app. Developers
     * with applications registered in the "Develop Apps" section
     * of Bitbucket Marketplace need not use this endpoint as
     * updates for those applications can be sent out via the
     * UI of that section.
     *
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>"
     * ```
    **/
    deleteAddon(req: operations.DeleteAddonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonResponse>;
    /**
     * deleteAddonLinkersLinkerKeyValues - Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
    **/
    deleteAddonLinkersLinkerKeyValues(req: operations.DeleteAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesResponse>;
    /**
     * deleteAddonLinkersLinkerKeyValuesValueId - Delete a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
    **/
    deleteAddonLinkersLinkerKeyValuesValueId(req: operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlug - Deletes the repository. This is an irreversible operation.
     *
     * This does not affect its forks.
    **/
    deleteRepositoriesWorkspaceRepoSlug(req: operations.DeleteRepositoriesWorkspaceRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Deletes an existing branch restriction rule.
    **/
    deleteRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove - Redact the authenticated user's approval of the specified commit.
     *
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(req: operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId - This deletes a deploy key from a repository.
     *
     * Example:
     * ```
     * $ curl -XDELETE \
     * -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
     * ```
    **/
    deleteRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugDownloadsFilename - Deletes the specified download artifact from the repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugDownloadsFilename(req: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugHooksUid - Deletes the specified webhook subscription from the given
     * repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugHooksUid(req: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueId - Deletes the specified issue. This requires write access to the
     * repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Deletes an attachment.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Deletes the specified comment.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Retract your vote.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Stop watching this issue.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Redact the authenticated user's approval of the specified pull
     * request.
    **/
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Deletes a specific pull request comment.
    **/
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugRefsBranchesName - Delete a branch in the specified repository.
     *
     * The main branch is not allowed to be deleted and will return a 400
     * response.
     *
     * The branch name should not include any prefixes (e.g.
     * refs/heads).
    **/
    deleteRepositoriesWorkspaceRepoSlugRefsBranchesName(req: operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugRefsTagsName - Delete a tag in the specified repository.
     *
     * For Git, the tag name should not include any prefixes (e.g. refs/tags).
     * For Mercurial, this adds a commit to the main branch that removes the
     * specified tag.
    **/
    deleteRepositoriesWorkspaceRepoSlugRefsTagsName(req: operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugRefsTagsNameResponse>;
    /**
     * deleteSnippetsWorkspaceEncodedId - Deletes a snippet and returns an empty response.
    **/
    deleteSnippetsWorkspaceEncodedId(req: operations.DeleteSnippetsWorkspaceEncodedIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnippetsWorkspaceEncodedIdResponse>;
    /**
     * deleteSnippetsWorkspaceEncodedIdCommentsCommentId - Deletes a snippet comment.
     *
     * Comments can only be removed by their author.
    **/
    deleteSnippetsWorkspaceEncodedIdCommentsCommentId(req: operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse>;
    /**
     * deleteSnippetsWorkspaceEncodedIdNodeId - Deletes the snippet.
     *
     * Note that this only works for versioned URLs that point to the latest
     * commit of the snippet. Pointing to an older commit results in a 405
     * status code.
     *
     * To delete a snippet, regardless of whether or not concurrent changes
     * are being made to it, use `DELETE /snippets/{encoded_id}` instead.
    **/
    deleteSnippetsWorkspaceEncodedIdNodeId(req: operations.DeleteSnippetsWorkspaceEncodedIdNodeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnippetsWorkspaceEncodedIdNodeIdResponse>;
    /**
     * deleteSnippetsWorkspaceEncodedIdWatch - Used to stop watching a specific snippet. Returns 204 (No Content)
     * to indicate success.
    **/
    deleteSnippetsWorkspaceEncodedIdWatch(req: operations.DeleteSnippetsWorkspaceEncodedIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnippetsWorkspaceEncodedIdWatchResponse>;
    /**
     * deleteTeamsUsernameHooksUid - Deletes the specified webhook subscription from the given team
     * account.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteTeamsUsernameHooksUid(req: operations.DeleteTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsUsernameHooksUidResponse>;
    /**
     * deleteTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteTeamsUsernameProjectsProjectKey(req: operations.DeleteTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * deleteUsersSelectedUserHooksUid - Deletes the specified webhook subscription from the given user
     * account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    deleteUsersSelectedUserHooksUid(req: operations.DeleteUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersSelectedUserHooksUidResponse>;
    /**
     * deleteUsersSelectedUserSshKeysKeyId - Deletes a specific SSH public key from a user's account
     *
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
     * ```
    **/
    deleteUsersSelectedUserSshKeysKeyId(req: operations.DeleteUsersSelectedUserSshKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersSelectedUserSshKeysKeyIdResponse>;
    /**
     * deleteWorkspacesWorkspaceHooksUid - Deletes the specified webhook subscription from the given workspace.
    **/
    deleteWorkspacesWorkspaceHooksUid(req: operations.DeleteWorkspacesWorkspaceHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceHooksUidResponse>;
    /**
     * deleteWorkspacesWorkspaceProjectsProjectKey - Deletes this project. This is an irreversible operation.
     *
     * You cannot delete a project that still contains repositories.
     * To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
     * or transfer the repositories first.
     *
     * Example:
     * ```
     * $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
     * ```
    **/
    deleteWorkspacesWorkspaceProjectsProjectKey(req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * getAddonLinkers - Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
     * for the authenticated application.
    **/
    getAddonLinkers(req: operations.GetAddonLinkersRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersResponse>;
    /**
     * getAddonLinkersLinkerKey - Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
     * for the authenticated application.
    **/
    getAddonLinkersLinkerKey(req: operations.GetAddonLinkersLinkerKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyResponse>;
    /**
     * getAddonLinkersLinkerKeyValues - Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
     * specified linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    getAddonLinkersLinkerKeyValues(req: operations.GetAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesResponse>;
    /**
     * getAddonLinkersLinkerKeyValuesValueId - Get a single [linker](/cloud/bitbucket/modules/linker/) value
     * of the authenticated application.
    **/
    getAddonLinkersLinkerKeyValuesValueId(req: operations.GetAddonLinkersLinkerKeyValuesValueIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAddonLinkersLinkerKeyValuesValueIdResponse>;
    /**
     * getHookEvents - Returns the webhook resource or subject types on which webhooks can
     * be registered.
     *
     * Each resource/subject type contains an `events` link that returns the
     * paginated list of specific events each individual subject type can
     * emit.
     *
     * This endpoint is publicly accessible and does not require
     * authentication or scopes.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/hook_events
     *
     * {
     *     "repository": {
     *         "links": {
     *             "events": {
     *                 "href": "https://api.bitbucket.org/2.0/hook_events/repository"
     *             }
     *         }
     *     },
     *     "team": {
     *         "links": {
     *             "events": {
     *                 "href": "https://api.bitbucket.org/2.0/hook_events/team"
     *             }
     *         }
     *     },
     *     "user": {
     *         "links": {
     *             "events": {
     *                 "href": "https://api.bitbucket.org/2.0/hook_events/user"
     *             }
     *         }
     *     }
     * }
     * ```
    **/
    getHookEvents(req: operations.GetHookEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetHookEventsResponse>;
    /**
     * getHookEventsSubjectType - Returns a paginated list of all valid webhook events for the
     * specified entity.
     * **The team and user webhooks are deprecated, and you should use workspace instead.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * This is public data that does not require any scopes or authentication.
     *
     * Example:
     *
     * NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
     * We return the same structure for the other `subject_type` objects.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/hook_events/workspace
     * {
     *     "page": 1,
     *     "pagelen": 30,
     *     "size": 21,
     *     "values": [
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository push occurs",
     *             "event": "repo:push",
     *             "label": "Push"
     *         },
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository fork occurs",
     *             "event": "repo:fork",
     *             "label": "Fork"
     *         },
     *         {
     *             "category": "Repository",
     *             "description": "Whenever a repository import occurs",
     *             "event": "repo:imported",
     *             "label": "Import"
     *         },
     *         ...
     *         {
     *             "category":"Pull Request",
     *             "label":"Approved",
     *             "description":"When someone has approved a pull request",
     *             "event":"pullrequest:approved"
     *         },
     *     ]
     * }
     * ```
    **/
    getHookEventsSubjectType(req: operations.GetHookEventsSubjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetHookEventsSubjectTypeResponse>;
    /**
     * getPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    getPullrequestsSelectedUser(req: operations.GetPullrequestsSelectedUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsSelectedUserResponse>;
    /**
     * getRepositories - Returns a paginated list of all public repositories.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../meta/filtering) for more details.
    **/
    getRepositories(req: operations.GetRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesResponse>;
    /**
     * getRepositoriesWorkspace - Returns a paginated list of all repositories owned by the specified
     * account or UUID.
     *
     * The result can be narrowed down based on the authenticated user's role.
     *
     * E.g. with `?role=contributor`, only those repositories that the
     * authenticated user has write access to are returned (this includes any
     * repo the user is an admin on, as that implies write access).
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../meta/filtering) for more details.
    **/
    getRepositoriesWorkspace(req: operations.GetRepositoriesWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlug - Returns the object describing this repository.
    **/
    getRepositoriesWorkspaceRepoSlug(req: operations.GetRepositoriesWorkspaceRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugBranchRestrictions - Returns a paginated list of all branch restrictions on the
     * repository.
    **/
    getRepositoriesWorkspaceRepoSlugBranchRestrictions(req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Returns a specific branch restriction rule.
    **/
    getRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugBranchingModel - Return the branching model as applied to the repository. This view is
     * read-only. The branching model settings can be changed using the
     * [settings](branching-model/settings#get) API.
     *
     * The returned object:
     *
     * 1. Always has a `development` property. `development.branch` contains
     *    the actual repository branch object that is considered to be the
     *    `development` branch. `development.branch` will not be present
     *    if it does not exist.
     * 2. Might have a `production` property. `production` will not
     *    be present when `production` is disabled.
     *    `production.branch` contains the actual branch object that is
     *    considered to be the `production` branch. `production.branch` will
     *    not be present if it does not exist.
     * 3. Always has a `branch_types` array which contains all enabled branch
     *    types.
     *
     * Example body:
     *
     * ```
     * {
     *   "development": {
     *     "name": "master",
     *     "branch": {
     *       "type": "branch",
     *       "name": "master",
     *       "target": {
     *         "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
     *       }
     *     },
     *     "use_mainbranch": true
     *   },
     *   "production": {
     *     "name": "production",
     *     "branch": {
     *       "type": "branch",
     *       "name": "production",
     *       "target": {
     *         "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
     *       }
     *     },
     *     "use_mainbranch": false
     *   },
     *   "branch_types": [
     *     {
     *       "kind": "release",
     *       "prefix": "release/"
     *     },
     *     {
     *       "kind": "hotfix",
     *       "prefix": "hotfix/"
     *     },
     *     {
     *       "kind": "feature",
     *       "prefix": "feature/"
     *     },
     *     {
     *       "kind": "bugfix",
     *       "prefix": "bugfix/"
     *     }
     *   ],
     *   "type": "branching_model",
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/.../branching-model"
     *     }
     *   }
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugBranchingModel(req: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugBranchingModelSettings - Return the branching model configuration for a repository. The returned
     * object:
     *
     * 1. Always has a `development` property for the development branch.
     * 2. Always a `production` property for the production branch. The
     *    production branch can be disabled.
     * 3. The `branch_types` contains all the branch types.
     *
     * This is the raw configuration for the branching model. A client
     * wishing to see the branching model with its actual current branches may
     * find the [active model API](../branching-model#get) more useful.
     *
     * Example body:
     *
     * ```
     * {
     *   "development": {
     *     "is_valid": true,
     *     "name": null,
     *     "use_mainbranch": true
     *   },
     *   "production": {
     *     "is_valid": true,
     *     "name": "production",
     *     "use_mainbranch": false,
     *     "enabled": false
     *   },
     *   "branch_types": [
     *     {
     *       "kind": "release",
     *       "enabled": true,
     *       "prefix": "release/"
     *     },
     *     {
     *       "kind": "hotfix",
     *       "enabled": true,
     *       "prefix": "hotfix/"
     *     },
     *     {
     *       "kind": "feature",
     *       "enabled": true,
     *       "prefix": "feature/"
     *     },
     *     {
     *       "kind": "bugfix",
     *       "enabled": false,
     *       "prefix": "bugfix/"
     *     }
     *   ],
     *   "type": "branching_model_settings",
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/.../branching-model/settings"
     *     }
     *   }
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugBranchingModelSettings(req: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommit - Returns the specified commit.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
     * {
     *     "rendered": {
     *         "message": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *         }
     *     },
     *     "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
     *     "repository": {
     *         "name": "geordi",
     *         "type": "repository",
     *         "full_name": "bitbucket/geordi",
     *         "links": {
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bitbucket/geordi"
     *             },
     *             "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
     *             }
     *         },
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "comments": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
     *         },
     *         "patch": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "html": {
     *             "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "diff": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
     *         },
     *         "approve": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
     *         },
     *         "statuses": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
     *         }
     *     },
     *     "author": {
     *         "raw": "Brodie Rao <a@b.c>",
     *         "type": "author",
     *         "user": {
     *             "display_name": "Brodie Rao",
     *             "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
     *                 },
     *                 "avatar": {
     *                     "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
     *                 }
     *             },
     *             "type": "user",
     *             "nickname": "brodie",
     *             "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
     *         }
     *     },
     *     "summary": {
     *         "raw": "Add a GEORDI_OUTPUT_DIR setting",
     *         "markup": "markdown",
     *         "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
     *         "type": "rendered"
     *     },
     *     "participants": [],
     *     "parents": [
     *         {
     *             "type": "commit",
     *             "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 },
     *                 "html": {
     *                     "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
     *                 }
     *             }
     *         }
     *     ],
     *     "date": "2012-07-16T19:37:54+00:00",
     *     "message": "Add a GEORDI_OUTPUT_DIR setting",
     *     "type": "commit"
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugCommitCommit(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitComments - Returns the commit's comments.
     *
     * This includes both global and inline comments.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
    **/
    getRepositoriesWorkspaceRepoSlugCommitCommitComments(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId - Returns the specified commit comment.
    **/
    getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
    **/
    getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
    **/
    getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommits - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/
     *
     * Returns all commits in the repo in topological order (newest commit
     * first). All branches and tags are included (similar to
     * `git log --all`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master
     *
     * Returns all commits in the repo that are not on master
     * (similar to `git log --all ^master`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
     * `fubar` (similar to `git log foo bar ^fu ^fubar`).
     *
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `foo` or `bar`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     *
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     *
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    getRepositoriesWorkspaceRepoSlugCommits(req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugCommitsRevision - These are the repository's commits. They are paginated and returned
     * in reverse chronological order, similar to the output of `git log`.
     * Like these tools, the DAG can be filtered.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/master
     *
     * Returns all commits on rev `master` (similar to `git log master`).
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master
     *
     * Returns all commits on ref `dev` or `foo`, except those that are reachable on
     * `master` (similar to `git log dev foo ^master`).
     *
     * An optional `path` parameter can be specified that will limit the
     * results to commits that affect that path. `path` can either be a file
     * or a directory. If a directory is specified, commits are returned that
     * have modified any file in the directory tree rooted by `path`. It is
     * important to note that if the `path` parameter is specified, the commits
     * returned by this endpoint may no longer be a DAG, parent commits that
     * do not modify the path will be omitted from the response.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master
     *
     * Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
     * that changed the file README.md.
     *
     * ## GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master
     *
     * Returns all commits that are on refs `dev` or `foo`, but not on `master`
     * that changed to a file in any file in the directory src or its children.
     *
     * Because the response could include a very large number of commits, it
     * is paginated. Follow the 'next' link in the response to navigate to the
     * next page of commits. As with other paginated resources, do not
     * construct your own links.
     *
     * When the include and exclude parameters are more than can fit in a
     * query string, clients can use a `x-www-form-urlencoded` POST instead.
    **/
    getRepositoriesWorkspaceRepoSlugCommitsRevision(req: operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugComponents - Returns the components that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugComponents(req: operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugComponentsComponentId - Returns the specified issue tracker component object.
    **/
    getRepositoriesWorkspaceRepoSlugComponentsComponentId(req: operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
     *
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created.
    **/
    getRepositoriesWorkspaceRepoSlugDefaultReviewers(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
     *
     * This can be used to test whether a user is among the repository's
     * default reviewers list. A 404 indicates that that specified user is not
     * a default reviewer.
    **/
    getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDeployKeys - Returns all deploy-keys belonging to a repository.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys
     *
     * Output:
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "id": 123,
     *             "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *             "label": "mykey",
     *             "type": "deploy_key",
     *             "created_on": "2018-08-15T23:50:59.993890+00:00",
     *             "repository": {
     *                 "full_name": "mleu/test",
     *                 "name": "test",
     *                 "type": "repository",
     *                 "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *             },
     *             "links":{
     *                 "self":{
     *                     "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
     *                 }
     *             }
     *             "last_used": null,
     *             "comment": "mleu@C02W454JHTD8"
     *         }
     *     ],
     *     "page": 1,
     *     "size": 1
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Returns the deploy key belonging to a specific key.
     *
     * Example:
     * ```
     * $ curl -H "Authorization <auth header>" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234
     *
     * Output:
     * {
     *     "comment": "mleu@C02W454JHTD8",
     *     "last_used": null,
     *     "links": {
     *         "self": {
     *             "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
     *         }
     *     },
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "label": "mykey",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "id": 1234,
     *     "type": "deploy_key"
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDiffSpec - Produces a raw git-style diff.
     *
     * #### Single commit spec
     *
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     *
     * #### Two commit spec
     *
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     *
     * The two commits are interpreted as follows:
     *
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     *
     * #### Comparison to patches
     *
     * While similar to patches, diffs:
     *
     * * Don't have a commit header (username, commit message, etc)
     * * Support the optional `path=foo/bar.py` query param to filter
     *   the diff to just that one file diff
     *
     * #### Response
     *
     * The raw diff is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    getRepositoriesWorkspaceRepoSlugDiffSpec(req: operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDiffstatSpec - Produces a response in JSON format with a record for every path
     * modified, including information on the type of the change and the
     * number of lines added and removed.
     *
     * #### Single commit spec
     *
     * If the `spec` argument to this API is a single commit, the diff is
     * produced against the first parent of the specified commit.
     *
     * #### Two commit spec
     *
     * Two commits separated by `..` may be provided as the `spec`, e.g.,
     * `3a8b42..9ff173`. When two commits are provided and the `merge` query
     * parameter is true or absent, this API produces a 3-way diff, also
     * referred to as a merge diff. This is equivalent to merging the left
     * branch into the right branch and then computing the diff of the merge
     * commit against its first parent (the right branch). These diffs have
     * the same behavior as pull requests that show the 3-way diff, such as
     * the [Bitbucket Cloud Pull
     * Request](https://blog.developer.atlassian.com/a-better-pull-request/).
     * For a simple git-style diff, add `merge=false` to the query.
     *
     * The two commits are interpreted as follows:
     *
     * * First commit: the commit containing the changes we wish to preview
     * * Second commit: the commit representing the state to which we want to
     *   compare the first commit
     * * **Note**: This is the opposite of the order used in `git diff`.
     *
     * #### Sample output
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
     * {
     *     "pagelen": 500,
     *     "values": [
     *         {
     *             "type": "diffstat",
     *             "status": "modified",
     *             "lines_removed": 1,
     *             "lines_added": 2,
     *             "old": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
     *                     }
     *                 }
     *             },
     *             "new": {
     *                 "path": "setup.py",
     *                 "escaped_path": "setup.py",
     *                 "type": "commit_file",
     *                 "links": {
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
     *                     }
     *                 }
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 1
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugDiffstatSpec(req: operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDownloads - Returns a list of download links associated with the repository.
    **/
    getRepositoriesWorkspaceRepoSlugDownloads(req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDownloadsFilename - Return a redirect to the contents of a download artifact.
     *
     * This endpoint returns the actual file contents and not the artifact's
     * metadata.
     *
     *     $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
     *     Hello World
    **/
    getRepositoriesWorkspaceRepoSlugDownloadsFilename(req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath - Returns a paginated list of commits that modified the specified file.
     *
     * Commits are returned in reverse chronological order. This is roughly
     * equivalent to the following commands:
     *
     *     $ git log --follow --date-order <sha> <path>
     *
     *     $ hg log --follow <path>
     *
     * By default, Bitbucket will follow renames and the path name in the
     * returned entries reflects that. This can be turned off using the
     * `?renames=false` query parameter.
     *
     * Results are returned in descending chronological order by default, and
     * like most endpoints you can
     * [filter and sort](../../../../../../meta/filtering) the response to
     * only provide exactly the data you want.
     *
     * For example, if you wanted to find commits made before 2011-05-18
     * against a file named `README.rst`, but you only wanted the path and
     * date, your query would look like this:
     *
     * ```
     * $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\
     *   '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18'
     * {
     *   "values": [
     *     {
     *       "commit": {
     *         "date": "2011-05-17T07:32:09+00:00"
     *       },
     *       "path": "README.rst"
     *     },
     *     {
     *       "commit": {
     *         "date": "2011-05-16T06:33:28+00:00"
     *       },
     *       "path": "README.txt"
     *     },
     *     {
     *       "commit": {
     *         "date": "2011-05-16T06:15:39+00:00"
     *       },
     *       "path": "README.txt"
     *     }
     *   ]
     * }
     * ```
     *
     * In the response you can see that the file was renamed to `README.rst`
     * by the commit made on 2011-05-16, and was previously named `README.txt`.
    **/
    getRepositoriesWorkspaceRepoSlugFilehistoryCommitPath(req: operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugForks - Returns a paginated list of all the forks of the specified
     * repository.
    **/
    getRepositoriesWorkspaceRepoSlugForks(req: operations.GetRepositoriesWorkspaceRepoSlugForksRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugForksResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugHooks - Returns a paginated list of webhooks installed on this repository.
    **/
    getRepositoriesWorkspaceRepoSlugHooks(req: operations.GetRepositoriesWorkspaceRepoSlugHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugHooksUid - Returns the webhook with the specified id installed on the specified
     * repository.
    **/
    getRepositoriesWorkspaceRepoSlugHooksUid(req: operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssues - Returns the issues in the issue tracker.
    **/
    getRepositoriesWorkspaceRepoSlugIssues(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip - This endpoint is used to poll for the progress of an issue export
     * job and return the zip file after the job is complete.
     * As long as the job is running, this will return a 200 response
     * with in the response body a description of the current status.
     *
     * After the job has been scheduled, but before it starts executing, this
     * endpoint's response is:
     *
     * {
     *  "type": "issue_job_status",
     *  "status": "ACCEPTED",
     *  "phase": "Initializing",
     *  "total": 0,
     *  "count": 0,
     *  "pct": 0
     * }
     *
     *
     * Then once it starts running, it becomes:
     *
     * {
     *  "type": "issue_job_status",
     *  "status": "STARTED",
     *  "phase": "Attachments",
     *  "total": 15,
     *  "count": 11,
     *  "pct": 73
     * }
     *
     * Once the job has successfully completed, it returns a stream of the zip file.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesImport - When using GET, this endpoint reports the status of the current import task. Request example:
     *
     * ```
     * $ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     *
     * After the job has been scheduled, but before it starts executing, this endpoint's response is:
     *
     * ```
     * < HTTP/1.1 202 Accepted
     * {
     *     "type": "issue_job_status",
     *     "status": "PENDING",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
     *
     * Once it starts running, it is a 202 response with status STARTED and progress filled.
     *
     * After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesImport(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueId - Returns the specified issue.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Returns all attachments for this issue.
     *
     * This returns the files' meta data. This does not return the files'
     * actual contents.
     *
     * The files are always ordered by their upload date.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Returns the contents of the specified file attachment.
     *
     * Note that this endpoint does not return a JSON response, but instead
     * returns a redirect pointing to the actual file that in turn will return
     * the raw contents.
     *
     * The redirect URL contains a one-time token that has a limited lifetime.
     * As a result, the link should not be persisted, stored, or shared.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Returns the list of all changes that have been made to the specified
     * issue. Changes are returned in chronological order with the oldest
     * change first.
     *
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
     *
     * Note that this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
     * for details.
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .
     *
     * {
     *   "pagelen": 20,
     *   "values": [
     *     {
     *       "changes": {
     *         "priority": {
     *           "new": "trivial",
     *           "old": "major"
     *         },
     *         "assignee": {
     *           "new": "",
     *           "old": "evzijst"
     *         },
     *         "assignee_account_id": {
     *           "new": "",
     *           "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *         },
     *         "kind": {
     *           "new": "enhancement",
     *           "old": "bug"
     *         }
     *       },
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
     *         }
     *       },
     *       "issue": {
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
     *           }
     *         },
     *         "type": "issue",
     *         "id": 1,
     *         "repository": {
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/evzijst/dogslow"
     *             },
     *             "avatar": {
     *               "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
     *             }
     *           },
     *           "type": "repository",
     *           "name": "dogslow",
     *           "full_name": "evzijst/dogslow",
     *           "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
     *         },
     *         "title": "Updated title"
     *       },
     *       "created_on": "2018-03-03T00:35:28.353630+00:00",
     *       "user": {
     *         "username": "evzijst",
     *         "nickname": "evzijst",
     *         "display_name": "evzijst",
     *         "type": "user",
     *         "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/evzijst"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/evzijst/"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket.org/account/evzijst/avatar/32/"
     *           }
     *         }
     *       },
     *       "message": {
     *         "raw": "Removed assignee, changed kind and priority.",
     *         "markup": "markdown",
     *         "html": "<p>Removed assignee, changed kind and priority.</p>",
     *         "type": "rendered"
     *       },
     *       "type": "issue_change",
     *       "id": 2
     *     }
     *   ],
     *   "page": 1
     * }
     * ```
     *
     * Changes support [filtering and sorting](../../../meta/filtering) that
     * can be used to search for specific changes. For instance, to see
     * when an issue transitioned to "resolved":
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
     *    -G --data-urlencode='q=changes.state.new = "resolved"'
     * ```
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
     *
     * N.B.
     *
     * The `changes.assignee` and `changes.assignee_account_id` fields are not
     * a `user` object. Instead, they contain the raw `username` and
     * `account_id` of the user. This is to protect the integrity of the audit
     * log even after a user account gets deleted.
     *
     * The `changes.assignee` field is deprecated will disappear in the
     * future. Use `changes.assignee_account_id` instead.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId - Returns the specified issue change object.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Returns a paginated list of all comments that were made on the
     * specified issue.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more details.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Returns the specified issue comment object.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Check whether the authenticated user has voted for this issue.
     * A 204 status code indicates that the user has voted, while a 404
     * implies they haven't.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Indicated whether or not the authenticated user is watching this
     * issue.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugMergeBaseRevspec - Returns the best common ancestor between two commits, specified in a revspec
     * of 2 commits (e.g. 3a8b42..9ff173).
     *
     * If more than one best common ancestor exists, only one will be returned. It is
     * unspecified which will be returned.
    **/
    getRepositoriesWorkspaceRepoSlugMergeBaseRevspec(req: operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugMilestones - Returns the milestones that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugMilestones(req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId - Returns the specified issue tracker milestone object.
    **/
    getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPatchSpec - Produces a raw patch for a single commit (diffed against its first
     * parent), or a patch-series for a revspec of 2 commits (e.g.
     * `3a8b42..9ff173` where the first commit represents the source and the
     * second commit the destination).
     *
     * In case of the latter (diffing a revspec), a patch series is returned
     * for the commits on the source branch (`3a8b42` and its ancestors in
     * our example). For Mercurial, a single patch is returned that combines
     * the changes of all commits on the source branch.
     *
     * While similar to diffs, patches:
     *
     * * Have a commit header (username, commit message, etc)
     * * Do not support the `path=foo/bar.py` query parameter
     *
     * The raw patch is returned as-is, in whatever encoding the files in the
     * repository use. It is not decoded into unicode. As such, the
     * content-type is `text/plain`.
    **/
    getRepositoriesWorkspaceRepoSlugPatchSpec(req: operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse>;
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuid(req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidResponse>;
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReports(req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsResponse>;
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCases(req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesResponse>;
    getRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasons(req: operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequests(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Returns the specified pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Returns a paginated list of the pull request's comments.
     *
     * This includes both global, inline comments and replies.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more
     * details.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Returns a specific pull request comment.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits - Returns a paginated list of the pull request's commits.
     *
     * These are the commits that are being merged into the destination
     * branch when the pull requests gets accepted.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId - When merging a pull request takes too long, the client receives a
     * task ID along with a 202 status code. The task ID can be used in a call
     * to this endpoint to check the status of a merge task.
     *
     * ```
     * curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
     * ```
     *
     * If the merge task is not yet finished, a PENDING status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "PENDING",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     }
     * }
     * ```
     *
     * If the merge was successful, a SUCCESS status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "SUCCESS",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     },
     *     "merge_result": <the merged pull request object>
     * }
     * ```
     *
     * If the merge task failed, an error will be returned.
     *
     * ```
     * {
     *     "type": "error",
     *     "error": {
     *         "message": "<error message>"
     *     }
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
     * with the revspec that corresponds to pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
     * request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugRefs - Returns the branches and tags in the repository.
     *
     * By default, results will be in the order the underlying source control system returns them and identical to
     * the ordering one sees when running "$ git show-ref". Note that this follows simple
     * lexical ordering of the ref names.
     *
     * This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are
     * sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2",
     * "branch10", "v9", "v10", "v11"].
     *
     * Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
     * Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    getRepositoriesWorkspaceRepoSlugRefs(req: operations.GetRepositoriesWorkspaceRepoSlugRefsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugRefsBranches - Returns a list of all open branches within the specified repository.
     *         Results will be in the order the source control manager returns them.
     *
     *         ```
     *         $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1 | jq .
     *         {
     *           "pagelen": 1,
     *           "size": 187,
     *           "values": [
     *             {
     *               "name": "issue-9.3/AUI-5343-assistive-class",
     *               "links": {
     *                 "commits": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/issue-9.3/AUI-5343-assistive-class"
     *                 },
     *                 "self": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/issue-9.3/AUI-5343-assistive-class"
     *                 },
     *                 "html": {
     *                   "href": "https://bitbucket.org/atlassian/aui/branch/issue-9.3/AUI-5343-assistive-class"
     *                 }
     *               },
     *               "default_merge_strategy": "squash",
     *               "merge_strategies": [
     *                 "merge_commit",
     *                 "squash",
     *                 "fast_forward"
     *               ],
     *               "type": "branch",
     *               "target": {
     *                 "hash": "e5d1cde9069fcb9f0af90403a4de2150c125a148",
     *                 "repository": {
     *                   "links": {
     *                     "self": {
     *                       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
     *                     },
     *                     "html": {
     *                       "href": "https://bitbucket.org/atlassian/aui"
     *                     },
     *                     "avatar": {
     *                       "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
     *                     }
     *                   },
     *                   "type": "repository",
     *                   "name": "aui",
     *                   "full_name": "atlassian/aui",
     *                   "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
     *                 },
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "comments": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/comments"
     *                   },
     *                   "patch": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/atlassian/aui/commits/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "diff": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e5d1cde9069fcb9f0af90403a4de2150c125a148"
     *                   },
     *                   "approve": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/approve"
     *                   },
     *                   "statuses": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e5d1cde9069fcb9f0af90403a4de2150c125a148/statuses"
     *                   }
     *                 },
     *                 "author": {
     *                   "raw": "Marcin Konopka <mkonopka@atlassian.com>",
     *                   "type": "author",
     *                   "user": {
     *                     "display_name": "Marcin Konopka",
     *                     "uuid": "{47cc24f4-2a05-4420-88fe-0417535a110a}",
     *                     "links": {
     *                       "self": {
     *                         "href": "https://api.bitbucket.org/2.0/users/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D"
     *                       },
     *                       "html": {
     *                         "href": "https://bitbucket.org/%7B47cc24f4-2a05-4420-88fe-0417535a110a%7D/"
     *                       },
     *                       "avatar": {
     *                         "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MK-1.png"
     *                       }
     *                     },
     *                     "nickname": "Marcin Konopka",
     *                     "type": "user",
     *                     "account_id": "60113d2b47a9540069f4de03"
     *                   }
     *                 },
     *                 "parents": [
     *                   {
     *                     "hash": "87f7fc92b00464ae47b13ef65c91884e4ac9be51",
     *                     "type": "commit",
     *                     "links": {
     *                       "self": {
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
     *                       },
     *                       "html": {
     *                         "href": "https://bitbucket.org/atlassian/aui/commits/87f7fc92b00464ae47b13ef65c91884e4ac9be51"
     *                       }
     *                     }
     *                   }
     *                 ],
     *                 "date": "2021-04-13T13:44:49+00:00",
     *                 "message": "wip
     * ",
     *                 "type": "commit"
     *               }
     *             }
     *           ],
     *           "page": 1,
     *           "next": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches?pagelen=1&page=2"
     *         }
     *         ```
     *
     *         Branches support [filtering and sorting](../../../../../meta/filtering)
     *         that can be used to search for specific branches. For instance, to find
     *         all branches that have "stab" in their name:
     *
     *         ```
     *         curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"'
     *         ```
     *
     *         By default, results will be in the order the underlying source control system returns them and identical to
     *         the ordering one sees when running "$ hg branches" or "$ git branch --list". Note that this follows simple
     *         lexical ordering of the ref names.
     *
     *         This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
     *         sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
     *
     *         Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name,
     *         Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    getRepositoriesWorkspaceRepoSlugRefsBranches(req: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugRefsBranchesName - Returns a branch object within the specified repository.
     *
     *         ```
     *         $ curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master | jq .
     *         {
     *           "name": "master",
     *           "links": {
     *             "commits": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commits/master"
     *             },
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches/master"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/atlassian/aui/branch/master"
     *             }
     *           },
     *           "default_merge_strategy": "squash",
     *           "merge_strategies": [
     *             "merge_commit",
     *             "squash",
     *             "fast_forward"
     *           ],
     *           "type": "branch",
     *           "target": {
     *             "hash": "e7d158ff7ed5538c28f94cd97a9ad569680fc94e",
     *             "repository": {
     *               "links": {
     *                 "self": {
     *                   "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui"
     *                 },
     *                 "html": {
     *                   "href": "https://bitbucket.org/atlassian/aui"
     *                 },
     *                 "avatar": {
     *                   "href": "https://bytebucket.org/ravatar/%7B585074de-7b60-4fd1-81ed-e0bc7fafbda5%7D?ts=86317"
     *                 }
     *               },
     *               "type": "repository",
     *               "name": "aui",
     *               "full_name": "atlassian/aui",
     *               "uuid": "{585074de-7b60-4fd1-81ed-e0bc7fafbda5}"
     *             },
     *             "links": {
     *               "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "comments": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/comments"
     *               },
     *               "patch": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/patch/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "html": {
     *                 "href": "https://bitbucket.org/atlassian/aui/commits/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "diff": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/diff/e7d158ff7ed5538c28f94cd97a9ad569680fc94e"
     *               },
     *               "approve": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/approve"
     *               },
     *               "statuses": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/e7d158ff7ed5538c28f94cd97a9ad569680fc94e/statuses"
     *               }
     *             },
     *             "author": {
     *               "raw": "psre-renovate-bot <psre-renovate-bot@atlassian.com>",
     *               "type": "author",
     *               "user": {
     *                 "display_name": "psre-renovate-bot",
     *                 "uuid": "{250a442a-3ab3-4fcb-87c3-3c8f3df65ec7}",
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/%7B250a442a-3ab3-4fcb-87c3-3c8f3df65ec7%7D/"
     *                   },
     *                   "avatar": {
     *                     "href": "https://secure.gravatar.com/avatar/6972ee037c9f36360170a86f544071a2?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FP-3.png"
     *                   }
     *                 },
     *                 "nickname": "Renovate Bot",
     *                 "type": "user",
     *                 "account_id": "5d5355e8c6b9320d9ea5b28d"
     *               }
     *             },
     *             "parents": [
     *               {
     *                 "hash": "eab868a309e75733de80969a7bed1ec6d4651e06",
     *                 "type": "commit",
     *                 "links": {
     *                   "self": {
     *                     "href": "https://api.bitbucket.org/2.0/repositories/atlassian/aui/commit/eab868a309e75733de80969a7bed1ec6d4651e06"
     *                   },
     *                   "html": {
     *                     "href": "https://bitbucket.org/atlassian/aui/commits/eab868a309e75733de80969a7bed1ec6d4651e06"
     *                   }
     *                 }
     *               }
     *             ],
     *             "date": "2021-04-12T06:44:38+00:00",
     *             "message": "Merged in issue/NONE-renovate-master-babel-monorepo (pull request #2883)
     *
     * chore(deps): update babel monorepo to v7.13.15 (master)
     *
     * Approved-by: Chris "Daz" Darroch
     * ",
     *             "type": "commit"
     *           }
     *         }
     *         ```
     *
     *         This call requires authentication. Private repositories require the
     *         caller to authenticate with an account that has appropriate
     *         authorization.
     *
     *         For Git, the branch name should not include any prefixes (e.g.
     *         refs/heads).
    **/
    getRepositoriesWorkspaceRepoSlugRefsBranchesName(req: operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugRefsTags - Returns the tags in the repository.
     *
     * By default, results will be in the order the underlying source control system returns them and identical to
     * the ordering one sees when running "$ hg tags" or "$ git tag --list". Note that this follows simple
     * lexical ordering of the ref names.
     *
     * This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are
     * sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"].
     *
     * Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name,
     * Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
    **/
    getRepositoriesWorkspaceRepoSlugRefsTags(req: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsTagsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugRefsTagsName - Returns the specified tag.
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq .
     * {
     *   "name": "3.8",
     *   "links": {
     *     "commits": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8"
     *     },
     *     "self": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8"
     *     },
     *     "html": {
     *       "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8"
     *     }
     *   },
     *   "tagger": {
     *     "raw": "Matt Mackall <mpm@selenic.com>",
     *     "type": "author",
     *     "user": {
     *       "username": "mpmselenic",
     *       "nickname": "mpmselenic",
     *       "display_name": "Matt Mackall",
     *       "type": "user",
     *       "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}",
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/users/mpmselenic"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/mpmselenic/"
     *         },
     *         "avatar": {
     *           "href": "https://bitbucket.org/account/mpmselenic/avatar/32/"
     *         }
     *       }
     *     }
     *   },
     *   "date": "2016-05-01T18:52:25+00:00",
     *   "message": "Added tag 3.8 for changeset f85de28eae32",
     *   "type": "tag",
     *   "target": {
     *     "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069",
     *     "repository": {
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/seanfarley/hg"
     *         },
     *         "avatar": {
     *           "href": "https://bitbucket.org/seanfarley/hg/avatar/32/"
     *         }
     *       },
     *       "type": "repository",
     *       "name": "hg",
     *       "full_name": "seanfarley/hg",
     *       "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}"
     *     },
     *     "links": {
     *       "self": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "comments": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments"
     *       },
     *       "patch": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "html": {
     *         "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "diff": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069"
     *       },
     *       "approve": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve"
     *       },
     *       "statuses": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses"
     *       }
     *     },
     *     "author": {
     *       "raw": "Sean Farley <sean@farley.io>",
     *       "type": "author",
     *       "user": {
     *         "username": "seanfarley",
     *         "nickname": "seanfarley",
     *         "display_name": "Sean Farley",
     *         "type": "user",
     *         "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/seanfarley"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/seanfarley/"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket.org/account/seanfarley/avatar/32/"
     *           }
     *         }
     *       }
     *     },
     *     "parents": [
     *       {
     *         "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2",
     *         "type": "commit",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2"
     *           }
     *         }
     *       }
     *     ],
     *     "date": "2016-05-01T04:21:17+00:00",
     *     "message": "debian: alphabetize build deps",
     *     "type": "commit"
     *   }
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugRefsTagsName(req: operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugRefsTagsNameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugSrc - This endpoint redirects the client to the directory listing of the
     * root directory on the main branch.
     *
     * This is equivalent to directly hitting
     * [/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}](src/%7Bcommit%7D/%7Bpath%7D)
     * without having to know the name or SHA1 of the repo's main branch.
     *
     * To create new commits, [POST to this endpoint](#post)
    **/
    getRepositoriesWorkspaceRepoSlugSrc(req: operations.GetRepositoriesWorkspaceRepoSlugSrcRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugSrcResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugSrcCommitPath - This endpoints is used to retrieve the contents of a single file,
     * or the contents of a directory at a specified revision.
     *
     * ## Raw file contents
     *
     * When `path` points to a file, this endpoint returns the raw contents.
     * The response's Content-Type is derived from the filename
     * extension (not from the contents). The file contents are not processed
     * and no character encoding/recoding is performed and as a result no
     * character encoding is included as part of the Content-Type.
     *
     * The `Content-Disposition` header will be "attachment" to prevent
     * browsers from running executable files.
     *
     * If the file is managed by LFS, then a 301 redirect pointing to
     * Atlassian's media services platform is returned.
     *
     * The response includes an ETag that is based on the contents of the file
     * and its attributes. This means that an empty `__init__.py` always
     * returns the same ETag, regardless on the directory it lives in, or the
     * commit it is on.
     *
     * ## File meta data
     *
     * When the request for a file path includes the query parameter
     * `?format=meta`, instead of returning the file's raw contents, Bitbucket
     * instead returns the JSON object describing the file's properties:
     *
     * ```javascript
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta
     * {
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
     *     },
     *     "meta": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
     *     }
     *   },
     *   "path": "tests/__init__.py",
     *   "commit": {
     *     "type": "commit",
     *     "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
     *     "links": {
     *       "self": {
     *         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *       },
     *       "html": {
     *         "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *       }
     *     }
     *   },
     *   "attributes": [],
     *   "type": "commit_file",
     *   "size": 0
     * }
     * ```
     *
     * File objects contain an `attributes` element that contains a list of
     * possible modifiers. Currently defined values are:
     *
     * * `link` -- indicates that the entry is a symbolic link. The contents
     *     of the file represent the path the link points to.
     * * `executable` -- indicates that the file has the executable bit set.
     * * `subrepository` -- indicates that the entry points to a submodule or
     *     subrepo. The contents of the file is the SHA1 of the repository
     *     pointed to.
     * * `binary` -- indicates whether Bitbucket thinks the file is binary.
     *
     * This endpoint can provide an alternative to how a HEAD request can be
     * used to check for the existence of a file, or a file's size without
     * incurring the overhead of receiving its full contents.
     *
     *
     * ## Directory listings
     *
     * When `path` points to a directory instead of a file, the response is a
     * paginated list of directory and file objects in the same order as the
     * underlying SCM system would return them.
     *
     * For example:
     *
     * ```javascript
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "path": "tests/test_project",
     *       "type": "commit_directory",
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
     *         },
     *         "meta": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
     *         }
     *       },
     *       "commit": {
     *         "type": "commit",
     *         "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *           }
     *         }
     *       }
     *     },
     *     {
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py"
     *         },
     *         "meta": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta"
     *         }
     *       },
     *       "path": "tests/__init__.py",
     *       "commit": {
     *         "type": "commit",
     *         "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335"
     *           }
     *         }
     *       },
     *       "attributes": [],
     *       "type": "commit_file",
     *       "size": 0
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * When listing the contents of the repo's root directory, the use of a
     * trailing slash at the end of the URL is required.
     *
     * The response by default is not recursive, meaning that only the direct contents of
     * a path are returned. The response does not recurse down into
     * subdirectories. In order to "walk" the entire directory tree, the
     * client can either parse each response and follow the `self` links of each
     * `commit_directory` object, or can specify a `max_depth` to recurse to.
     *
     * The max_depth parameter will do a breadth-first search to return the contents of the subdirectories
     * up to the depth specified. Breadth-first search was chosen as it leads to the least amount of
     * file system operations for git. If the `max_depth` parameter is specified to be too
     * large, the call will time out and return a 555.
     *
     * Each returned object is either a `commit_file`, or a `commit_directory`,
     * both of which contain a `path` element. This path is the absolute path
     * from the root of the repository. Each object also contains a `commit`
     * object which embeds the commit the file is on. Note that this is merely
     * the commit that was used in the URL. It is *not* the commit that last
     * modified the file.
     *
     * Directory objects have 2 representations. Their `self` link returns the
     * paginated contents of the directory. The `meta` link on the other hand
     * returns the actual `directory` object itself, e.g.:
     *
     * ```javascript
     * {
     *   "path": "tests/test_project",
     *   "type": "commit_directory",
     *   "links": {
     *     "self": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/"
     *     },
     *     "meta": {
     *       "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta"
     *     }
     *   },
     *   "commit": { ... }
     * }
     * ```
     *
     * ## Querying, filtering and sorting
     *
     * Like most API endpoints, this API supports the Bitbucket
     * querying/filtering syntax and so you could filter a directory listing
     * to only include entries that match certain criteria. For instance, to
     * list all binary files over 1kb use the expression:
     *
     * `size > 1024 and attributes = "binary"`
     *
     * which after urlencoding yields the query string:
     *
     * `?q=size%3E1024+and+attributes%3D%22binary%22`
     *
     * To change the ordering of the response, use the `?sort` parameter:
     *
     * `.../src/eefd5ef/?sort=-size`
     *
     * See [filtering and sorting](../../../../../../meta/filtering) for more
     * details.
    **/
    getRepositoriesWorkspaceRepoSlugSrcCommitPath(req: operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugVersions - Returns the versions that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugVersions(req: operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugVersionsVersionId - Returns the specified issue tracker version object.
    **/
    getRepositoriesWorkspaceRepoSlugVersionsVersionId(req: operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugWatchers - Returns a paginated list of all the watchers on the specified
     * repository.
    **/
    getRepositoriesWorkspaceRepoSlugWatchers(req: operations.GetRepositoriesWorkspaceRepoSlugWatchersRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugWatchersResponse>;
    /**
     * getSnippets - Returns all snippets. Like pull requests, repositories and workspaces, the
     * full set of snippets is defined by what the current user has access to.
     *
     * This includes all snippets owned by any of the workspaces the user is a member of,
     * or snippets by other users that the current user is either watching or has collaborated
     * on (for instance by commenting on it).
     *
     * To limit the set of returned snippets, apply the
     * `?role=[owner|contributor|member]` query parameter where the roles are
     * defined as follows:
     *
     * * `owner`: all snippets owned by the current user
     * * `contributor`: all snippets owned by, or watched by the current user
     * * `member`: created in a workspaces or watched by the current user
     *
     * When no role is specified, all public snippets are returned, as well as all
     * privately owned snippets watched or commented on.
     *
     * The returned response is a normal paginated JSON list. This endpoint
     * only supports `application/json` responses and no
     * `multipart/form-data` or `multipart/related`. As a result, it is not
     * possible to include the file contents.
    **/
    getSnippets(req: operations.GetSnippetsRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsResponse>;
    /**
     * getSnippetsWorkspace - Identical to [`/snippets`](../snippets), except that the result is further filtered
     * by the snippet owner and only those that are owned by `{workspace}` are
     * returned.
    **/
    getSnippetsWorkspace(req: operations.GetSnippetsWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceResponse>;
    /**
     * getSnippetsWorkspaceEncodedId - Retrieves a single snippet.
     *
     * Snippets support multiple content types:
     *
     * * application/json
     * * multipart/related
     * * multipart/form-data
     *
     *
     * application/json
     * ----------------
     *
     * The default content type of the response is `application/json`.
     * Since JSON is always `utf-8`, it cannot reliably contain file contents
     * for files that are not text. Therefore, JSON snippet documents only
     * contain the filename and links to the file contents.
     *
     * This means that in order to retrieve all parts of a snippet, N+1
     * requests need to be made (where N is the number of files in the
     * snippet).
     *
     *
     * multipart/related
     * -----------------
     *
     * To retrieve an entire snippet in a single response, use the
     * `Accept: multipart/related` HTTP request header.
     *
     *     $ curl -H "Accept: multipart/related" https://api.bitbucket.org/2.0/snippets/evzijst/1
     *
     * Response:
     *
     *     HTTP/1.1 200 OK
     *     Content-Length: 2214
     *     Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
     *     MIME-Version: 1.0
     *
     *     --===============1438169132528273974==
     *     Content-Type: application/json; charset="utf-8"
     *     MIME-Version: 1.0
     *     Content-ID: snippet
     *
     *     {
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/snippets/evzijst/kypj"
     *         },
     *         "comments": {
     *           "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments"
     *         },
     *         "watchers": {
     *           "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers"
     *         },
     *         "commits": {
     *           "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits"
     *         }
     *       },
     *       "id": kypj,
     *       "title": "My snippet",
     *       "created_on": "2014-12-29T22:22:04.790331+00:00",
     *       "updated_on": "2014-12-29T22:22:04.790331+00:00",
     *       "is_private": false,
     *       "files": {
     *         "foo.txt": {
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt"
     *             }
     *           }
     *         },
     *         "image.png": {
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/snippets/evzijst/kypj#file-image.png"
     *             }
     *           }
     *         }
     *       ],
     *       "owner": {
     *         "username": "evzijst",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/evzijst"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/evzijst"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
     *           }
     *         }
     *       },
     *       "creator": {
     *         "username": "evzijst",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/evzijst"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/evzijst"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png"
     *           }
     *         }
     *       }
     *     }
     *
     *     --===============1438169132528273974==
     *     Content-Type: text/plain; charset="us-ascii"
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: 7bit
     *     Content-ID: "foo.txt"
     *     Content-Disposition: attachment; filename="foo.txt"
     *
     *     foo
     *
     *     --===============1438169132528273974==
     *     Content-Type: image/png
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: base64
     *     Content-ID: "image.png"
     *     Content-Disposition: attachment; filename="image.png"
     *
     *     iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
     *     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
     *     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
     *     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
     *     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
     *     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
     *     --===============1438169132528273974==--
     *
     * multipart/form-data
     * -------------------
     *
     * As with creating new snippets, `multipart/form-data` can be used as an
     * alternative to `multipart/related`. However, the inherently flat
     * structure of form-data means that only basic, root-level properties
     * can be returned, while nested elements like `links` are omitted:
     *
     *     $ curl -H "Accept: multipart/form-data" https://api.bitbucket.org/2.0/snippets/evzijst/kypj
     *
     * Response:
     *
     *     HTTP/1.1 200 OK
     *     Content-Length: 951
     *     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="title"
     *     Content-Type: text/plain; charset="utf-8"
     *
     *     My snippet
     *     ------------------------------63a4b224c59f--
     *     Content-Disposition: attachment; name="file"; filename="foo.txt"
     *     Content-Type: text/plain
     *
     *     foo
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: attachment; name="file"; filename="image.png"
     *     Content-Transfer-Encoding: base64
     *     Content-Type: application/octet-stream
     *
     *     iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
     *     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
     *     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
     *     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
     *     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
     *     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
     *     ------------------------------5957323a6b76--
    **/
    getSnippetsWorkspaceEncodedId(req: operations.GetSnippetsWorkspaceEncodedIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdComments - Used to retrieve a paginated list of all comments for a specific
     * snippet.
     *
     * This resource works identical to commit and pull request comments.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
    **/
    getSnippetsWorkspaceEncodedIdComments(req: operations.GetSnippetsWorkspaceEncodedIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdCommentsResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdCommentsCommentId - Returns the specific snippet comment.
    **/
    getSnippetsWorkspaceEncodedIdCommentsCommentId(req: operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdCommits - Returns the changes (commits) made on this snippet.
    **/
    getSnippetsWorkspaceEncodedIdCommits(req: operations.GetSnippetsWorkspaceEncodedIdCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdCommitsResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdCommitsRevision - Returns the changes made on this snippet in this commit.
    **/
    getSnippetsWorkspaceEncodedIdCommitsRevision(req: operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdFilesPath - Convenience resource for getting to a snippet's raw files without the
     * need for first having to retrieve the snippet itself and having to pull
     * out the versioned file links.
    **/
    getSnippetsWorkspaceEncodedIdFilesPath(req: operations.GetSnippetsWorkspaceEncodedIdFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdFilesPathResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdNodeId - Identical to `GET /snippets/encoded_id`, except that this endpoint
     * can be used to retrieve the contents of the snippet as it was at an
     * older revision, while `/snippets/encoded_id` always returns the
     * snippet's current revision.
     *
     * Note that only the snippet's file contents are versioned, not its
     * meta data properties like the title.
     *
     * Other than that, the two endpoints are identical in behavior.
    **/
    getSnippetsWorkspaceEncodedIdNodeId(req: operations.GetSnippetsWorkspaceEncodedIdNodeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdNodeIdResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdNodeIdFilesPath - Retrieves the raw contents of a specific file in the snippet. The
     * `Content-Disposition` header will be "attachment" to avoid issues with
     * malevolent executable files.
     *
     * The file's mime type is derived from its filename and returned in the
     * `Content-Type` header.
     *
     * Note that for text files, no character encoding is included as part of
     * the content type.
    **/
    getSnippetsWorkspaceEncodedIdNodeIdFilesPath(req: operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdNodeIdFilesPathResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdRevisionDiff - Returns the diff of the specified commit against its first parent.
     *
     * Note that this resource is different in functionality from the `patch`
     * resource.
     *
     * The differences between a diff and a patch are:
     *
     * * patches have a commit header with the username, message, etc
     * * diffs support the optional `path=foo/bar.py` query param to filter the
     *   diff to just that one file diff (not supported for patches)
     * * for a merge, the diff will show the diff between the merge commit and
     *   its first parent (identical to how PRs work), while patch returns a
     *   response containing separate patches for each commit on the second
     *   parent's ancestry, up to the oldest common ancestor (identical to
     *   its reachability).
     *
     * Note that the character encoding of the contents of the diff is
     * unspecified as Git does not track this, making it hard for
     * Bitbucket to reliably determine this.
    **/
    getSnippetsWorkspaceEncodedIdRevisionDiff(req: operations.GetSnippetsWorkspaceEncodedIdRevisionDiffRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdRevisionDiffResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdRevisionPatch - Returns the patch of the specified commit against its first
     * parent.
     *
     * Note that this resource is different in functionality from the `diff`
     * resource.
     *
     * The differences between a diff and a patch are:
     *
     * * patches have a commit header with the username, message, etc
     * * diffs support the optional `path=foo/bar.py` query param to filter the
     *   diff to just that one file diff (not supported for patches)
     * * for a merge, the diff will show the diff between the merge commit and
     *   its first parent (identical to how PRs work), while patch returns a
     *   response containing separate patches for each commit on the second
     *   parent's ancestry, up to the oldest common ancestor (identical to
     *   its reachability).
     *
     * Note that the character encoding of the contents of the patch is
     * unspecified as Git does not track this, making it hard for
     * Bitbucket to reliably determine this.
    **/
    getSnippetsWorkspaceEncodedIdRevisionPatch(req: operations.GetSnippetsWorkspaceEncodedIdRevisionPatchRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdRevisionPatchResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdWatch - Used to check if the current user is watching a specific snippet.
     *
     * Returns 204 (No Content) if the user is watching the snippet and 404 if
     * not.
     *
     * Hitting this endpoint anonymously always returns a 404.
    **/
    getSnippetsWorkspaceEncodedIdWatch(req: operations.GetSnippetsWorkspaceEncodedIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdWatchResponse>;
    /**
     * getSnippetsWorkspaceEncodedIdWatchers - Returns a paginated list of all users watching a specific snippet.
    **/
    getSnippetsWorkspaceEncodedIdWatchers(req: operations.GetSnippetsWorkspaceEncodedIdWatchersRequest, config?: AxiosRequestConfig): Promise<operations.GetSnippetsWorkspaceEncodedIdWatchersResponse>;
    /**
     * getTeams - Returns all the teams that the authenticated user is associated
     * with.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspaces](./workspaces) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeams(req: operations.GetTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
    /**
     * getTeamsUsername - Gets the public information associated with a team.
     *
     * If the team's profile is private, `location`, `website` and
     * `created_on` elements are omitted.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsername(req: operations.GetTeamsUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameResponse>;
    /**
     * getTeamsUsernameFollowers - Returns the list of accounts that are following this team.
     *
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameFollowers(req: operations.GetTeamsUsernameFollowersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameFollowersResponse>;
    /**
     * getTeamsUsernameFollowing - Returns the list of accounts this team is following.
     *
     * **This endpoint has been deprecated. There is no workspaces replacement.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameFollowing(req: operations.GetTeamsUsernameFollowingRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameFollowingResponse>;
    /**
     * getTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameHooks(req: operations.GetTeamsUsernameHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameHooksResponse>;
    /**
     * getTeamsUsernameHooksUid - Returns the webhook with the specified id installed on the given
     * team account.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameHooksUid(req: operations.GetTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameHooksUidResponse>;
    /**
     * getTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
     * team's groups is considered a member of the team. This includes users
     * in groups that may not actually have access to any of the team's
     * repositories.
     *
     * **This operation has been deprecated due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
     * for details.
     * You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
    **/
    getTeamsUsernameMembers(req: operations.GetTeamsUsernameMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameMembersResponse>;
    /**
     * getTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * Permissions returned are effective permissions — if a user is a member of
     * multiple groups with distinct roles, only the highest level is returned.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `collaborator`
     *
     * Only users with admin permission for the team may access this resource.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "permission": "admin",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     },
     *     {
     *       "permission": "collaborator",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "seanaty",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * team, user, or permission by adding the following query string
     * parameters:
     *
     * * `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
     * * `sort=team.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getTeamsUsernamePermissions(req: operations.GetTeamsUsernamePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsResponse>;
    /**
     * getTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
     * team’s repositories.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * If the username URL parameter refers to a user account instead of
     * a team account, an object containing the repository permissions
     * of all the username's repositories will be returned.
     *
     * Permissions returned are effective permissions — the highest level of
     * permission the user has. This does not include public repositories that
     * users are not granted any specific permission in, and does not
     * distinguish between direct and indirect privileges.
     *
     * Only users with admin permission for the team may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "bitbucket/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "bitbucket/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by repository, user, or permission by adding the following query string
     * parameters:
     *
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getTeamsUsernamePermissionsRepositories(req: operations.GetTeamsUsernamePermissionsRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsRepositoriesResponse>;
    /**
     * getTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * If the username URL parameter refers to a user account instead of
     * a team account, an object containing the repository permissions
     * of the username's repository will be returned.
     *
     * Permissions returned are effective permissions — the highest level of
     * permission the user has. This does not include public repositories that
     * users are not granted any specific permission in, and does not
     * distinguish between direct and indirect privileges.
     *
     * Only users with admin permission for the repository may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "bitbucket/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "bitbucket/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by user, or permission by adding the following query string parameters:
     *
     * * `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getTeamsUsernamePermissionsRepositoriesRepoSlug(req: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse>;
    /**
     * getTeamsUsernameProjects - **This endpoint has been deprecated,
     * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameProjects(req: operations.GetTeamsUsernameProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameProjectsResponse>;
    /**
     * getTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsUsernameProjectsProjectKey(req: operations.GetTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * getTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     *
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getTeamsWorkspaceRepositories(req: operations.GetTeamsWorkspaceRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamsWorkspaceRepositoriesResponse>;
    /**
     * getUser - Returns the currently logged in user.
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserEmails - Returns all the authenticated user's email addresses. Both
     * confirmed and unconfirmed.
    **/
    getUserEmails(req: operations.GetUserEmailsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsResponse>;
    /**
     * getUserEmailsEmail - Returns details about a specific one of the authenticated user's
     * email addresses.
     *
     * Details describe whether the address has been confirmed by the user and
     * whether it is the user's primary address or not.
    **/
    getUserEmailsEmail(req: operations.GetUserEmailsEmailRequest, config?: AxiosRequestConfig): Promise<operations.GetUserEmailsEmailResponse>;
    /**
     * getUserPermissionsRepositories - Returns an object for each repository the caller has explicit access
     * to and their effective permission — the highest level of permission the
     * caller has. This does not return public repositories that the user was
     * not granted any specific permission in, and does not distinguish between
     * direct and indirect privileges.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/repositories
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "bitbucket/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 1
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * repository or permission by adding the following query string
     * parameters:
     *
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=repository.name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getUserPermissionsRepositories(req: operations.GetUserPermissionsRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsRepositoriesResponse>;
    /**
     * getUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
     * effective role — the highest level of privilege the caller has. If a
     * user is a member of multiple groups with distinct roles, only the
     * highest level is returned.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace permissions](./workspaces) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * Permissions can be:
     *
     * * `admin`
     * * `collaborator`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/teams
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "permission": "admin",
     *       "type": "team_permission",
     *       "user": {
     *         "type": "user",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "team": {
     *         "display_name": "Atlassian Bitbucket",
     *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
     *       }
     *     }
     *   ],
     *   "page": 1,
     *   "size": 1
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * team or permission by adding the following query string parameters:
     *
     * * `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
     * * `sort=team.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getUserPermissionsTeams(req: operations.GetUserPermissionsTeamsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsTeamsResponse>;
    /**
     * getUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
     * their effective role - the highest level of privilege the caller has.
     * If a user is a member of multiple groups with distinct roles, only the
     * highest level is returned.
     *
     * Permissions can be:
     *
     * * `owner`
     * * `collaborator`
     * * `member`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces
     *
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *       "type": "workspace_membership",
     *       "permission": "owner",
     *       "last_accessed": "2019-03-07T12:35:02.900024+00:00",
     *       "added_on": "2018-10-11T17:42:02.961424+00:00",
     *       "user": {
     *         "type": "user",
     *         "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *         "nickname": "evzijst",
     *         "display_name": "Erik van Zijst",
     *       },
     *       "workspace": {
     *         "type": "workspace",
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "slug": "bbworkspace1",
     *         "name": "Atlassian Bitbucket",
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     *
     * * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
     * * `sort=workspace.slug`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getUserPermissionsWorkspaces(req: operations.GetUserPermissionsWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetUserPermissionsWorkspacesResponse>;
    /**
     * getUsersSelectedUser - Gets the public information associated with a user account.
     *
     * If the user's profile is private, `location`, `website` and
     * `created_on` elements are omitted.
     *
     * Note that the user object returned by this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
    **/
    getUsersSelectedUser(req: operations.GetUsersSelectedUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserResponse>;
    /**
     * getUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersSelectedUserHooks(req: operations.GetUsersSelectedUserHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserHooksResponse>;
    /**
     * getUsersSelectedUserHooksUid - Returns the webhook with the specified id installed on the given
     * user account.
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersSelectedUserHooksUid(req: operations.GetUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserHooksUidResponse>;
    /**
     * getUsersSelectedUserSearchCode - Search for code in the repositories of the specified user.
     *
     * Searching across all repositories:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 2,
     *       "content_matches": [
     *         {
     *           "lines": [
     *             {
     *               "line": 2,
     *               "segments": []
     *             },
     *             {
     *               "line": 3,
     *               "segments": [
     *                 {
     *                   "text": "def "
     *                 },
     *                 {
     *                   "text": "foo",
     *                   "match": true
     *                 },
     *                 {
     *                   "text": "():"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 4,
     *               "segments": [
     *                 {
     *                   "text": "    print(\"snek\")"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 5,
     *               "segments": []
     *             }
     *           ]
     *         }
     *       ],
     *       "path_matches": [
     *         {
     *           "text": "src/"
     *         },
     *         {
     *           "text": "foo",
     *           "match": true
     *         },
     *         {
     *           "text": ".py"
     *         }
     *       ],
     *       "file": {
     *         "path": "src/foo.py",
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         }
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Note that searches can match in the file's text (`content_matches`),
     * the path (`path_matches`), or both as in the example above.
     *
     * You can use the same syntax for the search query as in the UI, e.g.
     * to only search within a specific repository:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
     * # results from the "demo" repository
     * ```
     *
     * Similar to other APIs, you can request more fields using a
     * `fields` query parameter. E.g. to get some more information about
     * the repository of matched files (the `%2B` is a URL-encoded `+`):
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
     *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 1,
     *       "content_matches": [...],
     *       "path_matches": [...],
     *       "file": {
     *         "commit": {
     *           "type": "commit",
     *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             }
     *           },
     *           "repository": {
     *             "name": "demo",
     *             "type": "repository",
     *             "full_name": "my-workspace/demo",
     *             "links": {
     *               "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
     *               },
     *               "html": {
     *                 "href": "https://bitbucket.org/my-workspace/demo"
     *               },
     *               "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
     *               }
     *             },
     *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
     *           }
     *         },
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         },
     *         "path": "src/foo.py"
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
     *
    **/
    getUsersSelectedUserSearchCode(req: operations.GetUsersSelectedUserSearchCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserSearchCodeResponse>;
    /**
     * getUsersSelectedUserSshKeys - Returns a paginated list of the user's SSH public keys.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
     * {
     *     "page": 1,
     *     "pagelen": 10,
     *     "size": 1,
     *     "values": [
     *         {
     *             "comment": "user@myhost",
     *             "created_on": "2018-03-14T13:17:05.196003+00:00",
     *             "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *             "label": "",
     *             "last_used": "2018-03-20T13:18:05.196003+00:00",
     *             "links": {
     *                 "self": {
     *                     "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *                 }
     *             },
     *             "owner": {
     *                 "display_name": "Mark Adams",
     *                 "links": {
     *                     "avatar": {
     *                         "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/markadams-atl/"
     *                     },
     *                     "self": {
     *                         "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *                     }
     *                 },
     *                 "type": "user",
     *                 "username": "markadams-atl",
     *                 "nickname": "markadams-atl",
     *                 "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *             },
     *             "type": "ssh_key",
     *             "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     *         }
     *     ]
     * }
     * ```
    **/
    getUsersSelectedUserSshKeys(req: operations.GetUsersSelectedUserSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserSshKeysResponse>;
    /**
     * getUsersSelectedUserSshKeysKeyId - Returns a specific SSH public key belonging to a user.
     *
     * Example:
     * ```
     * $ curl https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}
     *
     * {
     *     "comment": "user@myhost",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    getUsersSelectedUserSshKeysKeyId(req: operations.GetUsersSelectedUserSshKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersSelectedUserSshKeysKeyIdResponse>;
    /**
     * getUsersUsernameMembers - **This endpoint has been deprecated,
     * and you should use the [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint.
     * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersUsernameMembers(req: operations.GetUsersUsernameMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUsernameMembersResponse>;
    /**
     * getUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
     * repositories the calling user has access to.
     *
     * **This endpoint has been deprecated,
     * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
     * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    getUsersWorkspaceRepositories(req: operations.GetUsersWorkspaceRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersWorkspaceRepositoriesResponse>;
    /**
     * getWorkspaces - Returns a list of workspaces accessible by the authenticated user.
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces
     *
     * {
     *   "pagelen": 10,
     *   "page": 1,
     *   "size": 1,
     *   "values": [
     *     {
     *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *         "links": {
     *             "owners": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
     *             },
     *             "repositories": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
     *             },
     *             "snippets": {
     *                 "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/bbworkspace1/"
     *             },
     *             "avatar": {
     *                 "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
     *             },
     *             "members": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
     *             },
     *             "projects": {
     *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
     *             }
     *         },
     *         "created_on": "2018-11-14T19:15:05.058566+00:00",
     *         "type": "workspace",
     *         "slug": "bbworkspace1",
     *         "is_private": true,
     *         "name": "Atlassian Bitbucket"
     *     }
     *   ]
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../meta/filtering) by
     * workspace or permission by adding the following query string parameters:
     *
     * * `q=slug="bbworkspace1"` or `q=is_private=true`
     * * `sort=created_on`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getWorkspaces(req: operations.GetWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    /**
     * getWorkspacesWorkspace - Returns the requested workspace.
    **/
    getWorkspacesWorkspace(req: operations.GetWorkspacesWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceResponse>;
    /**
     * getWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
    **/
    getWorkspacesWorkspaceHooks(req: operations.GetWorkspacesWorkspaceHooksRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceHooksResponse>;
    /**
     * getWorkspacesWorkspaceHooksUid - Returns the webhook with the specified id installed on the given
     * workspace.
    **/
    getWorkspacesWorkspaceHooksUid(req: operations.GetWorkspacesWorkspaceHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceHooksUidResponse>;
    /**
     * getWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
    **/
    getWorkspacesWorkspaceMembers(req: operations.GetWorkspacesWorkspaceMembersRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceMembersResponse>;
    /**
     * getWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
     * a `User` object for the member and a `Workspace` object
     * for the requested workspace.
    **/
    getWorkspacesWorkspaceMembersMember(req: operations.GetWorkspacesWorkspaceMembersMemberRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceMembersMemberResponse>;
    /**
     * getWorkspacesWorkspacePermissions - Returns the list of members in a workspace
     * and their permission levels.
     * Permission can be:
     * * `owner`
     * * `collaborator`
     * * `member`
     *
     * Example:
     *
     * ```
     * $ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions
     *
     * {
     *     "pagelen": 10,
     *     "values": [
     *         {
     *             "permission": "owner",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
     *                 "display_name": "Erik van Zijst",
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         },
     *         {
     *             "permission": "member",
     *             "type": "workspace_membership",
     *             "user": {
     *                 "type": "user",
     *                 "nickname": "seanaty",
     *                 "display_name": "Sean Conaty",
     *                 "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *             },
     *             "workspace": {
     *                 "type": "workspace",
     *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
     *                 "slug": "bbworkspace1",
     *                 "name": "Atlassian Bitbucket",
     *             }
     *         }
     *     ],
     *     "page": 1,
     *     "size": 2
     * }
     * ```
     *
     * Results may be further [filtered](../../../meta/filtering) by
     * permission by adding the following query string parameters:
     *
     * * `q=permission="owner"`
    **/
    getWorkspacesWorkspacePermissions(req: operations.GetWorkspacesWorkspacePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspacePermissionsResponse>;
    /**
     * getWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
     * workspace's repositories.
     *
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     *
     * Only users with admin permission for the team may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Jeff Zeng",
     *         "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "whee",
     *         "full_name": "atlassian_tutorial/whee",
     *         "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
     *       },
     *       "permission": "admin"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 3
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by repository, user, or permission by adding the following query string
     * parameters:
     *
     * * `q=repository.name="geordi"` or `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getWorkspacesWorkspacePermissionsRepositories(req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse>;
    /**
     * getWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
     * requested repository.
     *
     * Permissions returned are effective permissions: the highest level of
     * permission the user has. This does not distinguish between direct and
     * indirect (group) privileges.
     *
     * Only users with admin permission for the repository may access this resource.
     *
     * Permissions can be:
     *
     * * `admin`
     * * `write`
     * * `read`
     *
     * Example:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi
     *
     * {
     *   "pagelen": 10,
     *   "values": [
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Erik van Zijst",
     *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "admin"
     *     },
     *     {
     *       "type": "repository_permission",
     *       "user": {
     *         "type": "user",
     *         "display_name": "Sean Conaty",
     *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *       },
     *       "repository": {
     *         "type": "repository",
     *         "name": "geordi",
     *         "full_name": "atlassian_tutorial/geordi",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *       },
     *       "permission": "write"
     *     }
     *   ],
     *   "page": 1,
     *   "size": 2
     * }
     * ```
     *
     * Results may be further [filtered or sorted](../../../../meta/filtering)
     * by user, or permission by adding the following query string parameters:
     *
     * * `q=permission>"read"`
     * * `sort=user.display_name`
     *
     * Note that the query parameter values need to be URL escaped so that `=`
     * would become `%3D`.
    **/
    getWorkspacesWorkspacePermissionsRepositoriesRepoSlug(req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse>;
    getWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJson(req: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJsonResponse>;
    getWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfiguration(req: operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspacePipelinesConfigIdentityOidcWellKnownOpenidConfigurationResponse>;
    /**
     * getWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
    **/
    getWorkspacesWorkspaceProjects(req: operations.GetWorkspacesWorkspaceProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsResponse>;
    /**
     * getWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
    **/
    getWorkspacesWorkspaceProjectsProjectKey(req: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * getWorkspacesWorkspaceSearchCode - Search for code in the repositories of the specified workspace.
     *
     * Searching across all repositories:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 2,
     *       "content_matches": [
     *         {
     *           "lines": [
     *             {
     *               "line": 2,
     *               "segments": []
     *             },
     *             {
     *               "line": 3,
     *               "segments": [
     *                 {
     *                   "text": "def "
     *                 },
     *                 {
     *                   "text": "foo",
     *                   "match": true
     *                 },
     *                 {
     *                   "text": "():"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 4,
     *               "segments": [
     *                 {
     *                   "text": "    print(\"snek\")"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 5,
     *               "segments": []
     *             }
     *           ]
     *         }
     *       ],
     *       "path_matches": [
     *         {
     *           "text": "src/"
     *         },
     *         {
     *           "text": "foo",
     *           "match": true
     *         },
     *         {
     *           "text": ".py"
     *         }
     *       ],
     *       "file": {
     *         "path": "src/foo.py",
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         }
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Note that searches can match in the file's text (`content_matches`),
     * the path (`path_matches`), or both as in the example above.
     *
     * You can use the same syntax for the search query as in the UI, e.g.
     * to only search within a specific repository:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
     * # results from the "demo" repository
     * ```
     *
     * Similar to other APIs, you can request more fields using a
     * `fields` query parameter. E.g. to get some more information about
     * the repository of matched files (the `%2B` is a URL-encoded `+`):
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
     *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 1,
     *       "content_matches": [...],
     *       "path_matches": [...],
     *       "file": {
     *         "commit": {
     *           "type": "commit",
     *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             }
     *           },
     *           "repository": {
     *             "name": "demo",
     *             "type": "repository",
     *             "full_name": "my-workspace/demo",
     *             "links": {
     *               "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
     *               },
     *               "html": {
     *                 "href": "https://bitbucket.org/my-workspace/demo"
     *               },
     *               "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
     *               }
     *             },
     *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
     *           }
     *         },
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         },
     *         "path": "src/foo.py"
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
     *
    **/
    getWorkspacesWorkspaceSearchCode(req: operations.GetWorkspacesWorkspaceSearchCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceSearchCodeResponse>;
    /**
     * postAddonLinkersLinkerKeyValues - Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
     * linker of authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    postAddonLinkersLinkerKeyValues(req: operations.PostAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.PostAddonLinkersLinkerKeyValuesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlug - Creates a new repository.
     *
     * Note: In order to set the project for the newly created repository,
     * pass in either the project key or the project UUID as part of the
     * request body as shown in the examples below:
     *
     * ```
     * $ curl -X POST -H "Content-Type: application/json" -d '{
     *     "scm": "git",
     *     "project": {
     *         "key": "MARS"
     *     }
     * }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
     * ```
     *
     * or
     *
     * ```
     * $ curl -X POST -H "Content-Type: application/json" -d '{
     *     "scm": "git",
     *     "project": {
     *         "key": "{ba516952-992a-4c2d-acbd-17d502922f96}"
     *     }
     * }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding
     * ```
     *
     * The project must be assigned for all repositories. If the project is not provided,
     * the repository is automatically assigned to the oldest project in the workspace.
     *
     * Note: In the examples above, the workspace ID `teamsinspace`,
     * and/or the repository name `hablanding` can be replaced by UUIDs.
    **/
    postRepositoriesWorkspaceRepoSlug(req: operations.PostRepositoriesWorkspaceRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugBranchRestrictions - Creates a new branch restriction rule for a repository.
     *
     * `kind` describes what will be restricted. Allowed values include:
     * `push`, `force`, `delete` and `restrict_merges`.
     *
     * Different kinds of branch restrictions have different requirements:
     *
     * * `push` and `restrict_merges` require `users` and `groups` to be
     *   specified. Empty lists are allowed, in which case permission is
     *   denied for everybody.
     *
     * The restriction applies to all branches that match. There are
     * two ways to match a branch. It is configured in `branch_match_kind`:
     *
     * 1. `glob`: Matches a branch against the `pattern`. A `'*'` in
     *    `pattern` will expand to match zero or more characters, and every
     *    other character matches itself. For example, `'foo*'` will match
     *    `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
     *    branches.
     * 2. `branching_model`: Matches a branch against the repository's
     *    branching model. The `branch_type` controls the type of branch
     *    to match. Allowed values include: `production`, `development`,
     *    `bugfix`, `release`, `feature` and `hotfix`.
     *
     * The combination of `kind` and match must be unique. This means that
     * two `glob` restrictions in a repository cannot have the same `kind` and
     * `pattern`. Additionally, two `branching_model` restrictions in a
     * repository cannot have the same `kind` and `branch_type`.
     *
     * `users` and `groups` are lists of users and groups that are except from
     * the restriction. They can only be configured in `push` and
     * `restrict_merges` restrictions. The `push` restriction stops a user
     * pushing to matching branches unless that user is in `users` or is a
     * member of a group in `groups`. The `restrict_merges` stops a user
     * merging pull requests to matching branches unless that user is in
     * `users` or is a member of a group in `groups`. Adding new users or
     * groups to an existing restriction should be done via `PUT`.
     *
     * Note that branch restrictions with overlapping matchers is allowed,
     * but the resulting behavior may be surprising.
    **/
    postRepositoriesWorkspaceRepoSlugBranchRestrictions(req: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitApprove - Approve the specified commit as the authenticated user.
     *
     * This operation is only available to users that have explicit access to
     * the repository. In contrast, just the fact that a repository is
     * publicly accessible to users does not give them the ability to approve
     * commits.
    **/
    postRepositoriesWorkspaceRepoSlugCommitCommitApprove(req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitComments - Creates new comment on the specified commit.
     *
     * To post a reply to an existing comment, include the `parent.id` field:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "One more thing!"},
     *        "parent": {"id": 5728901}}'
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugCommitCommitComments(req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.
     *
     * If the specified key already exists, the existing status object will
     * be overwritten.
     *
     * Example:
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
     *     "key": "MY-BUILD",
     *     "state": "SUCCESSFUL",
     *     "description": "42 tests passed",
     *     "url": "https://www.example.org/my-build-result"
     *   }'
     * ```
     *
     * When creating a new commit status, you can use a URI template for the URL.
     * Templates are URLs that contain variable names that Bitbucket will
     * evaluate at runtime whenever the URL is displayed anywhere similar to
     * parameter substitution in
     * [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
     * For example, one could use `https://foo.com/builds/{repository.full_name}`
     * which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
     * The context variables available are `repository` and `commit`.
    **/
    postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugCommits - Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     *
     * **Note that this resource does NOT support new commit creation.**
    **/
    postRepositoriesWorkspaceRepoSlugCommits(req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugCommitsRevision - Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
     * except that POST allows clients to place the include and exclude
     * parameters in the request body to avoid URL length issues.
     *
     * **Note that this resource does NOT support new commit creation.**
    **/
    postRepositoriesWorkspaceRepoSlugCommitsRevision(req: operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugDeployKeys - Create a new deploy key in a repository. Note: If authenticating a deploy key
     * with an OAuth consumer, any changes to the OAuth consumer will subsequently
     * invalidate the deploy key.
     *
     *
     * Example:
     * ```
     * $ curl -XPOST \
     * -H "Authorization <auth header>" \
     * -H "Content-type: application/json" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
     * '{
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
     *     "label": "mydeploykey"
     * }'
     *
     * Output:
     * {
     *     "id": 123,
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "label": "mydeploykey",
     *     "type": "deploy_key",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "links":{
     *         "self":{
     *             "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
     *         }
     *     }
     *     "last_used": null,
     *     "comment": "mleu@C02W454JHTD8"
     * }
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugDeployKeys(req: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugDownloads - Upload new download artifacts.
     *
     * To upload files, perform a `multipart/form-data` POST containing one
     * or more `files` fields:
     *
     *     $ echo Hello World > hello.txt
     *     $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
     *
     * When a file is uploaded with the same name as an existing artifact,
     * then the existing file will be replaced.
    **/
    postRepositoriesWorkspaceRepoSlugDownloads(req: operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugForks - Creates a new fork of the specified repository.
     *
     * ## Forking a repository
     *
     * To create a fork, specify the workspace explicitly as part of the
     * request body:
     *
     * ```
     * $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \
     *   -H 'Content-Type: application/json' -d '{
     *     "name": "bbql_fork",
     *     "workspace": {
     *       "slug": "atlassian"
     *     }
     * }'
     * ```
     *
     * To fork a repository into the same workspace, also specify a new `name`.
     *
     * When you specify a value for `name`, it will also affect the `slug`.
     * The `slug` is reflected in the repository URL of the new fork. It is
     * derived from `name` by substituting non-ASCII characters, removes
     * whitespace, and changes characters to lower case. For example,
     * `My repo` would turn into `my_repo`.
     *
     * You need contributor access to create new forks within a workspace.
     *
     *
     * ## Change the properties of a new fork
     *
     * By default the fork inherits most of its properties from the parent.
     * However, since the optional POST body document follows the normal
     * `repository` JSON schema and you can override the new fork's
     * properties.
     *
     * Properties that can be overridden include:
     *
     * * description
     * * fork_policy
     * * language
     * * mainbranch
     * * is_private (note that a private repo's fork_policy might prohibit
     *   the creation of public forks, in which `is_private=False` would fail)
     * * has_issues (to initialize or disable the new repo's issue tracker --
     *   note that the actual contents of the parent repository's issue
     *   tracker are not copied during forking)
     * * has_wiki (to initialize or disable the new repo's wiki --
     *   note that the actual contents of the parent repository's wiki are not
     *   copied during forking)
     * * project (when forking into a private project, the fork's `is_private`
     *   must be `true`)
     *
     * Properties that cannot be modified include:
     *
     * * scm
     * * parent
     * * full_name
    **/
    postRepositoriesWorkspaceRepoSlugForks(req: operations.PostRepositoriesWorkspaceRepoSlugForksRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugForksResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugHooks - Creates a new webhook on the specified repository.
     *
     * Example:
     *
     * ```
     * $ curl -X POST -u credentials -H 'Content-Type: application/json'
     *   https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
     *   -d '
     *     {
     *       "description": "Webhook Description",
     *       "url": "https://example.com/",
     *       "active": true,
     *       "events": [
     *         "repo:push",
     *         "issue:created",
     *         "issue:updated"
     *       ]
     *     }'
     * ```
     *
     * Note that this call requires the webhook scope, as well as any scope
     * that applies to the events that the webhook subscribes to. In the
     * example above that means: `webhook`, `repository` and `issue`.
     *
     * Also note that the `url` must properly resolve and cannot be an
     * internal, non-routed address.
    **/
    postRepositoriesWorkspaceRepoSlugHooks(req: operations.PostRepositoriesWorkspaceRepoSlugHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugHooksResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssues - Creates a new issue.
     *
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
     *
     * The authenticated user is used for the issue's `reporter` field.
    **/
    postRepositoriesWorkspaceRepoSlugIssues(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesExport - A POST request to this endpoint initiates a new background celery task that archives the repo's issues.
     *
     * For example, you can run:
     *
     * curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
     * issues/export
     *
     * When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
     * 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
    **/
    postRepositoriesWorkspaceRepoSlugIssuesExport(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesImport - A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
     * existing issues will be deleted and replaced by the contents of the imported zip file.
     *
     * Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
     * "archive," which needs to be a file field:
     *
     * ```
     * $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     *
     * When the import job is accepted, here is example output:
     *
     * ```
     * < HTTP/1.1 202 Accepted
     *
     * {
     *     "type": "issue_job_status",
     *     "status": "ACCEPTED",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugIssuesImport(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Upload new issue attachments.
     *
     * To upload files, perform a `multipart/form-data` POST containing one
     * or more file fields.
     *
     * When a file is uploaded with the same name as an existing attachment,
     * then the existing file will be replaced.
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Makes a change to the specified issue.
     *
     * For example, to change an issue's state and assignee, create a new
     * change object that modifies these fields:
     *
     * ```
     * curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
     *   -s -u evzijst -X POST -H "Content-Type: application/json" \
     *   -d '{
     *     "changes": {
     *       "assignee_account_id": {
     *         "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *       },
     *       "state": {
     *         "new": 'resolved"
     *       }
     *     }
     *     "message": {
     *       "raw": "This is now resolved."
     *     }
     *   }'
     * ```
     *
     * The above example also includes a custom comment to go alongside the
     * change. This comment will also be visible on the issue page in the UI.
     *
     * The fields of the `changes` object are strings, not objects. This
     * allows for immutable change log records, even after user accounts,
     * milestones, or other objects recorded in a change entry, get renamed or
     * deleted.
     *
     * The `assignee_account_id` field stores the account id. When POSTing a
     * new change and changing the assignee, the client should therefore use
     * the user's account_id in the `changes.assignee_account_id.new` field.
     *
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Creates a new issue comment.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}}'
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
     * this repository and the author is the authenticated user.
     *
     * The minimum required fields to create a pull request are `title` and
     * `source`, specified by a branch name.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
     *     -u my-username:my-password \
     *     --request POST \
     *     --header 'Content-Type: application/json' \
     *     --data '{
     *         "title": "My Title",
     *         "source": {
     *             "branch": {
     *                 "name": "staging"
     *             }
     *         }
     *     }'
     * ```
     *
     * If the pull request's `destination` is not specified, it will default
     * to the `repository.mainbranch`. To open a pull request to a
     * different branch, say from a feature branch to a staging branch,
     * specify a `destination` (same format as the `source`):
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "destination": {
     *         "branch": {
     *             "name": "staging"
     *         }
     *     }
     * }
     * ```
     *
     * Reviewers can be specified by adding an array of user objects as the
     * `reviewers` property.
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "reviewers": [
     *         {
     *             "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *         }
     *     ]
     * }
     * ```
     *
     * Other fields:
     *
     * * `description` - a string
     * * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
    **/
    postRepositoriesWorkspaceRepoSlugPullrequests(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Approve the specified pull request as the authenticated user.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Creates a new pull request comment.
     *
     * Returns the newly created pull request comment.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline - Declines the pull request.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge - Merges the pull request.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse>;
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugRefsBranches - Creates a new branch in the specified repository.
     *
     * The payload of the POST should consist of a JSON document that
     * contains the name of the tag and the target hash.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \
     * -s -u seanfarley -X POST -H "Content-Type: application/json" \
     * -d '{
     *     "name" : "smf/create-feature",
     *     "target" : {
     *         "hash" : "default",
     *     }
     * }'
     * ```
     *
     * This call requires authentication. Private repositories require the
     * caller to authenticate with an account that has appropriate
     * authorization.
     *
     * The branch name should not include any prefixes (e.g.
     * refs/heads). This endpoint does support using short hash prefixes for
     * the commit hash, but it may return a 400 response if the provided
     * prefix is ambiguous. Using a full commit hash is the preferred
     * approach.
    **/
    postRepositoriesWorkspaceRepoSlugRefsBranches(req: operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugRefsTags - Creates a new tag in the specified repository.
     *
     * The payload of the POST should consist of a JSON document that
     * contains the name of the tag and the target hash.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \
     * -s -u jdoe -X POST -H "Content-Type: application/json" \
     * -d '{
     *     "name" : "new-tag-name",
     *     "target" : {
     *         "hash" : "a1b2c3d4e5f6",
     *     }
     * }'
     * ```
     *
     * This endpoint does support using short hash prefixes for the commit
     * hash, but it may return a 400 response if the provided prefix is
     * ambiguous. Using a full commit hash is the preferred approach.
    **/
    postRepositoriesWorkspaceRepoSlugRefsTags(req: operations.PostRepositoriesWorkspaceRepoSlugRefsTagsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugRefsTagsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugSrc - This endpoint is used to create new commits in the repository by
     * uploading files.
     *
     * To add a new file to a repository:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
     *   -F /repo/path/to/image.png=@image.png
     * ```
     *
     * This will create a new commit on top of the main branch, inheriting the
     * contents of the main branch, but adding (or overwriting) the
     * `image.png` file to the repository in the `/repo/path/to` directory.
     *
     * To create a commit that deletes files, use the `files` parameter:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \
     *   -F files=/file/to/delete/1.txt \
     *   -F files=/file/to/delete/2.txt
     * ```
     *
     * You can add/modify/delete multiple files in a request. Rename/move a
     * file by deleting the old path and adding the content at the new path.
     *
     * This endpoint accepts `multipart/form-data` (as in the examples above),
     * as well as `application/x-www-form-urlencoded`.
     *
     * ## multipart/form-data
     *
     * A `multipart/form-data` post contains a series of "form fields" that
     * identify both the individual files that are being uploaded, as well as
     * additional, optional meta data.
     *
     * Files are uploaded in file form fields (those that have a
     * `Content-Disposition` parameter) whose field names point to the remote
     * path in the repository where the file should be stored. Path field
     * names are always interpreted to be absolute from the root of the
     * repository, regardless whether the client uses a leading slash (as the
     * above `curl` example did).
     *
     * File contents are treated as bytes and are not decoded as text.
     *
     * The commit message, as well as other non-file meta data for the
     * request, is sent along as normal form field elements. Meta data fields
     * share the same namespace as the file objects. For `multipart/form-data`
     * bodies that should not lead to any ambiguity, as the
     * `Content-Disposition` header will contain the `filename` parameter to
     * distinguish between a file named "message" and the commit message field.
     *
     * ## application/x-www-form-urlencoded
     *
     * It is also possible to upload new files using a simple
     * `application/x-www-form-urlencoded` POST. This can be convenient when
     * uploading pure text files:
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \
     *   --data-urlencode "/path/to/me.txt=Lorem ipsum." \
     *   --data-urlencode "message=Initial commit" \
     *   --data-urlencode "author=Erik van Zijst <erik.van.zijst@gmail.com>"
     * ```
     *
     * There could be a field name clash if a client were to upload a file
     * named "message", as this filename clashes with the meta data property
     * for the commit message. To avoid this and to upload files whose names
     * clash with the meta data properties, use a leading slash for the files,
     * e.g. `curl --data-urlencode "/message=file contents"`.
     *
     * When an explicit slash is omitted for a file whose path matches that of
     * a meta data parameter, then it is interpreted as meta data, not as a
     * file.
     *
     * ## Executables and links
     *
     * While this API aims to facilitate the most common use cases, it is
     * possible to perform some more advanced operations like creating a new
     * symlink in the repository, or creating an executable file.
     *
     * Files can be supplied with a `x-attributes` value in the
     * `Content-Disposition` header. For example, to upload an executable
     * file, as well as create a symlink from `README.txt` to `README`:
     *
     * ```
     * --===============1438169132528273974==
     * Content-Type: text/plain; charset="us-ascii"
     * MIME-Version: 1.0
     * Content-Transfer-Encoding: 7bit
     * Content-ID: "bin/shutdown.sh"
     * Content-Disposition: attachment; filename="shutdown.sh"; x-attributes:"executable"
     *
     * #!/bin/sh
     * halt
     *
     * --===============1438169132528273974==
     * Content-Type: text/plain; charset="us-ascii"
     * MIME-Version: 1.0
     * Content-Transfer-Encoding: 7bit
     * Content-ID: "/README.txt"
     * Content-Disposition: attachment; filename="README.txt"; x-attributes:"link"
     *
     * README
     * --===============1438169132528273974==--
     * ```
     *
     * Links are files that contain the target path and have
     * `x-attributes:"link"` set.
     *
     * When overwriting links with files, or vice versa, the newly uploaded
     * file determines both the new contents, as well as the attributes. That
     * means uploading a file without specifying `x-attributes="link"` will
     * create a regular file, even if the parent commit hosted a symlink at
     * the same path.
     *
     * The same applies to executables. When modifying an existing executable
     * file, the form-data file element must include
     * `x-attributes="executable"` in order to preserve the executable status
     * of the file.
     *
     * Note that this API does not support the creation or manipulation of
     * subrepos / submodules.
    **/
    postRepositoriesWorkspaceRepoSlugSrc(req: operations.PostRepositoriesWorkspaceRepoSlugSrcRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugSrcResponse>;
    /**
     * postSnippets - Creates a new snippet under the authenticated user's account.
     *
     * Snippets can contain multiple files. Both text and binary files are
     * supported.
     *
     * The simplest way to create a new snippet from a local file:
     *
     *     $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png
     *
     * Creating snippets through curl has a few limitations and so let's look
     * at a more complicated scenario.
     *
     * Snippets are created with a multipart POST. Both `multipart/form-data`
     * and `multipart/related` are supported. Both allow the creation of
     * snippets with both meta data (title, etc), as well as multiple text
     * and binary files.
     *
     * The main difference is that `multipart/related` can use rich encoding
     * for the meta data (currently JSON).
     *
     *
     * multipart/related (RFC-2387)
     * ----------------------------
     *
     * This is the most advanced and efficient way to create a paste.
     *
     *     POST /2.0/snippets/evzijst HTTP/1.1
     *     Content-Length: 1188
     *     Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
     *     MIME-Version: 1.0
     *
     *     --===============1438169132528273974==
     *     Content-Type: application/json; charset="utf-8"
     *     MIME-Version: 1.0
     *     Content-ID: snippet
     *
     *     {
     *       "title": "My snippet",
     *       "is_private": true,
     *       "scm": "hg",
     *       "files": {
     *           "foo.txt": {},
     *           "image.png": {}
     *         }
     *     }
     *
     *     --===============1438169132528273974==
     *     Content-Type: text/plain; charset="us-ascii"
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: 7bit
     *     Content-ID: "foo.txt"
     *     Content-Disposition: attachment; filename="foo.txt"
     *
     *     foo
     *
     *     --===============1438169132528273974==
     *     Content-Type: image/png
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: base64
     *     Content-ID: "image.png"
     *     Content-Disposition: attachment; filename="image.png"
     *
     *     iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
     *     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
     *     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
     *     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
     *     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
     *     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
     *     --===============1438169132528273974==--
     *
     * The request contains multiple parts and is structured as follows.
     *
     * The first part is the JSON document that describes the snippet's
     * properties or meta data. It either has to be the first part, or the
     * request's `Content-Type` header must contain the `start` parameter to
     * point to it.
     *
     * The remaining parts are the files of which there can be zero or more.
     * Each file part should contain the `Content-ID` MIME header through
     * which the JSON meta data's `files` element addresses it. The value
     * should be the name of the file.
     *
     * `Content-Disposition` is an optional MIME header. The header's
     * optional `filename` parameter can be used to specify the file name
     * that Bitbucket should use when writing the file to disk. When present,
     * `filename` takes precedence over the value of `Content-ID`.
     *
     * When the JSON body omits the `files` element, the remaining parts are
     * not ignored. Instead, each file is added to the new snippet as if its
     * name was explicitly linked (the use of the `files` elements is
     * mandatory for some operations like deleting or renaming files).
     *
     *
     * multipart/form-data
     * -------------------
     *
     * The use of JSON for the snippet's meta data is optional. Meta data can
     * also be supplied as regular form fields in a more conventional
     * `multipart/form-data` request:
     *
     *     $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title="My snippet"               -F file=@foo.txt -F file=@image.png
     *
     *     POST /2.0/snippets HTTP/1.1
     *     Content-Length: 951
     *     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="file"; filename="foo.txt"
     *     Content-Type: text/plain
     *
     *     foo
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="file"; filename="image.png"
     *     Content-Type: application/octet-stream
     *
     *     ?PNG
     *
     *     IHDR?1??I.....
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="title"
     *
     *     My snippet
     *     ------------------------------63a4b224c59f--
     *
     * Here the meta data properties are included as flat, top-level form
     * fields. The file attachments use the `file` field name. To attach
     * multiple files, simply repeat the field.
     *
     * The advantage of `multipart/form-data` over `multipart/related` is
     * that it can be easier to build clients.
     *
     * Essentially all properties are optional, `title` and `files` included.
     *
     *
     * Sharing and Visibility
     * ----------------------
     *
     * Snippets can be either public (visible to anyone on Bitbucket, as well
     * as anonymous users), or private (visible only to members of the workspace).
     * This is controlled through the snippet's `is_private` element:
     *
     * * **is_private=false** -- everyone, including anonymous users can view
     *   the snippet
     * * **is_private=true** -- only workspace members can view the snippet
     *
     * To create the snippet under a workspace, just append the workspace ID
     * to the URL. See [`/2.0/snippets/{workspace}`](./snippets/%7Bworkspace%7D#post).
    **/
    postSnippets(req: operations.PostSnippetsRequest, config?: AxiosRequestConfig): Promise<operations.PostSnippetsResponse>;
    /**
     * postSnippetsWorkspace - Identical to [`/snippets`](../snippets#post), except that the new snippet will be
     * created under the workspace specified in the path parameter
     * `{workspace}`.
    **/
    postSnippetsWorkspace(req: operations.PostSnippetsWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.PostSnippetsWorkspaceResponse>;
    /**
     * postSnippetsWorkspaceEncodedIdComments - Creates a new comment.
     *
     * The only required field in the body is `content.raw`.
     *
     * To create a threaded reply to an existing comment, include `parent.id`.
    **/
    postSnippetsWorkspaceEncodedIdComments(req: operations.PostSnippetsWorkspaceEncodedIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostSnippetsWorkspaceEncodedIdCommentsResponse>;
    /**
     * postTeamsUsernameHooks - Creates a new webhook on the specified team.
     *
     * Team webhooks are fired for events from all repositories belonging to
     * that team account.
     *
     * Note that only admins can install webhooks on teams.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    postTeamsUsernameHooks(req: operations.PostTeamsUsernameHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsUsernameHooksResponse>;
    /**
     * postTeamsUsernameProjects - Creates a new project.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * Note that the avatar has to be embedded as either a data-url
     * or a URL to an external image as shown in the examples below:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
     *
     * or even:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "http://i.imgur.com/72tRx4w.gif"
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
    **/
    postTeamsUsernameProjects(req: operations.PostTeamsUsernameProjectsRequest, config?: AxiosRequestConfig): Promise<operations.PostTeamsUsernameProjectsResponse>;
    /**
     * postUsersSelectedUserHooks - Creates a new webhook on the specified user account.
     *
     * Account-level webhooks are fired for events from all repositories
     * belonging to that account.
     *
     * Note that one can only register webhooks on one's own account, not that
     * of others.
     *
     * Also, note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    postUsersSelectedUserHooks(req: operations.PostUsersSelectedUserHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersSelectedUserHooksResponse>;
    /**
     * postUsersSelectedUserSshKeys - Adds a new SSH public key to the specified user account and returns the resulting key.
     *
     * Example:
     * ```
     * $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys
     *
     * {
     *     "comment": "user@myhost",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    postUsersSelectedUserSshKeys(req: operations.PostUsersSelectedUserSshKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersSelectedUserSshKeysResponse>;
    /**
     * postWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
     *
     * Workspace webhooks are fired for events from all repositories contained
     * by that workspace.
     *
     * Note that only owners can install webhooks on workspaces.
    **/
    postWorkspacesWorkspaceHooks(req: operations.PostWorkspacesWorkspaceHooksRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceHooksResponse>;
    /**
     * postWorkspacesWorkspaceProjects - Creates a new project.
     *
     * Note that the avatar has to be embedded as either a data-url
     * or a URL to an external image as shown in the examples below:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
     *
     * or even:
     *
     * ```
     * $ body=$(cat << EOF
     * {
     *     "name": "Mars Project",
     *     "key": "MARS",
     *     "description": "Software for colonizing mars.",
     *     "links": {
     *         "avatar": {
     *             "href": "http://i.imgur.com/72tRx4w.gif"
     *         }
     *     },
     *     "is_private": false
     * }
     * EOF
     * )
     * $ curl -H "Content-Type: application/json" \
     *        -X POST \
     *        -d "$body" \
     *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
     * {
     *   // Serialized project document
     * }
     * ```
    **/
    postWorkspacesWorkspaceProjects(req: operations.PostWorkspacesWorkspaceProjectsRequest, config?: AxiosRequestConfig): Promise<operations.PostWorkspacesWorkspaceProjectsResponse>;
    /**
     * putAddon - Updates the application installation for the user.
     *
     * This endpoint is intended to be used by Bitbucket Connect apps
     * and only supports JWT authentication -- that is how Bitbucket
     * identifies the particular installation of the app. Developers
     * with applications registered in the "Develop Apps" section
     * of Bitbucket Marketplace need not use this endpoint as
     * updates for those applications can be sent out via the
     * UI of that section.
     *
     * A new, valid descriptor must be provided in the body of the
     * PUT request.
     *
     * ```
     * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
     *   -H "Authorization: JWT <JWT Token>" \
     *   --header "Content-Type: application/json" \
     *   --data '{"descriptor": $NEW_DESCRIPTOR}'
     * ```
     *
     * Note that the scopes of the application cannot be increased
     * in the new descriptor nor reduced to none.
    **/
    putAddon(req: operations.PutAddonRequest, config?: AxiosRequestConfig): Promise<operations.PutAddonResponse>;
    /**
     * putAddonLinkersLinkerKeyValues - Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
     * linker of the authenticated application.
     *
     * A linker value lets applications supply values to modify its regular expression.
     *
     * The base regular expression must use a Bitbucket-specific match group `(?K)`
     * which will be translated to `([\w\-]+)`. A value must match this pattern.
     *
     * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
    **/
    putAddonLinkersLinkerKeyValues(req: operations.PutAddonLinkersLinkerKeyValuesRequest, config?: AxiosRequestConfig): Promise<operations.PutAddonLinkersLinkerKeyValuesResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlug - Since this endpoint can be used to both update and to create a
     * repository, the request body depends on the intent.
     *
     * ### Creation
     *
     * See the POST documentation for the repository endpoint for an example
     * of the request body.
     *
     * ### Update
     *
     * Note: Changing the `name` of the repository will cause the location to
     * be changed. This is because the URL of the repo is derived from the
     * name (a process called slugification). In such a scenario, it is
     * possible for the request to fail if the newly created slug conflicts
     * with an existing repository's slug. But if there is no conflict,
     * the new location will be returned in the `Location` header of the
     * response.
    **/
    putRepositoriesWorkspaceRepoSlug(req: operations.PutRepositoriesWorkspaceRepoSlugRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugBranchRestrictionsId - Updates an existing branch restriction rule.
     *
     * Fields not present in the request body are ignored.
     *
     * See [`POST`](../branch-restrictions#post) for details.
    **/
    putRepositoriesWorkspaceRepoSlugBranchRestrictionsId(req: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugBranchingModelSettings - Update the branching model configuration for a repository.
     *
     * The `development` branch can be configured to a specific branch or to
     * track the main branch. When set to a specific branch it must
     * currently exist. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. A request without a
     * `development` property will leave the development branch unchanged.
     *
     * It is possible for the `development` branch to be invalid. This
     * happens when it points at a specific branch that has been
     * deleted. This is indicated in the `is_valid` field for the branch. It is
     * not possible to update the settings for `development` if that
     * would leave the branch in an invalid state. Such a request will be
     * rejected.
     *
     * The `production` branch can be a specific branch, the main
     * branch or disabled. When set to a specific branch it must currently
     * exist. The `enabled` property can be used to enable (`true`) or
     * disable (`false`) it. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. A request without a
     * `production` property will leave the production branch unchanged.
     *
     * It is possible for the `production` branch to be invalid. This
     * happens when it points at a specific branch that has been
     * deleted. This is indicated in the `is_valid` field for the branch. A
     * request that would leave `production` enabled and invalid will be
     * rejected. It is possible to update `production` and make it invalid if
     * it would also be left disabled.
     *
     * The `branch_types` property contains the branch types to be updated.
     * Only the branch types passed will be updated. All updates will be
     * rejected if it would leave the branching model in an invalid state.
     * For branch types this means that:
     *
     * 1. The prefixes for all enabled branch types are valid. For example,
     *    it is not possible to use '*' inside a Git prefix.
     * 2. A prefix of an enabled branch type must not be a prefix of another
     *    enabled branch type. This is to ensure that a branch can be easily
     *    classified by its prefix unambiguously.
     *
     * It is possible to store an invalid prefix if that branch type would be
     * left disabled. Only the passed properties will be updated. The
     * properties not passed will be left unchanged. Each branch type must
     * have a `kind` property to identify it.
     *
     * Example Body:
     *
     * ```
     *     {
     *       "development": {
     *         "use_mainbranch": true
     *       },
     *       "production": {
     *         "enabled": true,
     *         "use_mainbranch": false,
     *         "name": "production"
     *       },
     *       "branch_types": [
     *         {
     *           "kind": "bugfix",
     *           "enabled": true,
     *           "prefix": "bugfix/"
     *         },
     *         {
     *           "kind": "feature",
     *           "enabled": true,
     *           "prefix": "feature/"
     *         },
     *         {
     *           "kind": "hotfix",
     *           "prefix": "hotfix/"
     *         },
     *         {
     *           "kind": "release",
     *           "enabled": false,
     *         }
     *       ]
     *     }
     * ```
    **/
    putRepositoriesWorkspaceRepoSlugBranchingModelSettings(req: operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
     * specific commit.
     *
     * This operation can also be used to change other properties of the
     * build status:
     *
     * * `state`
     * * `name`
     * * `description`
     * * `url`
     * * `refname`
     *
     * The `key` cannot be changed.
    **/
    putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(req: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
     * reviewers.
     *
     * This method is idempotent. Adding a user a second time has no effect.
    **/
    putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugDeployKeysKeyId - Create a new deploy key in a repository.
     *
     * The same key needs to be passed in but the comment and label can change.
     *
     * Example:
     * ```
     * $ curl -XPUT \
     * -H "Authorization <auth header>" \
     * -H "Content-type: application/json" \
     * https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
     * '{
     *     "label": "newlabel",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
     * }'
     *
     * Output:
     * {
     *     "comment": "newcomment",
     *     "last_used": null,
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
     *         }
     *     },
     *     "repository": {
     *         "full_name": "mleu/test",
     *         "name": "test",
     *         "type": "repository",
     *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
     *     },
     *     "label": "newlabel",
     *     "created_on": "2018-08-15T23:50:59.993890+00:00",
     *     "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
     *     "id": 1234,
     *     "type": "deploy_key"
     * }
     * ```
    **/
    putRepositoriesWorkspaceRepoSlugDeployKeysKeyId(req: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
    **/
    putRepositoriesWorkspaceRepoSlugHooksUid(req: operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueId - Modifies the issue.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
     *   -u evzijst -s -X PUT -H 'Content-Type: application/json' \
     *   -d '{
     *   "title": "Updated title",
     *   "assignee": {
     *     "username": "evzijst"
     *   },
     *   "priority": "minor",
     *   "version": {
     *     "name": "1.0"
     *   },
     *   "component": null
     * }'
     * ```
     *
     * This example changes the `title`, `assignee`, `priority` and the
     * `version`. It also removes the value of the `component` from the issue
     * by setting the field to `null`. Any field not present keeps its existing
     * value.
     *
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Updates the content of the specified issue comment. Note that only
     * the `content.raw` field can be modified.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
     *   -X PUT -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}'
     * ```
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Vote for this issue.
     *
     * To cast your vote, do an empty PUT. The 204 status code indicates that
     * the operation was successful.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Start watching this issue.
     *
     * To start watching this issue, do an empty PUT. The 204 status code
     * indicates that the operation was successful.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Mutates the specified pull request.
     *
     * This can be used to change the pull request's branches or description.
     *
     * Only open pull requests can be mutated.
    **/
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Updates a specific pull request comment.
    **/
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    /**
     * putSnippetsWorkspaceEncodedId - Used to update a snippet. Use this to add and delete files and to
     * change a snippet's title.
     *
     * To update a snippet, one can either PUT a full snapshot, or only the
     * parts that need to be changed.
     *
     * The contract for PUT on this API is that properties missing from the
     * request remain untouched so that snippets can be efficiently
     * manipulated with differential payloads.
     *
     * To delete a property (e.g. the title, or a file), include its name in
     * the request, but omit its value (use `null`).
     *
     * As in Git, explicit renaming of files is not supported. Instead, to
     * rename a file, delete it and add it again under another name. This can
     * be done atomically in a single request. Rename detection is left to
     * the SCM.
     *
     * PUT supports three different content types for both request and
     * response bodies:
     *
     * * `application/json`
     * * `multipart/related`
     * * `multipart/form-data`
     *
     * The content type used for the request body can be different than that
     * used for the response. Content types are specified using standard HTTP
     * headers.
     *
     * Use the `Content-Type` and `Accept` headers to select the desired
     * request and response format.
     *
     *
     * application/json
     * ----------------
     *
     * As with creation and retrieval, the content type determines what
     * properties can be manipulated. `application/json` does not support
     * file contents and is therefore limited to a snippet's meta data.
     *
     * To update the title, without changing any of its files:
     *
     *     $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": "Updated title"}'
     *
     *
     * To delete the title:
     *
     *     $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": null}'
     *
     * Not all parts of a snippet can be manipulated. The owner and creator
     * for instance are immutable.
     *
     *
     * multipart/related
     * -----------------
     *
     * `multipart/related` can be used to manipulate all of a snippet's
     * properties. The body is identical to a POST. properties omitted from
     * the request are left unchanged. Since the `start` part contains JSON,
     * the mechanism for manipulating the snippet's meta data is identical
     * to `application/json` requests.
     *
     * To update one of a snippet's file contents, while also changing its
     * title:
     *
     *     PUT /2.0/snippets/evzijst/kypj HTTP/1.1
     *     Content-Length: 288
     *     Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
     *     MIME-Version: 1.0
     *
     *     --===============1438169132528273974==
     *     Content-Type: application/json; charset="utf-8"
     *     MIME-Version: 1.0
     *     Content-ID: snippet
     *
     *     {
     *       "title": "My updated snippet",
     *       "files": {
     *           "foo.txt": {}
     *         }
     *     }
     *
     *     --===============1438169132528273974==
     *     Content-Type: text/plain; charset="us-ascii"
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: 7bit
     *     Content-ID: "foo.txt"
     *     Content-Disposition: attachment; filename="foo.txt"
     *
     *     Updated file contents.
     *
     *     --===============1438169132528273974==--
     *
     * Here only the parts that are changed are included in the body. The
     * other files remain untouched.
     *
     * Note the use of the `files` list in the JSON part. This list contains
     * the files that are being manipulated. This list should have
     * corresponding multiparts in the request that contain the new contents
     * of these files.
     *
     * If a filename in the `files` list does not have a corresponding part,
     * it will be deleted from the snippet, as shown below:
     *
     *     PUT /2.0/snippets/evzijst/kypj HTTP/1.1
     *     Content-Length: 188
     *     Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
     *     MIME-Version: 1.0
     *
     *     --===============1438169132528273974==
     *     Content-Type: application/json; charset="utf-8"
     *     MIME-Version: 1.0
     *     Content-ID: snippet
     *
     *     {
     *       "files": {
     *         "image.png": {}
     *       }
     *     }
     *
     *     --===============1438169132528273974==--
     *
     * To simulate a rename, delete a file and add the same file under
     * another name:
     *
     *     PUT /2.0/snippets/evzijst/kypj HTTP/1.1
     *     Content-Length: 212
     *     Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974=="
     *     MIME-Version: 1.0
     *
     *     --===============1438169132528273974==
     *     Content-Type: application/json; charset="utf-8"
     *     MIME-Version: 1.0
     *     Content-ID: snippet
     *
     *     {
     *         "files": {
     *           "foo.txt": {},
     *           "bar.txt": {}
     *         }
     *     }
     *
     *     --===============1438169132528273974==
     *     Content-Type: text/plain; charset="us-ascii"
     *     MIME-Version: 1.0
     *     Content-Transfer-Encoding: 7bit
     *     Content-ID: "bar.txt"
     *     Content-Disposition: attachment; filename="bar.txt"
     *
     *     foo
     *
     *     --===============1438169132528273974==--
     *
     *
     * multipart/form-data
     * -----------------
     *
     * Again, one can also use `multipart/form-data` to manipulate file
     * contents and meta data atomically.
     *
     *     $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title="My updated snippet" -F file=@foo.txt
     *
     *     PUT /2.0/snippets/evzijst/kypj HTTP/1.1
     *     Content-Length: 351
     *     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="file"; filename="foo.txt"
     *     Content-Type: text/plain
     *
     *     foo
     *
     *     ------------------------------63a4b224c59f
     *     Content-Disposition: form-data; name="title"
     *
     *     My updated snippet
     *     ------------------------------63a4b224c59f
     *
     * To delete a file, omit its contents while including its name in the
     * `files` field:
     *
     *     $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png
     *
     *     PUT /2.0/snippets/evzijst/kypj HTTP/1.1
     *     Content-Length: 149
     *     Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86
     *
     *     ------------------------------ef8871065a86
     *     Content-Disposition: form-data; name="files"
     *
     *     image.png
     *     ------------------------------ef8871065a86--
     *
     * The explicit use of the `files` element in `multipart/related` and
     * `multipart/form-data` is only required when deleting files.
     * The default mode of operation is for file parts to be processed,
     * regardless of whether or not they are listed in `files`, as a
     * convenience to the client.
    **/
    putSnippetsWorkspaceEncodedId(req: operations.PutSnippetsWorkspaceEncodedIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSnippetsWorkspaceEncodedIdResponse>;
    /**
     * putSnippetsWorkspaceEncodedIdCommentsCommentId - Updates a comment.
     *
     * Comments can only be updated by their author.
    **/
    putSnippetsWorkspaceEncodedIdCommentsCommentId(req: operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse>;
    /**
     * putSnippetsWorkspaceEncodedIdNodeId - Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
     * takes an explicit commit revision. Only the snippet's "HEAD"/"tip"
     * (most recent) version can be updated and requests on all other,
     * older revisions fail by returning a 405 status.
     *
     * Usage of this endpoint over the unrestricted `/snippets/encoded_id`
     * could be desired if the caller wants to be sure no concurrent
     * modifications have taken place between the moment of the UPDATE
     * request and the original GET.
     *
     * This can be considered a so-called "Compare And Swap", or CAS
     * operation.
     *
     * Other than that, the two endpoints are identical in behavior.
    **/
    putSnippetsWorkspaceEncodedIdNodeId(req: operations.PutSnippetsWorkspaceEncodedIdNodeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSnippetsWorkspaceEncodedIdNodeIdResponse>;
    /**
     * putSnippetsWorkspaceEncodedIdWatch - Used to start watching a specific snippet. Returns 204 (No Content).
    **/
    putSnippetsWorkspaceEncodedIdWatch(req: operations.PutSnippetsWorkspaceEncodedIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.PutSnippetsWorkspaceEncodedIdWatchResponse>;
    /**
     * putTeamsUsernameHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    putTeamsUsernameHooksUid(req: operations.PutTeamsUsernameHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsUsernameHooksUidResponse>;
    /**
     * putTeamsUsernameProjectsProjectKey - Since this endpoint can be used to both update and to create a
     * project, the request body depends on the intent.
     *
     * **This endpoint has been deprecated,
     * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
     *
     * ### Creation
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The `key` should not be specified in the body of request
     * (since it is already present in the URL). The `name` is required,
     * everything else is optional.
     *
     * ### Update
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The key is not required in the body (since it is already in
     * the URL). The key may be specified in the body, if the intent is
     * to change the key itself. In such a scenario, the location of the
     * project is changed and is returned in the `Location` header of the
     * response.
    **/
    putTeamsUsernameProjectsProjectKey(req: operations.PutTeamsUsernameProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.PutTeamsUsernameProjectsProjectKeyResponse>;
    /**
     * putUsersSelectedUserHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
     *
     * Note that the username path parameter has been deprecated due to
     * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * Use the account's UUID or account_id instead.
     *
     * **This endpoint has been deprecated, and you should
     * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
     * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
    **/
    putUsersSelectedUserHooksUid(req: operations.PutUsersSelectedUserHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersSelectedUserHooksUidResponse>;
    /**
     * putUsersSelectedUserSshKeysKeyId - Updates a specific SSH public key on a user's account
     *
     * Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.
     *
     * Example:
     * ```
     * $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}
     *
     * {
     *     "comment": "",
     *     "created_on": "2018-03-14T13:17:05.196003+00:00",
     *     "key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY",
     *     "label": "Work key",
     *     "last_used": "2018-03-20T13:18:05.196003+00:00",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a"
     *         }
     *     },
     *     "owner": {
     *         "display_name": "Mark Adams",
     *         "links": {
     *             "avatar": {
     *                 "href": "https://bitbucket.org/account/markadams-atl/avatar/32/"
     *             },
     *             "html": {
     *                 "href": "https://bitbucket.org/markadams-atl/"
     *             },
     *             "self": {
     *                 "href": "https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}"
     *             }
     *         },
     *         "type": "user",
     *         "username": "markadams-atl",
     *         "nickname": "markadams-atl",
     *         "uuid": "{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}"
     *     },
     *     "type": "ssh_key",
     *     "uuid": "{b15b6026-9c02-4626-b4ad-b905f99f763a}"
     * }
     * ```
    **/
    putUsersSelectedUserSshKeysKeyId(req: operations.PutUsersSelectedUserSshKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersSelectedUserSshKeysKeyIdResponse>;
    /**
     * putWorkspacesWorkspaceHooksUid - Updates the specified webhook subscription.
     *
     * The following properties can be mutated:
     *
     * * `description`
     * * `url`
     * * `active`
     * * `events`
    **/
    putWorkspacesWorkspaceHooksUid(req: operations.PutWorkspacesWorkspaceHooksUidRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceHooksUidResponse>;
    /**
     * putWorkspacesWorkspaceProjectsProjectKey - Since this endpoint can be used to both update and to create a
     * project, the request body depends on the intent.
     *
     * ### Creation
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The `key` should not be specified in the body of request
     * (since it is already present in the URL). The `name` is required,
     * everything else is optional.
     *
     * ### Update
     *
     * See the POST documentation for the project collection for an
     * example of the request body.
     *
     * Note: The key is not required in the body (since it is already in
     * the URL). The key may be specified in the body, if the intent is
     * to change the key itself. In such a scenario, the location of the
     * project is changed and is returned in the `Location` header of the
     * response.
    **/
    putWorkspacesWorkspaceProjectsProjectKey(req: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse>;
    /**
     * bulkCreateOrUpdateAnnotations - Bulk upload of annotations.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     *
     * Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.
     *
     * ### Sample cURL request:
     * ```
     * curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
     * --header 'Content-Type: application/json' \
     * --data-raw '[
     *   {
     *         "external_id": "mysystem-annotation001",
     *         "title": "Security scan report",
     *         "annotation_type": "VULNERABILITY",
     *         "summary": "This line represents a security threat.",
     *         "severity": "HIGH",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *         "line": 42
     *   },
     *   {
     *         "external_id": "mySystem-annotation002",
     *         "title": "Bug report",
     *         "annotation_type": "BUG",
     *         "result": "FAILED",
     *         "summary": "This line might introduce a bug.",
     *         "severity": "MEDIUM",
     *       "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
     *         "line": 13
     *   }
     * ]'
     * ```
     *
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    bulkCreateOrUpdateAnnotations(req: operations.BulkCreateOrUpdateAnnotationsRequest, config?: AxiosRequestConfig): Promise<operations.BulkCreateOrUpdateAnnotationsResponse>;
    /**
     * createDeploymentVariable - Create a deployment environment level variable.
    **/
    createDeploymentVariable(req: operations.CreateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentVariableResponse>;
    /**
     * createEnvironment - Create an environment.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * createOrUpdateAnnotation - Creates or updates an individual annotation for the specified report.
     * Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.
     *
     * Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.
     *
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "annotation_type": "VULNERABILITY",
     *     "summary": "This line represents a security thread.",
     *     "severity": "HIGH",
     *     "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
     *     "line": 42
     * }'
     * ```
     *
     * ### Possible field values:
     * annotation_type: VULNERABILITY, CODE_SMELL, BUG
     * result: PASSED, FAILED, IGNORED, SKIPPED
     * severity: HIGH, MEDIUM, LOW, CRITICAL
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    createOrUpdateAnnotation(req: operations.CreateOrUpdateAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateAnnotationResponse>;
    /**
     * createOrUpdateReport - Creates or updates a report for the specified commit.
     * To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.
     *
     * ### Sample cURL request:
     * ```
     * curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
     * --header 'Content-Type: application/json' \
     * --data-raw '{
     *     "title": "Security scan report",
     *     "details": "This pull request introduces 10 new dependency vulnerabilities.",
     *     "report_type": "SECURITY",
     *     "reporter": "mySystem",
     *     "link": "http://www.mysystem.com/reports/001",
     *     "result": "FAILED",
     *     "data": [
     *         {
     *             "title": "Duration (seconds)",
     *             "type": "DURATION",
     *             "value": 14
     *         },
     *         {
     *             "title": "Safe to merge?",
     *             "type": "BOOLEAN",
     *             "value": false
     *         }
     *     ]
     * }'
     * ```
     *
     * ### Possible field values:
     * report_type: SECURITY, COVERAGE, TEST, BUG
     * result: PASSED, FAILED, PENDING
     * data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT
     *
     * #### Data field formats
     * | Type  Field   | Value Field Type  | Value Field Display |
     * |:--------------|:------------------|:--------------------|
     * | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
     * | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
     * | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
     * | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
     * | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
     * | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
     * | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
     * | TEXT | String | The value will be read as a JSON string and will be displayed as-is |
     *
     * Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
    **/
    createOrUpdateReport(req: operations.CreateOrUpdateReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateReportResponse>;
    /**
     * createPipelineForRepository - Endpoint to create and initiate a pipeline.
     * There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
     * # Trigger a Pipeline for a branch
     * One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
     * The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *   -d '
     *   {
     *     "target": {
     *       "ref_type": "branch",
     *       "type": "pipeline_ref_target",
     *       "ref_name": "master"
     *     }
     *   }'
     * ```
     * # Trigger a Pipeline for a commit on a branch or tag
     * You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
     * The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.
     *
     * The following reference types are supported:
     *
     * * `branch`
     * * `named_branch`
     * * `bookmark`
     *  * `tag`
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *   -d '
     *   {
     *     "target": {
     *       "commit": {
     *         "type": "commit",
     *         "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956"
     *       },
     *       "ref_type": "branch",
     *       "type": "pipeline_ref_target",
     *       "ref_name": "master"
     *     }
     *   }'
     * ```
     * # Trigger a specific pipeline definition for a commit
     * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
     * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *  -d '
     *   {
     *      "target": {
     *       "commit": {
     *          "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
     *          "type":"commit"
     *        },
     *         "selector": {
     *            "type":"custom",
     *               "pattern":"Deploy to production"
     *           },
     *         "type":"pipeline_commit_target"
     *    }
     *   }'
     * ```
     * # Trigger a specific pipeline definition for a commit on a branch or tag
     * You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
     * In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
     *  -d '
     *   {
     *      "target": {
     *       "commit": {
     *          "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923",
     *          "type":"commit"
     *        },
     *        "selector": {
     *           "type": "custom",
     *           "pattern": "Deploy to production"
     *        },
     *        "type": "pipeline_ref_target",
     *        "ref_name": "master",
     *        "ref_type": "branch"
     *      }
     *   }'
     * ```
     *
     *
     * # Trigger a custom pipeline with variables
     * In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
     *  -d '
     *   {
     *     "target": {
     *       "type": "pipeline_ref_target",
     *       "ref_type": "branch",
     *       "ref_name": "master",
     *       "selector": {
     *         "type": "custom",
     *         "pattern": "Deploy to production"
     *       }
     *     },
     *     "variables": [
     *       {
     *         "key": "var1key",
     *         "value": "var1value",
     *         "secured": true
     *       },
     *       {
     *         "key": "var2key",
     *         "value": "var2value"
     *       }
     *     ]
     *   }'
     * ```
     *
     * # Trigger a pull request pipeline
     *
     * You can also initiate a pipeline for a specific pull request.
     *
     * ### Example
     *
     * ```
     * $ curl -X POST -is -u username:password \
     *   -H 'Content-Type: application/json' \
     *  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
     *  -d '
     *   {
     * 	"target": {
     *       "type": "pipeline_pullrequest_target",
     * 	  "source": "pull-request-branch",
     *       "destination": "master",
     *       "destination_commit": {
     *       	 "hash" : "9f848b7"
     *       },
     *       "commit": {
     *       	"hash" : "1a372fc"
     *       },
     *       "pullrequest" : {
     *       	"id" : "3"
     *       },
     * 	  "selector": {
     *         "type": "pull-requests",
     *         "pattern": "**"
     *       }
     *     }
     *   }'
     * ```
     *
    **/
    createPipelineForRepository(req: operations.CreatePipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineForRepositoryResponse>;
    /**
     * createPipelineVariableForTeam - Create an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    createPipelineVariableForTeam(req: operations.CreatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForTeamResponse>;
    /**
     * createPipelineVariableForUser - Create a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    createPipelineVariableForUser(req: operations.CreatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForUserResponse>;
    /**
     * createPipelineVariableForWorkspace - Create a workspace level variable.
    **/
    createPipelineVariableForWorkspace(req: operations.CreatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineVariableForWorkspaceResponse>;
    /**
     * createRepositoryPipelineKnownHost - Create a repository level known host.
    **/
    createRepositoryPipelineKnownHost(req: operations.CreateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineKnownHostResponse>;
    /**
     * createRepositoryPipelineSchedule - Create a schedule for the given repository.
    **/
    createRepositoryPipelineSchedule(req: operations.CreateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineScheduleResponse>;
    /**
     * createRepositoryPipelineVariable - Create a repository level variable.
    **/
    createRepositoryPipelineVariable(req: operations.CreateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryPipelineVariableResponse>;
    /**
     * deleteAnnotation - Deletes a single Annotation matching the provided ID.
    **/
    deleteAnnotation(req: operations.DeleteAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAnnotationResponse>;
    /**
     * deleteCommitHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    deleteCommitHostedPropertyValue(req: operations.DeleteCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCommitHostedPropertyValueResponse>;
    /**
     * deleteDeploymentVariable - Delete a deployment environment level variable.
    **/
    deleteDeploymentVariable(req: operations.DeleteDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeploymentVariableResponse>;
    /**
     * deleteEnvironmentForRepository - Delete an environment
    **/
    deleteEnvironmentForRepository(req: operations.DeleteEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentForRepositoryResponse>;
    /**
     * deletePipelineVariableForTeam - Delete a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    deletePipelineVariableForTeam(req: operations.DeletePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForTeamResponse>;
    /**
     * deletePipelineVariableForUser - Delete an account level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    deletePipelineVariableForUser(req: operations.DeletePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForUserResponse>;
    /**
     * deletePipelineVariableForWorkspace - Delete a workspace level variable.
    **/
    deletePipelineVariableForWorkspace(req: operations.DeletePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineVariableForWorkspaceResponse>;
    /**
     * deletePullRequestHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    deletePullRequestHostedPropertyValue(req: operations.DeletePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeletePullRequestHostedPropertyValueResponse>;
    /**
     * deleteReport - Deletes a single Report matching the provided ID.
    **/
    deleteReport(req: operations.DeleteReportRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportResponse>;
    /**
     * deleteRepositoryHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    deleteRepositoryHostedPropertyValue(req: operations.DeleteRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryHostedPropertyValueResponse>;
    /**
     * deleteRepositoryPipelineCache - Delete a repository cache.
    **/
    deleteRepositoryPipelineCache(req: operations.DeleteRepositoryPipelineCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineCacheResponse>;
    /**
     * deleteRepositoryPipelineKeyPair - Delete the repository SSH key pair.
    **/
    deleteRepositoryPipelineKeyPair(req: operations.DeleteRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKeyPairResponse>;
    /**
     * deleteRepositoryPipelineKnownHost - Delete a repository level known host.
    **/
    deleteRepositoryPipelineKnownHost(req: operations.DeleteRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineKnownHostResponse>;
    /**
     * deleteRepositoryPipelineSchedule - Delete a schedule.
    **/
    deleteRepositoryPipelineSchedule(req: operations.DeleteRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineScheduleResponse>;
    /**
     * deleteRepositoryPipelineVariable - Delete a repository level variable.
    **/
    deleteRepositoryPipelineVariable(req: operations.DeleteRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPipelineVariableResponse>;
    /**
     * deleteUserHostedPropertyValue - Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    deleteUserHostedPropertyValue(req: operations.DeleteUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserHostedPropertyValueResponse>;
    /**
     * getAnnotation - Returns a single Annotation matching the provided ID.
    **/
    getAnnotation(req: operations.GetAnnotationRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationResponse>;
    /**
     * getAnnotationsForReport - Returns a paginated list of Annotations for a specified report.
    **/
    getAnnotationsForReport(req: operations.GetAnnotationsForReportRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsForReportResponse>;
    /**
     * getCommitHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    getCommitHostedPropertyValue(req: operations.GetCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetCommitHostedPropertyValueResponse>;
    /**
     * getDeploymentForRepository - Retrieve a deployment
    **/
    getDeploymentForRepository(req: operations.GetDeploymentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentForRepositoryResponse>;
    /**
     * getDeploymentVariables - Find deployment environment level variables.
    **/
    getDeploymentVariables(req: operations.GetDeploymentVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentVariablesResponse>;
    /**
     * getDeploymentsForRepository - Find deployments
    **/
    getDeploymentsForRepository(req: operations.GetDeploymentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentsForRepositoryResponse>;
    /**
     * getEnvironmentForRepository - Retrieve an environment
    **/
    getEnvironmentForRepository(req: operations.GetEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentForRepositoryResponse>;
    /**
     * getEnvironmentsForRepository - Find environments
    **/
    getEnvironmentsForRepository(req: operations.GetEnvironmentsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentsForRepositoryResponse>;
    /**
     * getPipelineForRepository - Retrieve a specified pipeline
    **/
    getPipelineForRepository(req: operations.GetPipelineForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineForRepositoryResponse>;
    /**
     * getPipelineStepForRepository - Retrieve a given step of a pipeline.
    **/
    getPipelineStepForRepository(req: operations.GetPipelineStepForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepForRepositoryResponse>;
    /**
     * getPipelineStepLogForRepository - Retrieve the log file for a given step of a pipeline.
     *
     * This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
    **/
    getPipelineStepLogForRepository(req: operations.GetPipelineStepLogForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepLogForRepositoryResponse>;
    /**
     * getPipelineStepsForRepository - Find steps for the given pipeline.
    **/
    getPipelineStepsForRepository(req: operations.GetPipelineStepsForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineStepsForRepositoryResponse>;
    /**
     * getPipelineVariableForTeam - Retrieve a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariableForTeam(req: operations.GetPipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForTeamResponse>;
    /**
     * getPipelineVariableForUser - Retrieve a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariableForUser(req: operations.GetPipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForUserResponse>;
    /**
     * getPipelineVariableForWorkspace - Retrieve a workspace level variable.
    **/
    getPipelineVariableForWorkspace(req: operations.GetPipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariableForWorkspaceResponse>;
    /**
     * getPipelineVariablesForTeam - Find account level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariablesForTeam(req: operations.GetPipelineVariablesForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForTeamResponse>;
    /**
     * getPipelineVariablesForUser - Find user level variables.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    getPipelineVariablesForUser(req: operations.GetPipelineVariablesForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForUserResponse>;
    /**
     * getPipelineVariablesForWorkspace - Find workspace level variables.
    **/
    getPipelineVariablesForWorkspace(req: operations.GetPipelineVariablesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelineVariablesForWorkspaceResponse>;
    /**
     * getPipelinesForRepository - Find pipelines
    **/
    getPipelinesForRepository(req: operations.GetPipelinesForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.GetPipelinesForRepositoryResponse>;
    /**
     * getPullRequestHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    getPullRequestHostedPropertyValue(req: operations.GetPullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetPullRequestHostedPropertyValueResponse>;
    /**
     * getPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
    **/
    getPullrequestsForCommit(req: operations.GetPullrequestsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsForCommitResponse>;
    /**
     * getReport - Returns a single Report matching the provided ID.
    **/
    getReport(req: operations.GetReportRequest, config?: AxiosRequestConfig): Promise<operations.GetReportResponse>;
    /**
     * getReportsForCommit - Returns a paginated list of Reports linked to this commit.
    **/
    getReportsForCommit(req: operations.GetReportsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsForCommitResponse>;
    /**
     * getRepositoryHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    getRepositoryHostedPropertyValue(req: operations.GetRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryHostedPropertyValueResponse>;
    /**
     * getRepositoryPipelineCacheContentUri - Retrieve the URI of the content of the specified cache.
    **/
    getRepositoryPipelineCacheContentUri(req: operations.GetRepositoryPipelineCacheContentUriRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCacheContentUriResponse>;
    /**
     * getRepositoryPipelineCaches - Retrieve the repository pipelines caches.
    **/
    getRepositoryPipelineCaches(req: operations.GetRepositoryPipelineCachesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineCachesResponse>;
    /**
     * getRepositoryPipelineConfig - Retrieve the repository pipelines configuration.
    **/
    getRepositoryPipelineConfig(req: operations.GetRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineConfigResponse>;
    /**
     * getRepositoryPipelineKnownHost - Retrieve a repository level known host.
    **/
    getRepositoryPipelineKnownHost(req: operations.GetRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostResponse>;
    /**
     * getRepositoryPipelineKnownHosts - Find repository level known hosts.
    **/
    getRepositoryPipelineKnownHosts(req: operations.GetRepositoryPipelineKnownHostsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineKnownHostsResponse>;
    /**
     * getRepositoryPipelineSchedule - Retrieve a schedule by its UUID.
    **/
    getRepositoryPipelineSchedule(req: operations.GetRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleResponse>;
    /**
     * getRepositoryPipelineScheduleExecutions - Retrieve the executions of a given schedule.
    **/
    getRepositoryPipelineScheduleExecutions(req: operations.GetRepositoryPipelineScheduleExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineScheduleExecutionsResponse>;
    /**
     * getRepositoryPipelineSchedules - Retrieve the configured schedules for the given repository.
    **/
    getRepositoryPipelineSchedules(req: operations.GetRepositoryPipelineSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSchedulesResponse>;
    /**
     * getRepositoryPipelineSshKeyPair - Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
    **/
    getRepositoryPipelineSshKeyPair(req: operations.GetRepositoryPipelineSshKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineSshKeyPairResponse>;
    /**
     * getRepositoryPipelineVariable - Retrieve a repository level variable.
    **/
    getRepositoryPipelineVariable(req: operations.GetRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariableResponse>;
    /**
     * getRepositoryPipelineVariables - Find repository level variables.
    **/
    getRepositoryPipelineVariables(req: operations.GetRepositoryPipelineVariablesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPipelineVariablesResponse>;
    /**
     * retrieveUserHostedPropertyValue - Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    retrieveUserHostedPropertyValue(req: operations.RetrieveUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveUserHostedPropertyValueResponse>;
    /**
     * searchAccount - Search for code in the repositories of the specified team.
     *
     * Searching across all repositories:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 2,
     *       "content_matches": [
     *         {
     *           "lines": [
     *             {
     *               "line": 2,
     *               "segments": []
     *             },
     *             {
     *               "line": 3,
     *               "segments": [
     *                 {
     *                   "text": "def "
     *                 },
     *                 {
     *                   "text": "foo",
     *                   "match": true
     *                 },
     *                 {
     *                   "text": "():"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 4,
     *               "segments": [
     *                 {
     *                   "text": "    print(\"snek\")"
     *                 }
     *               ]
     *             },
     *             {
     *               "line": 5,
     *               "segments": []
     *             }
     *           ]
     *         }
     *       ],
     *       "path_matches": [
     *         {
     *           "text": "src/"
     *         },
     *         {
     *           "text": "foo",
     *           "match": true
     *         },
     *         {
     *           "text": ".py"
     *         }
     *       ],
     *       "file": {
     *         "path": "src/foo.py",
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         }
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Note that searches can match in the file's text (`content_matches`),
     * the path (`path_matches`), or both as in the example above.
     *
     * You can use the same syntax for the search query as in the UI, e.g.
     * to only search within a specific repository:
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
     * # results from the "demo" repository
     * ```
     *
     * Similar to other APIs, you can request more fields using a
     * `fields` query parameter. E.g. to get some more information about
     * the repository of matched files (the `%2B` is a URL-encoded `+`):
     *
     * ```
     * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
     *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
     * {
     *   "size": 1,
     *   "page": 1,
     *   "pagelen": 10,
     *   "query_substituted": false,
     *   "values": [
     *     {
     *       "type": "code_search_result",
     *       "content_match_count": 1,
     *       "content_matches": [...],
     *       "path_matches": [...],
     *       "file": {
     *         "commit": {
     *           "type": "commit",
     *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
     *             }
     *           },
     *           "repository": {
     *             "name": "demo",
     *             "type": "repository",
     *             "full_name": "my-workspace/demo",
     *             "links": {
     *               "self": {
     *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
     *               },
     *               "html": {
     *                 "href": "https://bitbucket.org/my-workspace/demo"
     *               },
     *               "avatar": {
     *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
     *               }
     *             },
     *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
     *           }
     *         },
     *         "type": "commit_file",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
     *           }
     *         },
     *         "path": "src/foo.py"
     *       }
     *     }
     *   ]
     * }
     * ```
     *
     * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
     *
    **/
    searchAccount(req: operations.SearchAccountRequest, config?: AxiosRequestConfig): Promise<operations.SearchAccountResponse>;
    /**
     * stopPipeline - Signal the stop of a pipeline and all of its steps that not have completed yet.
    **/
    stopPipeline(req: operations.StopPipelineRequest, config?: AxiosRequestConfig): Promise<operations.StopPipelineResponse>;
    /**
     * updateCommitHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
    **/
    updateCommitHostedPropertyValue(req: operations.UpdateCommitHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCommitHostedPropertyValueResponse>;
    /**
     * updateDeploymentVariable - Update a deployment environment level variable.
    **/
    updateDeploymentVariable(req: operations.UpdateDeploymentVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeploymentVariableResponse>;
    /**
     * updateEnvironmentForRepository - Update an environment
    **/
    updateEnvironmentForRepository(req: operations.UpdateEnvironmentForRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentForRepositoryResponse>;
    /**
     * updatePipelineVariableForTeam - Update a team level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    updatePipelineVariableForTeam(req: operations.UpdatePipelineVariableForTeamRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForTeamResponse>;
    /**
     * updatePipelineVariableForUser - Update a user level variable.
     * This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
    **/
    updatePipelineVariableForUser(req: operations.UpdatePipelineVariableForUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForUserResponse>;
    /**
     * updatePipelineVariableForWorkspace - Update a workspace level variable.
    **/
    updatePipelineVariableForWorkspace(req: operations.UpdatePipelineVariableForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineVariableForWorkspaceResponse>;
    /**
     * updatePullRequestHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
    **/
    updatePullRequestHostedPropertyValue(req: operations.UpdatePullRequestHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePullRequestHostedPropertyValueResponse>;
    /**
     * updateRepositoryBuildNumber - Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
    **/
    updateRepositoryBuildNumber(req: operations.UpdateRepositoryBuildNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryBuildNumberResponse>;
    /**
     * updateRepositoryHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
    **/
    updateRepositoryHostedPropertyValue(req: operations.UpdateRepositoryHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryHostedPropertyValueResponse>;
    /**
     * updateRepositoryPipelineConfig - Update the pipelines configuration for a repository.
    **/
    updateRepositoryPipelineConfig(req: operations.UpdateRepositoryPipelineConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineConfigResponse>;
    /**
     * updateRepositoryPipelineKeyPair - Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
    **/
    updateRepositoryPipelineKeyPair(req: operations.UpdateRepositoryPipelineKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKeyPairResponse>;
    /**
     * updateRepositoryPipelineKnownHost - Update a repository level known host.
    **/
    updateRepositoryPipelineKnownHost(req: operations.UpdateRepositoryPipelineKnownHostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineKnownHostResponse>;
    /**
     * updateRepositoryPipelineSchedule - Update a schedule.
    **/
    updateRepositoryPipelineSchedule(req: operations.UpdateRepositoryPipelineScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineScheduleResponse>;
    /**
     * updateRepositoryPipelineVariable - Update a repository level variable.
    **/
    updateRepositoryPipelineVariable(req: operations.UpdateRepositoryPipelineVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRepositoryPipelineVariableResponse>;
    /**
     * updateUserHostedPropertyValue - Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
    **/
    updateUserHostedPropertyValue(req: operations.UpdateUserHostedPropertyValueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserHostedPropertyValueResponse>;
}
export {};
