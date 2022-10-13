package shared

type AnomalyDetectionTaskStatusEnum string

const (
	AnomalyDetectionTaskStatusEnumPending          AnomalyDetectionTaskStatusEnum = "PENDING"
	AnomalyDetectionTaskStatusEnumInProgress       AnomalyDetectionTaskStatusEnum = "IN_PROGRESS"
	AnomalyDetectionTaskStatusEnumCompleted        AnomalyDetectionTaskStatusEnum = "COMPLETED"
	AnomalyDetectionTaskStatusEnumFailed           AnomalyDetectionTaskStatusEnum = "FAILED"
	AnomalyDetectionTaskStatusEnumFailedToSchedule AnomalyDetectionTaskStatusEnum = "FAILED_TO_SCHEDULE"
)
