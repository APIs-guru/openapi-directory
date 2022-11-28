package shared

// AutomationExecution
// The Systems Manager automation document process to start as the runbook at the beginning of the incident.
type AutomationExecution struct {
	SsmExecutionArn *string `json:"ssmExecutionArn,omitempty"`
}
