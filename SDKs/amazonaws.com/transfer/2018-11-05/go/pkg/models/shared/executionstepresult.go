package shared

type ExecutionStepResult struct {
	Error    *ExecutionError       `json:"Error,omitempty"`
	Outputs  *string               `json:"Outputs,omitempty"`
	StepType *WorkflowStepTypeEnum `json:"StepType,omitempty"`
}
