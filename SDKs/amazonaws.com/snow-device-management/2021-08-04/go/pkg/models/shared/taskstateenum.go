package shared

type TaskStateEnum string

const (
	TaskStateEnumInProgress TaskStateEnum = "IN_PROGRESS"
	TaskStateEnumCanceled   TaskStateEnum = "CANCELED"
	TaskStateEnumCompleted  TaskStateEnum = "COMPLETED"
)
