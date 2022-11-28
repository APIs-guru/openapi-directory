package shared

// ExecutionResults
// Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
type ExecutionResults struct {
	OnExceptionSteps []ExecutionStepResult `json:"OnExceptionSteps,omitempty"`
	Steps            []ExecutionStepResult `json:"Steps,omitempty"`
}
