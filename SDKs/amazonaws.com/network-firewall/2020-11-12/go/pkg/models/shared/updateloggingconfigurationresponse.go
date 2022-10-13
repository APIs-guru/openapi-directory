package shared

type UpdateLoggingConfigurationResponse struct {
	FirewallArn          *string               `json:"FirewallArn"`
	FirewallName         *string               `json:"FirewallName"`
	LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration"`
}
