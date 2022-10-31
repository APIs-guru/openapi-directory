package shared



type ListFirewallDomainListsResponse struct {
    FirewallDomainLists []FirewallDomainListMetadata `json:"FirewallDomainLists,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

