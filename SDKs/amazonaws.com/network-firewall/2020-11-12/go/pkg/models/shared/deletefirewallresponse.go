package shared

type DeleteFirewallResponse struct {
	Firewall       *Firewall       `json:"Firewall,omitempty"`
	FirewallStatus *FirewallStatus `json:"FirewallStatus,omitempty"`
}
