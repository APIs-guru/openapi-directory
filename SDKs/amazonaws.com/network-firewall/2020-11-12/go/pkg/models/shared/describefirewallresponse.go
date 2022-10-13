package shared

type DescribeFirewallResponse struct {
	Firewall       *Firewall       `json:"Firewall"`
	FirewallStatus *FirewallStatus `json:"FirewallStatus"`
	UpdateToken    *string         `json:"UpdateToken"`
}
