package shared

import (
	"time"
)

type TaskRequestApprovalStatusEnum string

const (
	TaskRequestApprovalStatusEnumPending          TaskRequestApprovalStatusEnum = "pending"
	TaskRequestApprovalStatusEnumApproved         TaskRequestApprovalStatusEnum = "approved"
	TaskRequestApprovalStatusEnumRejected         TaskRequestApprovalStatusEnum = "rejected"
	TaskRequestApprovalStatusEnumChangesRequested TaskRequestApprovalStatusEnum = "changes_requested"
)

type TaskRequestAssigneeStatusEnum string

const (
	TaskRequestAssigneeStatusEnumToday    TaskRequestAssigneeStatusEnum = "today"
	TaskRequestAssigneeStatusEnumUpcoming TaskRequestAssigneeStatusEnum = "upcoming"
	TaskRequestAssigneeStatusEnumLater    TaskRequestAssigneeStatusEnum = "later"
	TaskRequestAssigneeStatusEnumNew      TaskRequestAssigneeStatusEnum = "new"
	TaskRequestAssigneeStatusEnumInbox    TaskRequestAssigneeStatusEnum = "inbox"
)

// TaskRequestExternal
// *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
// The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
type TaskRequestExternal struct {
	Data *string `json:"data,omitempty"`
	Gid  *string `json:"gid,omitempty"`
}

type TaskRequestResourceSubtypeEnum string

const (
	TaskRequestResourceSubtypeEnumDefaultTask TaskRequestResourceSubtypeEnum = "default_task"
	TaskRequestResourceSubtypeEnumMilestone   TaskRequestResourceSubtypeEnum = "milestone"
	TaskRequestResourceSubtypeEnumSection     TaskRequestResourceSubtypeEnum = "section"
	TaskRequestResourceSubtypeEnumApproval    TaskRequestResourceSubtypeEnum = "approval"
)

type TaskRequestInput struct {
	ApprovalStatus  *TaskRequestApprovalStatusEnum  `json:"approval_status,omitempty"`
	Assignee        *string                         `json:"assignee,omitempty"`
	AssigneeSection *string                         `json:"assignee_section,omitempty"`
	AssigneeStatus  *TaskRequestAssigneeStatusEnum  `json:"assignee_status,omitempty"`
	Completed       *bool                           `json:"completed,omitempty"`
	CompletedBy     *UserCompactInput               `json:"completed_by,omitempty"`
	CustomFields    map[string]string               `json:"custom_fields,omitempty"`
	DueAt           *time.Time                      `json:"due_at,omitempty"`
	DueOn           *time.Time                      `json:"due_on,omitempty"`
	External        *TaskRequestExternal            `json:"external,omitempty"`
	Followers       []string                        `json:"followers,omitempty"`
	HTMLNotes       *string                         `json:"html_notes,omitempty"`
	Liked           *bool                           `json:"liked,omitempty"`
	Name            *string                         `json:"name,omitempty"`
	Notes           *string                         `json:"notes,omitempty"`
	Parent          *string                         `json:"parent,omitempty"`
	Projects        []string                        `json:"projects,omitempty"`
	ResourceSubtype *TaskRequestResourceSubtypeEnum `json:"resource_subtype,omitempty"`
	StartOn         *time.Time                      `json:"start_on,omitempty"`
	Tags            []string                        `json:"tags,omitempty"`
	Workspace       *string                         `json:"workspace,omitempty"`
}
