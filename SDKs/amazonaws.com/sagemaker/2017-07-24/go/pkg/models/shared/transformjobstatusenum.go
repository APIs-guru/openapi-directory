package shared




type TransformJobStatusEnum string

const (
    TransformJobStatusEnumInProgress TransformJobStatusEnum = "InProgress"
TransformJobStatusEnumCompleted TransformJobStatusEnum = "Completed"
TransformJobStatusEnumFailed TransformJobStatusEnum = "Failed"
TransformJobStatusEnumStopping TransformJobStatusEnum = "Stopping"
TransformJobStatusEnumStopped TransformJobStatusEnum = "Stopped"
)


