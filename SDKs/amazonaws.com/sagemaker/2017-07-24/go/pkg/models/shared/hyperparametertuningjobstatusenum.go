package shared

type HyperParameterTuningJobStatusEnum string

const (
	HyperParameterTuningJobStatusEnumCompleted  HyperParameterTuningJobStatusEnum = "Completed"
	HyperParameterTuningJobStatusEnumInProgress HyperParameterTuningJobStatusEnum = "InProgress"
	HyperParameterTuningJobStatusEnumFailed     HyperParameterTuningJobStatusEnum = "Failed"
	HyperParameterTuningJobStatusEnumStopped    HyperParameterTuningJobStatusEnum = "Stopped"
	HyperParameterTuningJobStatusEnumStopping   HyperParameterTuningJobStatusEnum = "Stopping"
)
