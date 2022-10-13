package shared

type RequestCancelExternalWorkflowExecutionDecisionAttributes struct {
	Control    *string `json:"control"`
	RunID      *string `json:"runId"`
	WorkflowID string  `json:"workflowId"`
}
