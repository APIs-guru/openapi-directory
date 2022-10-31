package shared

type DescribeWorkflowTypeInput struct {
	Domain       string       `json:"domain"`
	WorkflowType WorkflowType `json:"workflowType"`
}
