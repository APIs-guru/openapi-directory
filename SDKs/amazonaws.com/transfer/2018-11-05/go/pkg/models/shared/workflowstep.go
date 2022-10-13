package shared

type WorkflowStep struct {
	CopyStepDetails   *CopyStepDetails      `json:"CopyStepDetails"`
	CustomStepDetails *CustomStepDetails    `json:"CustomStepDetails"`
	DeleteStepDetails *DeleteStepDetails    `json:"DeleteStepDetails"`
	TagStepDetails    *TagStepDetails       `json:"TagStepDetails"`
	Type              *WorkflowStepTypeEnum `json:"Type"`
}
