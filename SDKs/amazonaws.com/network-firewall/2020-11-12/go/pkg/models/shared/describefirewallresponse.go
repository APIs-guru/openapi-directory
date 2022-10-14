package shared

type DescribeFirewallResponse struct {
	Firewall       *Firewall       `json:"Firewall,omitempty"`
	FirewallStatus *FirewallStatus `json:"FirewallStatus,omitempty"`
	UpdateToken    *string         `json:"UpdateToken,omitempty"`
}
