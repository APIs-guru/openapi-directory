package shared

import (
"time")


type TaskRequestApprovalStatusEnum string

const (
    TaskRequestApprovalStatusEnumPending TaskRequestApprovalStatusEnum = "pending"
TaskRequestApprovalStatusEnumApproved TaskRequestApprovalStatusEnum = "approved"
TaskRequestApprovalStatusEnumRejected TaskRequestApprovalStatusEnum = "rejected"
TaskRequestApprovalStatusEnumChangesRequested TaskRequestApprovalStatusEnum = "changes_requested"
)



type TaskRequestAssigneeStatusEnum string

const (
    TaskRequestAssigneeStatusEnumToday TaskRequestAssigneeStatusEnum = "today"
TaskRequestAssigneeStatusEnumUpcoming TaskRequestAssigneeStatusEnum = "upcoming"
TaskRequestAssigneeStatusEnumLater TaskRequestAssigneeStatusEnum = "later"
TaskRequestAssigneeStatusEnumNew TaskRequestAssigneeStatusEnum = "new"
TaskRequestAssigneeStatusEnumInbox TaskRequestAssigneeStatusEnum = "inbox"
)


type TaskRequestExternal struct {
    Data *string `json:"data,omitempty"`
    Gid *string `json:"gid,omitempty"`
    
}

type TaskRequestMemberships struct {
    Project *ProjectCompact `json:"project,omitempty"`
    Section *SectionCompact `json:"section,omitempty"`
    
}


type TaskRequestResourceSubtypeEnum string

const (
    TaskRequestResourceSubtypeEnumDefaultTask TaskRequestResourceSubtypeEnum = "default_task"
TaskRequestResourceSubtypeEnumMilestone TaskRequestResourceSubtypeEnum = "milestone"
TaskRequestResourceSubtypeEnumSection TaskRequestResourceSubtypeEnum = "section"
TaskRequestResourceSubtypeEnumApproval TaskRequestResourceSubtypeEnum = "approval"
)


type TaskRequest struct {
    ApprovalStatus *TaskRequestApprovalStatusEnum `json:"approval_status,omitempty"`
    Assignee *string `json:"assignee,omitempty"`
    AssigneeSection *string `json:"assignee_section,omitempty"`
    AssigneeStatus *TaskRequestAssigneeStatusEnum `json:"assignee_status,omitempty"`
    Completed *bool `json:"completed,omitempty"`
    CompletedAt *time.Time `json:"completed_at,omitempty"`
    CompletedBy *UserCompact `json:"completed_by,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CustomFields map[string]string `json:"custom_fields,omitempty"`
    Dependencies []AsanaResource `json:"dependencies,omitempty"`
    Dependents []AsanaResource `json:"dependents,omitempty"`
    DueAt *time.Time `json:"due_at,omitempty"`
    DueOn *time.Time `json:"due_on,omitempty"`
    External *TaskRequestExternal `json:"external,omitempty"`
    Followers []string `json:"followers,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Hearted *bool `json:"hearted,omitempty"`
    Hearts []Like `json:"hearts,omitempty"`
    HTMLNotes *string `json:"html_notes,omitempty"`
    IsRenderedAsSeparator *bool `json:"is_rendered_as_separator,omitempty"`
    Liked *bool `json:"liked,omitempty"`
    Likes []Like `json:"likes,omitempty"`
    Memberships []TaskRequestMemberships `json:"memberships,omitempty"`
    ModifiedAt *time.Time `json:"modified_at,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    NumHearts *int64 `json:"num_hearts,omitempty"`
    NumLikes *int64 `json:"num_likes,omitempty"`
    NumSubtasks *int64 `json:"num_subtasks,omitempty"`
    Parent *string `json:"parent,omitempty"`
    Projects []string `json:"projects,omitempty"`
    ResourceSubtype *TaskRequestResourceSubtypeEnum `json:"resource_subtype,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *time.Time `json:"start_on,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Workspace *string `json:"workspace,omitempty"`
    
}

