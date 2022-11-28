export var StartChildWorkflowExecutionFailedCauseEnum;
(function (StartChildWorkflowExecutionFailedCauseEnum) {
    StartChildWorkflowExecutionFailedCauseEnum["WorkflowTypeDoesNotExist"] = "WORKFLOW_TYPE_DOES_NOT_EXIST";
    StartChildWorkflowExecutionFailedCauseEnum["WorkflowTypeDeprecated"] = "WORKFLOW_TYPE_DEPRECATED";
    StartChildWorkflowExecutionFailedCauseEnum["OpenChildrenLimitExceeded"] = "OPEN_CHILDREN_LIMIT_EXCEEDED";
    StartChildWorkflowExecutionFailedCauseEnum["OpenWorkflowsLimitExceeded"] = "OPEN_WORKFLOWS_LIMIT_EXCEEDED";
    StartChildWorkflowExecutionFailedCauseEnum["ChildCreationRateExceeded"] = "CHILD_CREATION_RATE_EXCEEDED";
    StartChildWorkflowExecutionFailedCauseEnum["WorkflowAlreadyRunning"] = "WORKFLOW_ALREADY_RUNNING";
    StartChildWorkflowExecutionFailedCauseEnum["DefaultExecutionStartToCloseTimeoutUndefined"] = "DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED";
    StartChildWorkflowExecutionFailedCauseEnum["DefaultTaskListUndefined"] = "DEFAULT_TASK_LIST_UNDEFINED";
    StartChildWorkflowExecutionFailedCauseEnum["DefaultTaskStartToCloseTimeoutUndefined"] = "DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED";
    StartChildWorkflowExecutionFailedCauseEnum["DefaultChildPolicyUndefined"] = "DEFAULT_CHILD_POLICY_UNDEFINED";
    StartChildWorkflowExecutionFailedCauseEnum["OperationNotPermitted"] = "OPERATION_NOT_PERMITTED";
})(StartChildWorkflowExecutionFailedCauseEnum || (StartChildWorkflowExecutionFailedCauseEnum = {}));
