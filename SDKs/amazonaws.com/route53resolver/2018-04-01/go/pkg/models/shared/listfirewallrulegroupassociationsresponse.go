package shared

type ListFirewallRuleGroupAssociationsResponse struct {
	FirewallRuleGroupAssociations []FirewallRuleGroupAssociation `json:"FirewallRuleGroupAssociations"`
	NextToken                     *string                        `json:"NextToken"`
}
