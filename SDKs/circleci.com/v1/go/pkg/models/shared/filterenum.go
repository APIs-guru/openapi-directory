package shared

type FilterEnum string

const (
	FilterEnumCompleted  FilterEnum = "completed"
	FilterEnumSuccessful FilterEnum = "successful"
	FilterEnumFailed     FilterEnum = "failed"
	FilterEnumRunning    FilterEnum = "running"
)
