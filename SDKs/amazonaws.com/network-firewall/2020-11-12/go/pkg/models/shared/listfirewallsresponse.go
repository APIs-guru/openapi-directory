package shared



type ListFirewallsResponse struct {
    Firewalls []FirewallMetadata `json:"Firewalls,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

