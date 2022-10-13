package shared

type JobResponseStatusEnum string

const (
	JobResponseStatusEnumNotStarted JobResponseStatusEnum = "not_started"
	JobResponseStatusEnumInProgress JobResponseStatusEnum = "in_progress"
	JobResponseStatusEnumCompleted  JobResponseStatusEnum = "completed"
	JobResponseStatusEnumFailed     JobResponseStatusEnum = "failed"
)

type JobResponse struct {
	Gid             *string                `json:"gid"`
	NewProject      *ProjectCompact        `json:"new_project"`
	NewTask         *TaskCompact           `json:"new_task"`
	ResourceSubtype *string                `json:"resource_subtype"`
	ResourceType    *string                `json:"resource_type"`
	Status          *JobResponseStatusEnum `json:"status"`
}
