package shared

type ListFirewallRuleGroupsResponse struct {
	FirewallRuleGroups []FirewallRuleGroupMetadata `json:"FirewallRuleGroups"`
	NextToken          *string                     `json:"NextToken"`
}
