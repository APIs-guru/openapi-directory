package shared

type ExecutionResults struct {
	OnExceptionSteps []ExecutionStepResult `json:"OnExceptionSteps,omitempty"`
	Steps            []ExecutionStepResult `json:"Steps,omitempty"`
}
