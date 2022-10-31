package shared

type JobStatusEnum string

const (
	JobStatusEnumCreated    JobStatusEnum = "CREATED"
	JobStatusEnumProcessing JobStatusEnum = "PROCESSING"
	JobStatusEnumCompleted  JobStatusEnum = "COMPLETED"
	JobStatusEnumFailed     JobStatusEnum = "FAILED"
)
