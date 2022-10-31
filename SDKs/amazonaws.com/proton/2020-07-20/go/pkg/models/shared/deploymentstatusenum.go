package shared




type DeploymentStatusEnum string

const (
    DeploymentStatusEnumInProgress DeploymentStatusEnum = "IN_PROGRESS"
DeploymentStatusEnumFailed DeploymentStatusEnum = "FAILED"
DeploymentStatusEnumSucceeded DeploymentStatusEnum = "SUCCEEDED"
DeploymentStatusEnumDeleteInProgress DeploymentStatusEnum = "DELETE_IN_PROGRESS"
DeploymentStatusEnumDeleteFailed DeploymentStatusEnum = "DELETE_FAILED"
DeploymentStatusEnumDeleteComplete DeploymentStatusEnum = "DELETE_COMPLETE"
DeploymentStatusEnumCancelling DeploymentStatusEnum = "CANCELLING"
DeploymentStatusEnumCancelled DeploymentStatusEnum = "CANCELLED"
)


