package shared

type TaskDuplicateRequestIncludeEnum string

const (
	TaskDuplicateRequestIncludeEnumNotes        TaskDuplicateRequestIncludeEnum = "notes"
	TaskDuplicateRequestIncludeEnumAssignee     TaskDuplicateRequestIncludeEnum = "assignee"
	TaskDuplicateRequestIncludeEnumSubtasks     TaskDuplicateRequestIncludeEnum = "subtasks"
	TaskDuplicateRequestIncludeEnumAttachments  TaskDuplicateRequestIncludeEnum = "attachments"
	TaskDuplicateRequestIncludeEnumTags         TaskDuplicateRequestIncludeEnum = "tags"
	TaskDuplicateRequestIncludeEnumFollowers    TaskDuplicateRequestIncludeEnum = "followers"
	TaskDuplicateRequestIncludeEnumProjects     TaskDuplicateRequestIncludeEnum = "projects"
	TaskDuplicateRequestIncludeEnumDates        TaskDuplicateRequestIncludeEnum = "dates"
	TaskDuplicateRequestIncludeEnumDependencies TaskDuplicateRequestIncludeEnum = "dependencies"
	TaskDuplicateRequestIncludeEnumParent       TaskDuplicateRequestIncludeEnum = "parent"
)

type TaskDuplicateRequest struct {
	Include *TaskDuplicateRequestIncludeEnum `json:"include,omitempty"`
	Name    *string                          `json:"name,omitempty"`
}
