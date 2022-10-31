package shared



type ChildWorkflowExecutionCompletedEventAttributes struct {
    InitiatedEventID int64 `json:"initiatedEventId"`
    Result *string `json:"result,omitempty"`
    StartedEventID int64 `json:"startedEventId"`
    WorkflowExecution WorkflowExecution `json:"workflowExecution"`
    WorkflowType WorkflowType `json:"workflowType"`
    
}

