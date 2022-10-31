package shared



type CreateWorkflowRequest struct {
    Description *string `json:"Description,omitempty"`
    OnExceptionSteps []WorkflowStep `json:"OnExceptionSteps,omitempty"`
    Steps []WorkflowStep `json:"Steps"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

