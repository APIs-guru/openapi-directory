package shared

// DescribedWorkflow
// Describes the properties of the specified workflow
type DescribedWorkflow struct {
	Arn              string         `json:"Arn"`
	Description      *string        `json:"Description,omitempty"`
	OnExceptionSteps []WorkflowStep `json:"OnExceptionSteps,omitempty"`
	Steps            []WorkflowStep `json:"Steps,omitempty"`
	Tags             []Tag          `json:"Tags,omitempty"`
	WorkflowID       *string        `json:"WorkflowId,omitempty"`
}
