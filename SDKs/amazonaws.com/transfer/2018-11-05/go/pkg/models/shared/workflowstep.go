package shared

// WorkflowStep
// The basic building block of a workflow.
type WorkflowStep struct {
	CopyStepDetails   *CopyStepDetails      `json:"CopyStepDetails,omitempty"`
	CustomStepDetails *CustomStepDetails    `json:"CustomStepDetails,omitempty"`
	DeleteStepDetails *DeleteStepDetails    `json:"DeleteStepDetails,omitempty"`
	TagStepDetails    *TagStepDetails       `json:"TagStepDetails,omitempty"`
	Type              *WorkflowStepTypeEnum `json:"Type,omitempty"`
}
