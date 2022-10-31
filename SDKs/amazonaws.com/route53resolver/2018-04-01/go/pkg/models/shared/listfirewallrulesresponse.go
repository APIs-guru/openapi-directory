package shared



type ListFirewallRulesResponse struct {
    FirewallRules []FirewallRule `json:"FirewallRules,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

