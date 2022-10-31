package shared




type StepStatusEnum string

const (
    StepStatusEnumStarting StepStatusEnum = "Starting"
StepStatusEnumExecuting StepStatusEnum = "Executing"
StepStatusEnumStopping StepStatusEnum = "Stopping"
StepStatusEnumStopped StepStatusEnum = "Stopped"
StepStatusEnumFailed StepStatusEnum = "Failed"
StepStatusEnumSucceeded StepStatusEnum = "Succeeded"
)


