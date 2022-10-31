package shared



type ListFirewallDomainsResponse struct {
    Domains []string `json:"Domains,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

