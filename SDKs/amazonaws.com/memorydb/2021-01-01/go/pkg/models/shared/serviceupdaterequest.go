package shared

// ServiceUpdateRequest
// A request to apply a service update
type ServiceUpdateRequest struct {
	ServiceUpdateNameToApply *string `json:"ServiceUpdateNameToApply,omitempty"`
}
