package shared



type TerminateWorkflowExecutionInput struct {
    ChildPolicy *ChildPolicyEnum `json:"childPolicy,omitempty"`
    Details *string `json:"details,omitempty"`
    Domain string `json:"domain"`
    Reason *string `json:"reason,omitempty"`
    RunID *string `json:"runId,omitempty"`
    WorkflowID string `json:"workflowId"`
    
}

