package shared

type AgentVersion struct {
	ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager"`
	Version              *string                    `json:"Version"`
}
