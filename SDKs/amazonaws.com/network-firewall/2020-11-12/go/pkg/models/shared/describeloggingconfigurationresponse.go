package shared



type DescribeLoggingConfigurationResponse struct {
    FirewallArn *string `json:"FirewallArn,omitempty"`
    LoggingConfiguration *LoggingConfiguration `json:"LoggingConfiguration,omitempty"`
    
}

