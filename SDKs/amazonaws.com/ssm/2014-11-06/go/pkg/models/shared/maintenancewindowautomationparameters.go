package shared

type MaintenanceWindowAutomationParameters struct {
	DocumentVersion *string             `json:"DocumentVersion,omitempty"`
	Parameters      map[string][]string `json:"Parameters,omitempty"`
}
