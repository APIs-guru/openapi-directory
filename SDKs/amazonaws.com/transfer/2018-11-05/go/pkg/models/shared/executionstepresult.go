package shared

// ExecutionStepResult
// Specifies the following details for the step: error (if any), outputs (if any), and the step type.
type ExecutionStepResult struct {
	Error    *ExecutionError       `json:"Error,omitempty"`
	Outputs  *string               `json:"Outputs,omitempty"`
	StepType *WorkflowStepTypeEnum `json:"StepType,omitempty"`
}
