package shared

type OperationStatusEnum string

const (
	OperationStatusEnumNotStarted OperationStatusEnum = "NotStarted"
	OperationStatusEnumStarted    OperationStatusEnum = "Started"
	OperationStatusEnumFailed     OperationStatusEnum = "Failed"
	OperationStatusEnumCompleted  OperationStatusEnum = "Completed"
	OperationStatusEnumSucceeded  OperationStatusEnum = "Succeeded"
)
