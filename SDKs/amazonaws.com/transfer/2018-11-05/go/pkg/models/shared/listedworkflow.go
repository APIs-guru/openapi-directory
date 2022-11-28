package shared

// ListedWorkflow
// Contains the ID, text description, and Amazon Resource Name (ARN) for the workflow.
type ListedWorkflow struct {
	Arn         *string `json:"Arn,omitempty"`
	Description *string `json:"Description,omitempty"`
	WorkflowID  *string `json:"WorkflowId,omitempty"`
}
