package shared

// ServiceInfo
// Information about a service.
type ServiceInfo struct {
	ServiceCode *string `json:"ServiceCode,omitempty"`
	ServiceName *string `json:"ServiceName,omitempty"`
}
