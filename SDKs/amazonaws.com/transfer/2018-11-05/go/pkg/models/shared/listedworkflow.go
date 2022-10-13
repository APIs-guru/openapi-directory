package shared

type ListedWorkflow struct {
	Arn         *string `json:"Arn"`
	Description *string `json:"Description"`
	WorkflowID  *string `json:"WorkflowId"`
}
