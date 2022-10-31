package shared



type StartChildWorkflowExecutionFailedEventAttributes struct {
    Cause StartChildWorkflowExecutionFailedCauseEnum `json:"cause"`
    Control *string `json:"control,omitempty"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    InitiatedEventID int64 `json:"initiatedEventId"`
    WorkflowID string `json:"workflowId"`
    WorkflowType WorkflowType `json:"workflowType"`
    
}

