


export enum StartChildWorkflowExecutionFailedCauseEnum {
    WorkflowTypeDoesNotExist = "WORKFLOW_TYPE_DOES_NOT_EXIST",
    WorkflowTypeDeprecated = "WORKFLOW_TYPE_DEPRECATED",
    OpenChildrenLimitExceeded = "OPEN_CHILDREN_LIMIT_EXCEEDED",
    OpenWorkflowsLimitExceeded = "OPEN_WORKFLOWS_LIMIT_EXCEEDED",
    ChildCreationRateExceeded = "CHILD_CREATION_RATE_EXCEEDED",
    WorkflowAlreadyRunning = "WORKFLOW_ALREADY_RUNNING",
    DefaultExecutionStartToCloseTimeoutUndefined = "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED",
    DefaultTaskListUndefined = "DEFAULT_TASK_LIST_UNDEFINED",
    DefaultTaskStartToCloseTimeoutUndefined = "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED",
    DefaultChildPolicyUndefined = "DEFAULT_CHILD_POLICY_UNDEFINED",
    OperationNotPermitted = "OPERATION_NOT_PERMITTED"
}
