package shared

// StepExecutionFilter
// A filter to limit the amount of step execution information returned by the call.
type StepExecutionFilter struct {
	Key    StepExecutionFilterKeyEnum `json:"Key"`
	Values []string                   `json:"Values"`
}
