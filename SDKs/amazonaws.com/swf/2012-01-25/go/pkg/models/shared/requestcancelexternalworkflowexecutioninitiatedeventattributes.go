package shared



type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes struct {
    Control *string `json:"control,omitempty"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    RunID *string `json:"runId,omitempty"`
    WorkflowID string `json:"workflowId"`
    
}

