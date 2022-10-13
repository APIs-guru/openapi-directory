package shared

type PortForwardingConfig struct {
	PortMappings []PortMapping `json:"portMappings"`
}
