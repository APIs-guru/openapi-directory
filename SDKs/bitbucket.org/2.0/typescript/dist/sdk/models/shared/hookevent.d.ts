import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HookEventEventEnum {
    PullrequestUnapproved = "pullrequest:unapproved",
    IssueCommentCreated = "issue:comment_created",
    RepoImported = "repo:imported",
    RepoCreated = "repo:created",
    RepoCommitCommentCreated = "repo:commit_comment_created",
    PullrequestApproved = "pullrequest:approved",
    PullrequestCommentUpdated = "pullrequest:comment_updated",
    IssueUpdated = "issue:updated",
    ProjectUpdated = "project:updated",
    RepoDeleted = "repo:deleted",
    PullrequestChangesRequestCreated = "pullrequest:changes_request_created",
    PullrequestCommentCreated = "pullrequest:comment_created",
    RepoCommitStatusUpdated = "repo:commit_status_updated",
    PullrequestUpdated = "pullrequest:updated",
    IssueCreated = "issue:created",
    RepoFork = "repo:fork",
    PullrequestCommentDeleted = "pullrequest:comment_deleted",
    RepoCommitStatusCreated = "repo:commit_status_created",
    RepoUpdated = "repo:updated",
    PullrequestRejected = "pullrequest:rejected",
    PullrequestFulfilled = "pullrequest:fulfilled",
    PullrequestCreated = "pullrequest:created",
    PullrequestChangesRequestRemoved = "pullrequest:changes_request_removed",
    RepoTransfer = "repo:transfer",
    RepoPush = "repo:push"
}
/**
 * An event, associated with a resource or subject type.
**/
export declare class HookEvent extends SpeakeasyBase {
    category?: string;
    description?: string;
    event?: HookEventEventEnum;
    label?: string;
}
