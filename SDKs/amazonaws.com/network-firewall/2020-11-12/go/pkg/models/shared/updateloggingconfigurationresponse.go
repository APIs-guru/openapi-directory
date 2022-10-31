package shared

type UpdateLoggingConfigurationResponse struct {
	FirewallArn          *string               `json:"FirewallArn,omitempty"`
	FirewallName         *string               `json:"FirewallName,omitempty"`
	LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration,omitempty"`
}
