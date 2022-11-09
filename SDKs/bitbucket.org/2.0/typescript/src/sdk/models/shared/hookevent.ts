import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HookEventEventEnum {
    PullrequestUnapproved = "pullrequest:unapproved"
,    IssueCommentCreated = "issue:comment_created"
,    RepoImported = "repo:imported"
,    RepoCreated = "repo:created"
,    RepoCommitCommentCreated = "repo:commit_comment_created"
,    PullrequestApproved = "pullrequest:approved"
,    PullrequestCommentUpdated = "pullrequest:comment_updated"
,    IssueUpdated = "issue:updated"
,    ProjectUpdated = "project:updated"
,    RepoDeleted = "repo:deleted"
,    PullrequestChangesRequestCreated = "pullrequest:changes_request_created"
,    PullrequestCommentCreated = "pullrequest:comment_created"
,    RepoCommitStatusUpdated = "repo:commit_status_updated"
,    PullrequestUpdated = "pullrequest:updated"
,    IssueCreated = "issue:created"
,    RepoFork = "repo:fork"
,    PullrequestCommentDeleted = "pullrequest:comment_deleted"
,    RepoCommitStatusCreated = "repo:commit_status_created"
,    RepoUpdated = "repo:updated"
,    PullrequestRejected = "pullrequest:rejected"
,    PullrequestFulfilled = "pullrequest:fulfilled"
,    PullrequestCreated = "pullrequest:created"
,    PullrequestChangesRequestRemoved = "pullrequest:changes_request_removed"
,    RepoTransfer = "repo:transfer"
,    RepoPush = "repo:push"
}


// HookEvent
/** 
 * An event, associated with a resource or subject type.
**/
export class HookEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=event" })
  event?: HookEventEventEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;
}
