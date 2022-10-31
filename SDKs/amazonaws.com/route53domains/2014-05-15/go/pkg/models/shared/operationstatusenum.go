package shared

type OperationStatusEnum string

const (
	OperationStatusEnumSubmitted  OperationStatusEnum = "SUBMITTED"
	OperationStatusEnumInProgress OperationStatusEnum = "IN_PROGRESS"
	OperationStatusEnumError      OperationStatusEnum = "ERROR"
	OperationStatusEnumSuccessful OperationStatusEnum = "SUCCESSFUL"
	OperationStatusEnumFailed     OperationStatusEnum = "FAILED"
)
