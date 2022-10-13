package shared

type AutoMlJobStatusEnum string

const (
	AutoMlJobStatusEnumCompleted  AutoMlJobStatusEnum = "Completed"
	AutoMlJobStatusEnumInProgress AutoMlJobStatusEnum = "InProgress"
	AutoMlJobStatusEnumFailed     AutoMlJobStatusEnum = "Failed"
	AutoMlJobStatusEnumStopped    AutoMlJobStatusEnum = "Stopped"
	AutoMlJobStatusEnumStopping   AutoMlJobStatusEnum = "Stopping"
)
