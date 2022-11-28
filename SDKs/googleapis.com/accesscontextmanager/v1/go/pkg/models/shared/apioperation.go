package shared

// APIOperation
// Identification for an API Operation.
type APIOperation struct {
	MethodSelectors []MethodSelector `json:"methodSelectors,omitempty"`
	ServiceName     *string          `json:"serviceName,omitempty"`
}
