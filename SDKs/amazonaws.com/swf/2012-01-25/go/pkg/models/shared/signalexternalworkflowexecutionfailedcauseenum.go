package shared

type SignalExternalWorkflowExecutionFailedCauseEnum string

const (
	SignalExternalWorkflowExecutionFailedCauseEnumUnknownExternalWorkflowExecution            SignalExternalWorkflowExecutionFailedCauseEnum = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
	SignalExternalWorkflowExecutionFailedCauseEnumSignalExternalWorkflowExecutionRateExceeded SignalExternalWorkflowExecutionFailedCauseEnum = "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
	SignalExternalWorkflowExecutionFailedCauseEnumOperationNotPermitted                       SignalExternalWorkflowExecutionFailedCauseEnum = "OPERATION_NOT_PERMITTED"
)
