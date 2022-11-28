import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Issues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * issuesAddAssignees - Add assignees to an issue
     *
     * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#add-assignees-to-an-issue - API method documentation
    **/
    issuesAddAssignees(req: operations.IssuesAddAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesAddAssigneesResponse>;
    /**
     * issuesAddLabels - Add labels to an issue
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#add-labels-to-an-issue - API method documentation
    **/
    issuesAddLabels(req: operations.IssuesAddLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesAddLabelsResponse>;
    /**
     * issuesCheckUserCanBeAssigned - Check if a user can be assigned
     *
     * Checks if a user has permission to be assigned to an issue in this repository.
     *
     * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
     *
     * Otherwise a `404` status code is returned.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#check-if-a-user-can-be-assigned - API method documentation
    **/
    issuesCheckUserCanBeAssigned(req: operations.IssuesCheckUserCanBeAssignedRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCheckUserCanBeAssignedResponse>;
    /**
     * issuesCreate - Create an issue
     *
     * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#create-an-issue - API method documentation
    **/
    issuesCreate(req: operations.IssuesCreateRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateResponse>;
    /**
     * issuesCreateComment - Create an issue comment
     *
     * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://docs.github.com/enterprise-server@2.19/rest/guides/best-practices-for-integrators#dealing-with-abuse-rate-limits)" for details.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#create-an-issue-comment - API method documentation
    **/
    issuesCreateComment(req: operations.IssuesCreateCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateCommentResponse>;
    /**
     * issuesCreateLabel - Create a label
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#create-a-label - API method documentation
    **/
    issuesCreateLabel(req: operations.IssuesCreateLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateLabelResponse>;
    /**
     * issuesCreateMilestone - Create a milestone
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#create-a-milestone - API method documentation
    **/
    issuesCreateMilestone(req: operations.IssuesCreateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesCreateMilestoneResponse>;
    /**
     * issuesDeleteComment - Delete an issue comment
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#delete-an-issue-comment - API method documentation
    **/
    issuesDeleteComment(req: operations.IssuesDeleteCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteCommentResponse>;
    /**
     * issuesDeleteLabel - Delete a label
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#delete-a-label - API method documentation
    **/
    issuesDeleteLabel(req: operations.IssuesDeleteLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteLabelResponse>;
    /**
     * issuesDeleteMilestone - Delete a milestone
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#delete-a-milestone - API method documentation
    **/
    issuesDeleteMilestone(req: operations.IssuesDeleteMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesDeleteMilestoneResponse>;
    /**
     * issuesGet - Get an issue
     *
     * The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
     * [transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
     * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
     * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
     * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
     * to the [`issues`](https://docs.github.com/enterprise-server@2.19/webhooks/event-payloads/#issues) webhook.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#get-an-issue - API method documentation
    **/
    issuesGet(req: operations.IssuesGetRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetResponse>;
    /**
     * issuesGetComment - Get an issue comment
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#get-an-issue-comment - API method documentation
    **/
    issuesGetComment(req: operations.IssuesGetCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetCommentResponse>;
    /**
     * issuesGetEvent - Get an issue event
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#get-an-issue-event - API method documentation
    **/
    issuesGetEvent(req: operations.IssuesGetEventRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetEventResponse>;
    /**
     * issuesGetLabel - Get a label
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#get-a-label - API method documentation
    **/
    issuesGetLabel(req: operations.IssuesGetLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetLabelResponse>;
    /**
     * issuesGetMilestone - Get a milestone
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#get-a-milestone - API method documentation
    **/
    issuesGetMilestone(req: operations.IssuesGetMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesGetMilestoneResponse>;
    /**
     * issuesList - List issues assigned to the authenticated user
     *
     * List issues assigned to the authenticated user across all visible repositories including owned repositories, member
     * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
     * necessarily assigned to you.
     *
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesList(req: operations.IssuesListRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListResponse>;
    /**
     * issuesListAssignees - List assignees
     *
     * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-assignees - API method documentation
    **/
    issuesListAssignees(req: operations.IssuesListAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListAssigneesResponse>;
    /**
     * issuesListComments - List issue comments
     *
     * Issue Comments are ordered by ascending ID.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-issue-comments - API method documentation
    **/
    issuesListComments(req: operations.IssuesListCommentsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListCommentsResponse>;
    /**
     * issuesListCommentsForRepo - List issue comments for a repository
     *
     * By default, Issue Comments are ordered by ascending ID.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-issue-comments-for-a-repository - API method documentation
    **/
    issuesListCommentsForRepo(req: operations.IssuesListCommentsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListCommentsForRepoResponse>;
    /**
     * issuesListEvents - List issue events
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-issue-events - API method documentation
    **/
    issuesListEvents(req: operations.IssuesListEventsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsResponse>;
    /**
     * issuesListEventsForRepo - List issue events for a repository
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-issue-events-for-a-repository - API method documentation
    **/
    issuesListEventsForRepo(req: operations.IssuesListEventsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsForRepoResponse>;
    /**
     * issuesListEventsForTimeline - List timeline events for an issue
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-timeline-events-for-an-issue - API method documentation
    **/
    issuesListEventsForTimeline(req: operations.IssuesListEventsForTimelineRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListEventsForTimelineResponse>;
    /**
     * issuesListForAuthenticatedUser - List user account issues assigned to the authenticated user
     *
     * List issues across owned and member repositories assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesListForAuthenticatedUser(req: operations.IssuesListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForAuthenticatedUserResponse>;
    /**
     * issuesListForOrg - List organization issues assigned to the authenticated user
     *
     * List issues in an organization assigned to the authenticated user.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user - API method documentation
    **/
    issuesListForOrg(req: operations.IssuesListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForOrgResponse>;
    /**
     * issuesListForRepo - List repository issues
     *
     * List issues in a repository.
     *
     * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
     * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
     * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
     * request id, use the "[List pull requests](https://docs.github.com/enterprise-server@2.19/rest/reference/pulls#list-pull-requests)" endpoint.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-repository-issues - API method documentation
    **/
    issuesListForRepo(req: operations.IssuesListForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListForRepoResponse>;
    /**
     * issuesListLabelsForMilestone - List labels for issues in a milestone
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-labels-for-issues-in-a-milestone - API method documentation
    **/
    issuesListLabelsForMilestone(req: operations.IssuesListLabelsForMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsForMilestoneResponse>;
    /**
     * issuesListLabelsForRepo - List labels for a repository
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-labels-for-a-repository - API method documentation
    **/
    issuesListLabelsForRepo(req: operations.IssuesListLabelsForRepoRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsForRepoResponse>;
    /**
     * issuesListLabelsOnIssue - List labels for an issue
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-labels-for-an-issue - API method documentation
    **/
    issuesListLabelsOnIssue(req: operations.IssuesListLabelsOnIssueRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListLabelsOnIssueResponse>;
    /**
     * issuesListMilestones - List milestones
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#list-milestones - API method documentation
    **/
    issuesListMilestones(req: operations.IssuesListMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesListMilestonesResponse>;
    /**
     * issuesLock - Lock an issue
     *
     * Users with push access can lock an issue or pull request's conversation.
     *
     * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@2.19/rest/overview/resources-in-the-rest-api#http-verbs)."
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#lock-an-issue - API method documentation
    **/
    issuesLock(req: operations.IssuesLockRequest, config?: AxiosRequestConfig): Promise<operations.IssuesLockResponse>;
    /**
     * issuesRemoveAllLabels - Remove all labels from an issue
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#remove-all-labels-from-an-issue - API method documentation
    **/
    issuesRemoveAllLabels(req: operations.IssuesRemoveAllLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveAllLabelsResponse>;
    /**
     * issuesRemoveAssignees - Remove assignees from an issue
     *
     * Removes one or more assignees from an issue.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#remove-assignees-from-an-issue - API method documentation
    **/
    issuesRemoveAssignees(req: operations.IssuesRemoveAssigneesRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveAssigneesResponse>;
    /**
     * issuesRemoveLabel - Remove a label from an issue
     *
     * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#remove-a-label-from-an-issue - API method documentation
    **/
    issuesRemoveLabel(req: operations.IssuesRemoveLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesRemoveLabelResponse>;
    /**
     * issuesSetLabels - Set labels for an issue
     *
     * Removes any previous labels and sets the new labels for an issue.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#set-labels-for-an-issue - API method documentation
    **/
    issuesSetLabels(req: operations.IssuesSetLabelsRequest, config?: AxiosRequestConfig): Promise<operations.IssuesSetLabelsResponse>;
    /**
     * issuesUnlock - Unlock an issue
     *
     * Users with push access can unlock an issue's conversation.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#unlock-an-issue - API method documentation
    **/
    issuesUnlock(req: operations.IssuesUnlockRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUnlockResponse>;
    /**
     * issuesUpdate - Update an issue
     *
     * Issue owners and users with push access can edit an issue.
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues/#update-an-issue - API method documentation
    **/
    issuesUpdate(req: operations.IssuesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateResponse>;
    /**
     * issuesUpdateComment - Update an issue comment
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#update-an-issue-comment - API method documentation
    **/
    issuesUpdateComment(req: operations.IssuesUpdateCommentRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateCommentResponse>;
    /**
     * issuesUpdateLabel - Update a label
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#update-a-label - API method documentation
    **/
    issuesUpdateLabel(req: operations.IssuesUpdateLabelRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateLabelResponse>;
    /**
     * issuesUpdateMilestone - Update a milestone
     *
     * https://docs.github.com/enterprise-server@2.19/rest/reference/issues#update-a-milestone - API method documentation
    **/
    issuesUpdateMilestone(req: operations.IssuesUpdateMilestoneRequest, config?: AxiosRequestConfig): Promise<operations.IssuesUpdateMilestoneResponse>;
}
