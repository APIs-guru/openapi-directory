package shared




type LabelingJobStatusEnum string

const (
    LabelingJobStatusEnumInitializing LabelingJobStatusEnum = "Initializing"
LabelingJobStatusEnumInProgress LabelingJobStatusEnum = "InProgress"
LabelingJobStatusEnumCompleted LabelingJobStatusEnum = "Completed"
LabelingJobStatusEnumFailed LabelingJobStatusEnum = "Failed"
LabelingJobStatusEnumStopping LabelingJobStatusEnum = "Stopping"
LabelingJobStatusEnumStopped LabelingJobStatusEnum = "Stopped"
)


