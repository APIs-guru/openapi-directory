package shared

type DescribedWorkflow struct {
	Arn              string         `json:"Arn"`
	Description      *string        `json:"Description"`
	OnExceptionSteps []WorkflowStep `json:"OnExceptionSteps"`
	Steps            []WorkflowStep `json:"Steps"`
	Tags             []Tag          `json:"Tags"`
	WorkflowID       *string        `json:"WorkflowId"`
}
