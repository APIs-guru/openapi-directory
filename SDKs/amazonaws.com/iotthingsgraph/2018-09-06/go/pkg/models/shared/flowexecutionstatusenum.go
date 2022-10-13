package shared

type FlowExecutionStatusEnum string

const (
	FlowExecutionStatusEnumRunning   FlowExecutionStatusEnum = "RUNNING"
	FlowExecutionStatusEnumAborted   FlowExecutionStatusEnum = "ABORTED"
	FlowExecutionStatusEnumSucceeded FlowExecutionStatusEnum = "SUCCEEDED"
	FlowExecutionStatusEnumFailed    FlowExecutionStatusEnum = "FAILED"
)
