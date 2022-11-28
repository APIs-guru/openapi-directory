package shared

// PortForwardingConfig
// Configuration information for port forwarding.
type PortForwardingConfig struct {
	PortMappings []PortMapping `json:"portMappings,omitempty"`
}
