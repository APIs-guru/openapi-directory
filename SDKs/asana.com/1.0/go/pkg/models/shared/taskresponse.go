package shared

import (
	"time"
)

type TaskResponseApprovalStatusEnum string

const (
	TaskResponseApprovalStatusEnumPending          TaskResponseApprovalStatusEnum = "pending"
	TaskResponseApprovalStatusEnumApproved         TaskResponseApprovalStatusEnum = "approved"
	TaskResponseApprovalStatusEnumRejected         TaskResponseApprovalStatusEnum = "rejected"
	TaskResponseApprovalStatusEnumChangesRequested TaskResponseApprovalStatusEnum = "changes_requested"
)

type TaskResponseAssignee struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type TaskResponseAssigneeSection struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type TaskResponseAssigneeStatusEnum string

const (
	TaskResponseAssigneeStatusEnumToday    TaskResponseAssigneeStatusEnum = "today"
	TaskResponseAssigneeStatusEnumUpcoming TaskResponseAssigneeStatusEnum = "upcoming"
	TaskResponseAssigneeStatusEnumLater    TaskResponseAssigneeStatusEnum = "later"
	TaskResponseAssigneeStatusEnumNew      TaskResponseAssigneeStatusEnum = "new"
	TaskResponseAssigneeStatusEnumInbox    TaskResponseAssigneeStatusEnum = "inbox"
)

// TaskResponseExternal
// *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
// The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation `external:custom_gid` to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
type TaskResponseExternal struct {
	Data *string `json:"data,omitempty"`
	Gid  *string `json:"gid,omitempty"`
}

type TaskResponseMemberships struct {
	Project *ProjectCompact `json:"project,omitempty"`
	Section *SectionCompact `json:"section,omitempty"`
}

type TaskResponseParent struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type TaskResponseResourceSubtypeEnum string

const (
	TaskResponseResourceSubtypeEnumDefaultTask TaskResponseResourceSubtypeEnum = "default_task"
	TaskResponseResourceSubtypeEnumMilestone   TaskResponseResourceSubtypeEnum = "milestone"
	TaskResponseResourceSubtypeEnumSection     TaskResponseResourceSubtypeEnum = "section"
	TaskResponseResourceSubtypeEnumApproval    TaskResponseResourceSubtypeEnum = "approval"
)

type TaskResponseWorkspace struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type TaskResponse struct {
	ApprovalStatus        *TaskResponseApprovalStatusEnum  `json:"approval_status,omitempty"`
	Assignee              *TaskResponseAssignee            `json:"assignee,omitempty"`
	AssigneeSection       *TaskResponseAssigneeSection     `json:"assignee_section,omitempty"`
	AssigneeStatus        *TaskResponseAssigneeStatusEnum  `json:"assignee_status,omitempty"`
	Completed             *bool                            `json:"completed,omitempty"`
	CompletedAt           *time.Time                       `json:"completed_at,omitempty"`
	CompletedBy           *UserCompact                     `json:"completed_by,omitempty"`
	CreatedAt             *time.Time                       `json:"created_at,omitempty"`
	CustomFields          []CustomFieldResponse            `json:"custom_fields,omitempty"`
	Dependencies          []AsanaResource                  `json:"dependencies,omitempty"`
	Dependents            []AsanaResource                  `json:"dependents,omitempty"`
	DueAt                 *time.Time                       `json:"due_at,omitempty"`
	DueOn                 *time.Time                       `json:"due_on,omitempty"`
	External              *TaskResponseExternal            `json:"external,omitempty"`
	Followers             []UserCompact                    `json:"followers,omitempty"`
	Gid                   *string                          `json:"gid,omitempty"`
	Hearted               *bool                            `json:"hearted,omitempty"`
	Hearts                []Like                           `json:"hearts,omitempty"`
	HTMLNotes             *string                          `json:"html_notes,omitempty"`
	IsRenderedAsSeparator *bool                            `json:"is_rendered_as_separator,omitempty"`
	Liked                 *bool                            `json:"liked,omitempty"`
	Likes                 []Like                           `json:"likes,omitempty"`
	Memberships           []TaskResponseMemberships        `json:"memberships,omitempty"`
	ModifiedAt            *time.Time                       `json:"modified_at,omitempty"`
	Name                  *string                          `json:"name,omitempty"`
	Notes                 *string                          `json:"notes,omitempty"`
	NumHearts             *int64                           `json:"num_hearts,omitempty"`
	NumLikes              *int64                           `json:"num_likes,omitempty"`
	NumSubtasks           *int64                           `json:"num_subtasks,omitempty"`
	Parent                *TaskResponseParent              `json:"parent,omitempty"`
	PermalinkURL          *string                          `json:"permalink_url,omitempty"`
	Projects              []ProjectCompact                 `json:"projects,omitempty"`
	ResourceSubtype       *TaskResponseResourceSubtypeEnum `json:"resource_subtype,omitempty"`
	ResourceType          *string                          `json:"resource_type,omitempty"`
	StartOn               *time.Time                       `json:"start_on,omitempty"`
	Tags                  []TagCompact                     `json:"tags,omitempty"`
	Workspace             *TaskResponseWorkspace           `json:"workspace,omitempty"`
}
