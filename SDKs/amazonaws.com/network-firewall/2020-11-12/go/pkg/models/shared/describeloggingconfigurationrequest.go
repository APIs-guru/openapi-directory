package shared

type DescribeLoggingConfigurationRequest struct {
	FirewallArn  *string `json:"FirewallArn"`
	FirewallName *string `json:"FirewallName"`
}
