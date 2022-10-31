package shared

type RequestCancelExternalWorkflowExecutionFailedCauseEnum string

const (
	RequestCancelExternalWorkflowExecutionFailedCauseEnumUnknownExternalWorkflowExecution                   RequestCancelExternalWorkflowExecutionFailedCauseEnum = "UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"
	RequestCancelExternalWorkflowExecutionFailedCauseEnumRequestCancelExternalWorkflowExecutionRateExceeded RequestCancelExternalWorkflowExecutionFailedCauseEnum = "REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED"
	RequestCancelExternalWorkflowExecutionFailedCauseEnumOperationNotPermitted                              RequestCancelExternalWorkflowExecutionFailedCauseEnum = "OPERATION_NOT_PERMITTED"
)
