package shared



type SignalWorkflowExecutionInput struct {
    Domain string `json:"domain"`
    Input *string `json:"input,omitempty"`
    RunID *string `json:"runId,omitempty"`
    SignalName string `json:"signalName"`
    WorkflowID string `json:"workflowId"`
    
}

