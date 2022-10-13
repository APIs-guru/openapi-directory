package shared

type DescribeLoggingConfigurationResponse struct {
	FirewallArn          *string               `json:"FirewallArn"`
	LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration"`
}
