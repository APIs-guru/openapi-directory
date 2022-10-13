package shared

type DeleteFirewallRequest struct {
	FirewallArn  *string `json:"FirewallArn"`
	FirewallName *string `json:"FirewallName"`
}
