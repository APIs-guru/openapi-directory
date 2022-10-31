package shared

type ExecutionStatusEnum string

const (
	ExecutionStatusEnumPending                 ExecutionStatusEnum = "Pending"
	ExecutionStatusEnumCompleted               ExecutionStatusEnum = "Completed"
	ExecutionStatusEnumCompletedWithViolations ExecutionStatusEnum = "CompletedWithViolations"
	ExecutionStatusEnumInProgress              ExecutionStatusEnum = "InProgress"
	ExecutionStatusEnumFailed                  ExecutionStatusEnum = "Failed"
	ExecutionStatusEnumStopping                ExecutionStatusEnum = "Stopping"
	ExecutionStatusEnumStopped                 ExecutionStatusEnum = "Stopped"
)
