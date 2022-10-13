package shared

type DescribeWorkflowExecutionInput struct {
	Domain    string            `json:"domain"`
	Execution WorkflowExecution `json:"execution"`
}
