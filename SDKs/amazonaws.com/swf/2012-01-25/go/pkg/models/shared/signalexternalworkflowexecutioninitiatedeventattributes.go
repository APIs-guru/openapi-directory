package shared



type SignalExternalWorkflowExecutionInitiatedEventAttributes struct {
    Control *string `json:"control,omitempty"`
    DecisionTaskCompletedEventID int64 `json:"decisionTaskCompletedEventId"`
    Input *string `json:"input,omitempty"`
    RunID *string `json:"runId,omitempty"`
    SignalName string `json:"signalName"`
    WorkflowID string `json:"workflowId"`
    
}

