package shared

type EdgePackagingJobStatusEnum string

const (
	EdgePackagingJobStatusEnumStarting   EdgePackagingJobStatusEnum = "STARTING"
	EdgePackagingJobStatusEnumInprogress EdgePackagingJobStatusEnum = "INPROGRESS"
	EdgePackagingJobStatusEnumCompleted  EdgePackagingJobStatusEnum = "COMPLETED"
	EdgePackagingJobStatusEnumFailed     EdgePackagingJobStatusEnum = "FAILED"
	EdgePackagingJobStatusEnumStopping   EdgePackagingJobStatusEnum = "STOPPING"
	EdgePackagingJobStatusEnumStopped    EdgePackagingJobStatusEnum = "STOPPED"
)
