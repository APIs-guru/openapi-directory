package shared

type ExecutionStatusEnum string

const (
	ExecutionStatusEnumRunning   ExecutionStatusEnum = "RUNNING"
	ExecutionStatusEnumSucceeded ExecutionStatusEnum = "SUCCEEDED"
	ExecutionStatusEnumFailed    ExecutionStatusEnum = "FAILED"
	ExecutionStatusEnumTimedOut  ExecutionStatusEnum = "TIMED_OUT"
	ExecutionStatusEnumAborted   ExecutionStatusEnum = "ABORTED"
)
