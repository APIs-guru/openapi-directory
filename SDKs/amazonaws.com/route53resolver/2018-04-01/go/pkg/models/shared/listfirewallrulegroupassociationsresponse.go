package shared



type ListFirewallRuleGroupAssociationsResponse struct {
    FirewallRuleGroupAssociations []FirewallRuleGroupAssociation `json:"FirewallRuleGroupAssociations,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

