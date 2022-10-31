package shared

type DeleteFirewallRequest struct {
	FirewallArn  *string `json:"FirewallArn,omitempty"`
	FirewallName *string `json:"FirewallName,omitempty"`
}
