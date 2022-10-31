package shared

type ProcessingJobStatusEnum string

const (
	ProcessingJobStatusEnumInProgress ProcessingJobStatusEnum = "InProgress"
	ProcessingJobStatusEnumCompleted  ProcessingJobStatusEnum = "Completed"
	ProcessingJobStatusEnumFailed     ProcessingJobStatusEnum = "Failed"
	ProcessingJobStatusEnumStopping   ProcessingJobStatusEnum = "Stopping"
	ProcessingJobStatusEnumStopped    ProcessingJobStatusEnum = "Stopped"
)
