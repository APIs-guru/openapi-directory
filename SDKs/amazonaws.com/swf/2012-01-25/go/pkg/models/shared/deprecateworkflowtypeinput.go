package shared

type DeprecateWorkflowTypeInput struct {
	Domain       string       `json:"domain"`
	WorkflowType WorkflowType `json:"workflowType"`
}
