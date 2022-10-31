package shared

type StartChildWorkflowExecutionFailedCauseEnum string

const (
	StartChildWorkflowExecutionFailedCauseEnumWorkflowTypeDoesNotExist                     StartChildWorkflowExecutionFailedCauseEnum = "WORKFLOW_TYPE_DOES_NOT_EXIST"
	StartChildWorkflowExecutionFailedCauseEnumWorkflowTypeDeprecated                       StartChildWorkflowExecutionFailedCauseEnum = "WORKFLOW_TYPE_DEPRECATED"
	StartChildWorkflowExecutionFailedCauseEnumOpenChildrenLimitExceeded                    StartChildWorkflowExecutionFailedCauseEnum = "OPEN_CHILDREN_LIMIT_EXCEEDED"
	StartChildWorkflowExecutionFailedCauseEnumOpenWorkflowsLimitExceeded                   StartChildWorkflowExecutionFailedCauseEnum = "OPEN_WORKFLOWS_LIMIT_EXCEEDED"
	StartChildWorkflowExecutionFailedCauseEnumChildCreationRateExceeded                    StartChildWorkflowExecutionFailedCauseEnum = "CHILD_CREATION_RATE_EXCEEDED"
	StartChildWorkflowExecutionFailedCauseEnumWorkflowAlreadyRunning                       StartChildWorkflowExecutionFailedCauseEnum = "WORKFLOW_ALREADY_RUNNING"
	StartChildWorkflowExecutionFailedCauseEnumDefaultExecutionStartToCloseTimeoutUndefined StartChildWorkflowExecutionFailedCauseEnum = "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED"
	StartChildWorkflowExecutionFailedCauseEnumDefaultTaskListUndefined                     StartChildWorkflowExecutionFailedCauseEnum = "DEFAULT_TASK_LIST_UNDEFINED"
	StartChildWorkflowExecutionFailedCauseEnumDefaultTaskStartToCloseTimeoutUndefined      StartChildWorkflowExecutionFailedCauseEnum = "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED"
	StartChildWorkflowExecutionFailedCauseEnumDefaultChildPolicyUndefined                  StartChildWorkflowExecutionFailedCauseEnum = "DEFAULT_CHILD_POLICY_UNDEFINED"
	StartChildWorkflowExecutionFailedCauseEnumOperationNotPermitted                        StartChildWorkflowExecutionFailedCauseEnum = "OPERATION_NOT_PERMITTED"
)
