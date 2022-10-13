package shared

type DescribeFirewallRequest struct {
	FirewallArn  *string `json:"FirewallArn"`
	FirewallName *string `json:"FirewallName"`
}
