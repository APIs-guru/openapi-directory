package shared

type JobStatusEnum string

const (
	JobStatusEnumSubmitted          JobStatusEnum = "SUBMITTED"
	JobStatusEnumInProgress         JobStatusEnum = "IN_PROGRESS"
	JobStatusEnumCompleted          JobStatusEnum = "COMPLETED"
	JobStatusEnumCompletedWithError JobStatusEnum = "COMPLETED_WITH_ERROR"
	JobStatusEnumFailed             JobStatusEnum = "FAILED"
	JobStatusEnumStopRequested      JobStatusEnum = "STOP_REQUESTED"
	JobStatusEnumStopped            JobStatusEnum = "STOPPED"
)
