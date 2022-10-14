package shared

type ProjectDuplicateRequestIncludeEnum string

const (
	ProjectDuplicateRequestIncludeEnumMembers          ProjectDuplicateRequestIncludeEnum = "members"
	ProjectDuplicateRequestIncludeEnumNotes            ProjectDuplicateRequestIncludeEnum = "notes"
	ProjectDuplicateRequestIncludeEnumForms            ProjectDuplicateRequestIncludeEnum = "forms"
	ProjectDuplicateRequestIncludeEnumTaskNotes        ProjectDuplicateRequestIncludeEnum = "task_notes"
	ProjectDuplicateRequestIncludeEnumTaskAssignee     ProjectDuplicateRequestIncludeEnum = "task_assignee"
	ProjectDuplicateRequestIncludeEnumTaskSubtasks     ProjectDuplicateRequestIncludeEnum = "task_subtasks"
	ProjectDuplicateRequestIncludeEnumTaskAttachments  ProjectDuplicateRequestIncludeEnum = "task_attachments"
	ProjectDuplicateRequestIncludeEnumTaskDates        ProjectDuplicateRequestIncludeEnum = "task_dates"
	ProjectDuplicateRequestIncludeEnumTaskDependencies ProjectDuplicateRequestIncludeEnum = "task_dependencies"
	ProjectDuplicateRequestIncludeEnumTaskFollowers    ProjectDuplicateRequestIncludeEnum = "task_followers"
	ProjectDuplicateRequestIncludeEnumTaskTags         ProjectDuplicateRequestIncludeEnum = "task_tags"
	ProjectDuplicateRequestIncludeEnumTaskProjects     ProjectDuplicateRequestIncludeEnum = "task_projects"
)

type ProjectDuplicateRequestScheduleDates struct {
	DueOn              *string `json:"due_on,omitempty"`
	ShouldSkipWeekends bool    `json:"should_skip_weekends"`
	StartOn            *string `json:"start_on,omitempty"`
}

type ProjectDuplicateRequest struct {
	Include       *ProjectDuplicateRequestIncludeEnum   `json:"include,omitempty"`
	Name          string                                `json:"name"`
	ScheduleDates *ProjectDuplicateRequestScheduleDates `json:"schedule_dates,omitempty"`
	Team          *string                               `json:"team,omitempty"`
}
