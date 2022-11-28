package shared

// ApplicationEndpoint
// ApplicationEndpoint represents a remote application endpoint.
type ApplicationEndpoint struct {
	Host *string `json:"host,omitempty"`
	Port *int32  `json:"port,omitempty"`
}
