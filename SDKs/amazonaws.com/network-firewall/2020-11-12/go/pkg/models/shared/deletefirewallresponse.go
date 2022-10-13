package shared

type DeleteFirewallResponse struct {
	Firewall       *Firewall       `json:"Firewall"`
	FirewallStatus *FirewallStatus `json:"FirewallStatus"`
}
