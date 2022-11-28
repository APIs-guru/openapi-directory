package shared

// ServiceActionDetail
// An object containing detailed information about the self-service action.
type ServiceActionDetail struct {
	Definition           map[string]string     `json:"Definition,omitempty"`
	ServiceActionSummary *ServiceActionSummary `json:"ServiceActionSummary,omitempty"`
}
