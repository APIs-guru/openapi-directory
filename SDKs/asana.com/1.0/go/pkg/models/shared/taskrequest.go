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

type TaskRequestExternal struct {
	Data *string `json:"data"`
	Gid  *string `json:"gid"`
}

type TaskRequestMemberships struct {
	Project *ProjectCompact `json:"project"`
	Section *SectionCompact `json:"section"`
}

type TaskRequestResourceSubtypeEnum string

const (
	TaskRequestResourceSubtypeEnumDefaultTask TaskRequestResourceSubtypeEnum = "default_task"
	TaskRequestResourceSubtypeEnumMilestone   TaskRequestResourceSubtypeEnum = "milestone"
	TaskRequestResourceSubtypeEnumSection     TaskRequestResourceSubtypeEnum = "section"
	TaskRequestResourceSubtypeEnumApproval    TaskRequestResourceSubtypeEnum = "approval"
)

type TaskRequest struct {
	ApprovalStatus        *TaskRequestApprovalStatusEnum  `json:"approval_status"`
	Assignee              *string                         `json:"assignee"`
	AssigneeSection       *string                         `json:"assignee_section"`
	AssigneeStatus        *TaskRequestAssigneeStatusEnum  `json:"assignee_status"`
	Completed             *bool                           `json:"completed"`
	CompletedAt           *time.Time                      `json:"completed_at"`
	CompletedBy           *UserCompact                    `json:"completed_by"`
	CreatedAt             *time.Time                      `json:"created_at"`
	CustomFields          map[string]string               `json:"custom_fields"`
	Dependencies          []AsanaResource                 `json:"dependencies"`
	Dependents            []AsanaResource                 `json:"dependents"`
	DueAt                 *time.Time                      `json:"due_at"`
	DueOn                 *time.Time                      `json:"due_on"`
	External              *TaskRequestExternal            `json:"external"`
	Followers             []string                        `json:"followers"`
	Gid                   *string                         `json:"gid"`
	Hearted               *bool                           `json:"hearted"`
	Hearts                []Like                          `json:"hearts"`
	HTMLNotes             *string                         `json:"html_notes"`
	IsRenderedAsSeparator *bool                           `json:"is_rendered_as_separator"`
	Liked                 *bool                           `json:"liked"`
	Likes                 []Like                          `json:"likes"`
	Memberships           []TaskRequestMemberships        `json:"memberships"`
	ModifiedAt            *time.Time                      `json:"modified_at"`
	Name                  *string                         `json:"name"`
	Notes                 *string                         `json:"notes"`
	NumHearts             *int64                          `json:"num_hearts"`
	NumLikes              *int64                          `json:"num_likes"`
	NumSubtasks           *int64                          `json:"num_subtasks"`
	Parent                *string                         `json:"parent"`
	Projects              []string                        `json:"projects"`
	ResourceSubtype       *TaskRequestResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType          *string                         `json:"resource_type"`
	StartOn               *time.Time                      `json:"start_on"`
	Tags                  []string                        `json:"tags"`
	Workspace             *string                         `json:"workspace"`
}
