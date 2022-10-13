package shared

type ExecutionResults struct {
	OnExceptionSteps []ExecutionStepResult `json:"OnExceptionSteps"`
	Steps            []ExecutionStepResult `json:"Steps"`
}
