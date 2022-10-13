package shared

type ServiceActionDetail struct {
	Definition           map[string]string     `json:"Definition"`
	ServiceActionSummary *ServiceActionSummary `json:"ServiceActionSummary"`
}
