package shared

// MaintenanceWindowAutomationParameters
// The parameters for an <code>AUTOMATION</code> task type.
type MaintenanceWindowAutomationParameters struct {
	DocumentVersion *string             `json:"DocumentVersion,omitempty"`
	Parameters      map[string][]string `json:"Parameters,omitempty"`
}
