package shared

// AgentVersion
// Describes an agent version.
type AgentVersion struct {
	ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager,omitempty"`
	Version              *string                    `json:"Version,omitempty"`
}
