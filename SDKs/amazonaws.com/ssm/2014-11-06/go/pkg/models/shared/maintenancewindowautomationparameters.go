package shared

type MaintenanceWindowAutomationParameters struct {
	DocumentVersion *string             `json:"DocumentVersion"`
	Parameters      map[string][]string `json:"Parameters"`
}
