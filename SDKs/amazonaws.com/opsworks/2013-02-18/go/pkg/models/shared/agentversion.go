package shared



type AgentVersion struct {
    ConfigurationManager *StackConfigurationManager `json:"ConfigurationManager,omitempty"`
    Version *string `json:"Version,omitempty"`
    
}

