package shared

type JobStatusEnum string

const (
	JobStatusEnumRunning    JobStatusEnum = "RUNNING"
	JobStatusEnumPaused     JobStatusEnum = "PAUSED"
	JobStatusEnumCancelled  JobStatusEnum = "CANCELLED"
	JobStatusEnumComplete   JobStatusEnum = "COMPLETE"
	JobStatusEnumIdle       JobStatusEnum = "IDLE"
	JobStatusEnumUserPaused JobStatusEnum = "USER_PAUSED"
)
