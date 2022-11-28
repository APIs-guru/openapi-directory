package shared

// AutomationExecutionFilter
// A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
type AutomationExecutionFilter struct {
	Key    AutomationExecutionFilterKeyEnum `json:"Key"`
	Values []string                         `json:"Values"`
}
