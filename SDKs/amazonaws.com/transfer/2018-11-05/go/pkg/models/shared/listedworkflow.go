package shared

type ListedWorkflow struct {
	Arn         *string `json:"Arn,omitempty"`
	Description *string `json:"Description,omitempty"`
	WorkflowID  *string `json:"WorkflowId,omitempty"`
}
