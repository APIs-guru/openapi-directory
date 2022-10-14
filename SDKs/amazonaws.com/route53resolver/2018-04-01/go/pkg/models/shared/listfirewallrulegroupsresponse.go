package shared

type ListFirewallRuleGroupsResponse struct {
	FirewallRuleGroups []FirewallRuleGroupMetadata `json:"FirewallRuleGroups,omitempty"`
	NextToken          *string                     `json:"NextToken,omitempty"`
}
