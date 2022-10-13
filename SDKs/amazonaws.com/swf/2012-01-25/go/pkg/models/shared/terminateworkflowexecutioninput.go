package shared

type TerminateWorkflowExecutionInput struct {
	ChildPolicy *ChildPolicyEnum `json:"childPolicy"`
	Details     *string          `json:"details"`
	Domain      string           `json:"domain"`
	Reason      *string          `json:"reason"`
	RunID       *string          `json:"runId"`
	WorkflowID  string           `json:"workflowId"`
}
