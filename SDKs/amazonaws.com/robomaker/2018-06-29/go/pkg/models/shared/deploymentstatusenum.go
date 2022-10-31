package shared




type DeploymentStatusEnum string

const (
    DeploymentStatusEnumPending DeploymentStatusEnum = "Pending"
DeploymentStatusEnumPreparing DeploymentStatusEnum = "Preparing"
DeploymentStatusEnumInProgress DeploymentStatusEnum = "InProgress"
DeploymentStatusEnumFailed DeploymentStatusEnum = "Failed"
DeploymentStatusEnumSucceeded DeploymentStatusEnum = "Succeeded"
DeploymentStatusEnumCanceled DeploymentStatusEnum = "Canceled"
)


