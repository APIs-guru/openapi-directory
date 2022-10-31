package shared

type JobStatusEnum string

const (
	JobStatusEnumPending   JobStatusEnum = "PENDING"
	JobStatusEnumStarted   JobStatusEnum = "STARTED"
	JobStatusEnumCompleted JobStatusEnum = "COMPLETED"
)
