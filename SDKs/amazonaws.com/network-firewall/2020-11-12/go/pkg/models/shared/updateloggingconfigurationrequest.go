package shared



type UpdateLoggingConfigurationRequest struct {
    FirewallArn *string `json:"FirewallArn,omitempty"`
    FirewallName *string `json:"FirewallName,omitempty"`
    LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration,omitempty"`
    
}

