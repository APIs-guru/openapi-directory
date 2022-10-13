package shared

type TaskStatusEnum string

const (
	TaskStatusEnumScheduled  TaskStatusEnum = "scheduled"
	TaskStatusEnumInProgress TaskStatusEnum = "inProgress"
	TaskStatusEnumCompleted  TaskStatusEnum = "completed"
	TaskStatusEnumFailed     TaskStatusEnum = "failed"
)
