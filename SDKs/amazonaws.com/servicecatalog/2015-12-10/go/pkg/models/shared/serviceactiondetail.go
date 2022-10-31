package shared



type ServiceActionDetail struct {
    Definition map[string]string `json:"Definition,omitempty"`
    ServiceActionSummary *ServiceActionSummary `json:"ServiceActionSummary,omitempty"`
    
}

