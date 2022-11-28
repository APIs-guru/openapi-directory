package shared

// SsmAutomation
// Details about the Systems Manager automation document that will be used as a runbook during an incident.
type SsmAutomation struct {
	DocumentName    string                `json:"documentName"`
	DocumentVersion *string               `json:"documentVersion,omitempty"`
	Parameters      map[string][]string   `json:"parameters,omitempty"`
	RoleArn         string                `json:"roleArn"`
	TargetAccount   *SsmTargetAccountEnum `json:"targetAccount,omitempty"`
}
