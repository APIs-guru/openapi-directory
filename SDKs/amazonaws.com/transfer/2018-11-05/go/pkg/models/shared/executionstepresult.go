package shared

type ExecutionStepResult struct {
	Error    *ExecutionError       `json:"Error"`
	Outputs  *string               `json:"Outputs"`
	StepType *WorkflowStepTypeEnum `json:"StepType"`
}
