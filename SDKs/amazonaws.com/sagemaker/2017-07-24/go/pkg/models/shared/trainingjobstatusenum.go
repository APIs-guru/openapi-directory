package shared

type TrainingJobStatusEnum string

const (
	TrainingJobStatusEnumInProgress TrainingJobStatusEnum = "InProgress"
	TrainingJobStatusEnumCompleted  TrainingJobStatusEnum = "Completed"
	TrainingJobStatusEnumFailed     TrainingJobStatusEnum = "Failed"
	TrainingJobStatusEnumStopping   TrainingJobStatusEnum = "Stopping"
	TrainingJobStatusEnumStopped    TrainingJobStatusEnum = "Stopped"
)
