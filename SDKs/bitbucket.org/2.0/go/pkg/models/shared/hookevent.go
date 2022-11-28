package shared

type HookEventEventEnum string

const (
	HookEventEventEnumPullrequestUnapproved            HookEventEventEnum = "pullrequest:unapproved"
	HookEventEventEnumIssueCommentCreated              HookEventEventEnum = "issue:comment_created"
	HookEventEventEnumRepoImported                     HookEventEventEnum = "repo:imported"
	HookEventEventEnumRepoCreated                      HookEventEventEnum = "repo:created"
	HookEventEventEnumRepoCommitCommentCreated         HookEventEventEnum = "repo:commit_comment_created"
	HookEventEventEnumPullrequestApproved              HookEventEventEnum = "pullrequest:approved"
	HookEventEventEnumPullrequestCommentUpdated        HookEventEventEnum = "pullrequest:comment_updated"
	HookEventEventEnumIssueUpdated                     HookEventEventEnum = "issue:updated"
	HookEventEventEnumProjectUpdated                   HookEventEventEnum = "project:updated"
	HookEventEventEnumRepoDeleted                      HookEventEventEnum = "repo:deleted"
	HookEventEventEnumPullrequestChangesRequestCreated HookEventEventEnum = "pullrequest:changes_request_created"
	HookEventEventEnumPullrequestCommentCreated        HookEventEventEnum = "pullrequest:comment_created"
	HookEventEventEnumRepoCommitStatusUpdated          HookEventEventEnum = "repo:commit_status_updated"
	HookEventEventEnumPullrequestUpdated               HookEventEventEnum = "pullrequest:updated"
	HookEventEventEnumIssueCreated                     HookEventEventEnum = "issue:created"
	HookEventEventEnumRepoFork                         HookEventEventEnum = "repo:fork"
	HookEventEventEnumPullrequestCommentDeleted        HookEventEventEnum = "pullrequest:comment_deleted"
	HookEventEventEnumRepoCommitStatusCreated          HookEventEventEnum = "repo:commit_status_created"
	HookEventEventEnumRepoUpdated                      HookEventEventEnum = "repo:updated"
	HookEventEventEnumPullrequestRejected              HookEventEventEnum = "pullrequest:rejected"
	HookEventEventEnumPullrequestFulfilled             HookEventEventEnum = "pullrequest:fulfilled"
	HookEventEventEnumPullrequestCreated               HookEventEventEnum = "pullrequest:created"
	HookEventEventEnumPullrequestChangesRequestRemoved HookEventEventEnum = "pullrequest:changes_request_removed"
	HookEventEventEnumRepoTransfer                     HookEventEventEnum = "repo:transfer"
	HookEventEventEnumRepoPush                         HookEventEventEnum = "repo:push"
)

// HookEvent
// An event, associated with a resource or subject type.
type HookEvent struct {
	Category    *string             `json:"category,omitempty"`
	Description *string             `json:"description,omitempty"`
	Event       *HookEventEventEnum `json:"event,omitempty"`
	Label       *string             `json:"label,omitempty"`
}
