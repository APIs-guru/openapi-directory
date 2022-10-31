package shared

type ContinueAsNewWorkflowExecutionFailedCauseEnum string

const (
	ContinueAsNewWorkflowExecutionFailedCauseEnumUnhandledDecision                            ContinueAsNewWorkflowExecutionFailedCauseEnum = "UNHANDLED_DECISION"
	ContinueAsNewWorkflowExecutionFailedCauseEnumWorkflowTypeDeprecated                       ContinueAsNewWorkflowExecutionFailedCauseEnum = "WORKFLOW_TYPE_DEPRECATED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumWorkflowTypeDoesNotExist                     ContinueAsNewWorkflowExecutionFailedCauseEnum = "WORKFLOW_TYPE_DOES_NOT_EXIST"
	ContinueAsNewWorkflowExecutionFailedCauseEnumDefaultExecutionStartToCloseTimeoutUndefined ContinueAsNewWorkflowExecutionFailedCauseEnum = "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumDefaultTaskStartToCloseTimeoutUndefined      ContinueAsNewWorkflowExecutionFailedCauseEnum = "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumDefaultTaskListUndefined                     ContinueAsNewWorkflowExecutionFailedCauseEnum = "DEFAULT_TASK_LIST_UNDEFINED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumDefaultChildPolicyUndefined                  ContinueAsNewWorkflowExecutionFailedCauseEnum = "DEFAULT_CHILD_POLICY_UNDEFINED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumContinueAsNewWorkflowExecutionRateExceeded   ContinueAsNewWorkflowExecutionFailedCauseEnum = "CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED"
	ContinueAsNewWorkflowExecutionFailedCauseEnumOperationNotPermitted                        ContinueAsNewWorkflowExecutionFailedCauseEnum = "OPERATION_NOT_PERMITTED"
)
