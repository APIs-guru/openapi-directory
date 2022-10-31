package shared



type CreateFirewallResponse struct {
    Firewall *Firewall `json:"Firewall,omitempty"`
    FirewallStatus *FirewallStatus `json:"FirewallStatus,omitempty"`
    
}

