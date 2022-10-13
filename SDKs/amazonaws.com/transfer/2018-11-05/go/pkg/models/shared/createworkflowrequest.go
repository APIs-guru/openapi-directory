package shared

type CreateWorkflowRequest struct {
	Description      *string        `json:"Description"`
	OnExceptionSteps []WorkflowStep `json:"OnExceptionSteps"`
	Steps            []WorkflowStep `json:"Steps"`
	Tags             []Tag          `json:"Tags"`
}
