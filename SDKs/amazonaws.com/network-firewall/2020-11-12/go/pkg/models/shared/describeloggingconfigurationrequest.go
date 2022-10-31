package shared

type DescribeLoggingConfigurationRequest struct {
	FirewallArn  *string `json:"FirewallArn,omitempty"`
	FirewallName *string `json:"FirewallName,omitempty"`
}
