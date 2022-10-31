package shared

type RecordStatusEnum string

const (
	RecordStatusEnumCreated           RecordStatusEnum = "CREATED"
	RecordStatusEnumInProgress        RecordStatusEnum = "IN_PROGRESS"
	RecordStatusEnumInProgressInError RecordStatusEnum = "IN_PROGRESS_IN_ERROR"
	RecordStatusEnumSucceeded         RecordStatusEnum = "SUCCEEDED"
	RecordStatusEnumFailed            RecordStatusEnum = "FAILED"
)
