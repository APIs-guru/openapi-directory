package shared

type CreateFirewallResponse struct {
	Firewall       *Firewall       `json:"Firewall"`
	FirewallStatus *FirewallStatus `json:"FirewallStatus"`
}
