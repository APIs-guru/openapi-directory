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
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type TaskResponseAssigneeSection struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type TaskResponseAssigneeStatusEnum string

const (
	TaskResponseAssigneeStatusEnumToday    TaskResponseAssigneeStatusEnum = "today"
	TaskResponseAssigneeStatusEnumUpcoming TaskResponseAssigneeStatusEnum = "upcoming"
	TaskResponseAssigneeStatusEnumLater    TaskResponseAssigneeStatusEnum = "later"
	TaskResponseAssigneeStatusEnumNew      TaskResponseAssigneeStatusEnum = "new"
	TaskResponseAssigneeStatusEnumInbox    TaskResponseAssigneeStatusEnum = "inbox"
)

type TaskResponseExternal struct {
	Data *string `json:"data"`
	Gid  *string `json:"gid"`
}

type TaskResponseMemberships struct {
	Project *ProjectCompact `json:"project"`
	Section *SectionCompact `json:"section"`
}

type TaskResponseParent struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type TaskResponseResourceSubtypeEnum string

const (
	TaskResponseResourceSubtypeEnumDefaultTask TaskResponseResourceSubtypeEnum = "default_task"
	TaskResponseResourceSubtypeEnumMilestone   TaskResponseResourceSubtypeEnum = "milestone"
	TaskResponseResourceSubtypeEnumSection     TaskResponseResourceSubtypeEnum = "section"
	TaskResponseResourceSubtypeEnumApproval    TaskResponseResourceSubtypeEnum = "approval"
)

type TaskResponseWorkspace struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type TaskResponse struct {
	ApprovalStatus        *TaskResponseApprovalStatusEnum  `json:"approval_status"`
	Assignee              *TaskResponseAssignee            `json:"assignee"`
	AssigneeSection       *TaskResponseAssigneeSection     `json:"assignee_section"`
	AssigneeStatus        *TaskResponseAssigneeStatusEnum  `json:"assignee_status"`
	Completed             *bool                            `json:"completed"`
	CompletedAt           *time.Time                       `json:"completed_at"`
	CompletedBy           *UserCompact                     `json:"completed_by"`
	CreatedAt             *time.Time                       `json:"created_at"`
	CustomFields          []CustomFieldResponse            `json:"custom_fields"`
	Dependencies          []AsanaResource                  `json:"dependencies"`
	Dependents            []AsanaResource                  `json:"dependents"`
	DueAt                 *time.Time                       `json:"due_at"`
	DueOn                 *time.Time                       `json:"due_on"`
	External              *TaskResponseExternal            `json:"external"`
	Followers             []UserCompact                    `json:"followers"`
	Gid                   *string                          `json:"gid"`
	Hearted               *bool                            `json:"hearted"`
	Hearts                []Like                           `json:"hearts"`
	HTMLNotes             *string                          `json:"html_notes"`
	IsRenderedAsSeparator *bool                            `json:"is_rendered_as_separator"`
	Liked                 *bool                            `json:"liked"`
	Likes                 []Like                           `json:"likes"`
	Memberships           []TaskResponseMemberships        `json:"memberships"`
	ModifiedAt            *time.Time                       `json:"modified_at"`
	Name                  *string                          `json:"name"`
	Notes                 *string                          `json:"notes"`
	NumHearts             *int64                           `json:"num_hearts"`
	NumLikes              *int64                           `json:"num_likes"`
	NumSubtasks           *int64                           `json:"num_subtasks"`
	Parent                *TaskResponseParent              `json:"parent"`
	PermalinkURL          *string                          `json:"permalink_url"`
	Projects              []ProjectCompact                 `json:"projects"`
	ResourceSubtype       *TaskResponseResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType          *string                          `json:"resource_type"`
	StartOn               *time.Time                       `json:"start_on"`
	Tags                  []TagCompact                     `json:"tags"`
	Workspace             *TaskResponseWorkspace           `json:"workspace"`
}
