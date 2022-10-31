package shared



type RequestCancelExternalWorkflowExecutionDecisionAttributes struct {
    Control *string `json:"control,omitempty"`
    RunID *string `json:"runId,omitempty"`
    WorkflowID string `json:"workflowId"`
    
}

