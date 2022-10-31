package shared



type ContinueAsNewWorkflowExecutionDecisionAttributes struct {
    ChildPolicy *ChildPolicyEnum `json:"childPolicy,omitempty"`
    ExecutionStartToCloseTimeout *string `json:"executionStartToCloseTimeout,omitempty"`
    Input *string `json:"input,omitempty"`
    LambdaRole *string `json:"lambdaRole,omitempty"`
    TagList []string `json:"tagList,omitempty"`
    TaskList *TaskList `json:"taskList,omitempty"`
    TaskPriority *string `json:"taskPriority,omitempty"`
    TaskStartToCloseTimeout *string `json:"taskStartToCloseTimeout,omitempty"`
    WorkflowTypeVersion *string `json:"workflowTypeVersion,omitempty"`
    
}

