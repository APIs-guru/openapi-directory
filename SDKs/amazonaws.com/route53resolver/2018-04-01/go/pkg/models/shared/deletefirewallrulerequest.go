package shared

type DeleteFirewallRuleRequest struct {
	FirewallDomainListID string `json:"FirewallDomainListId"`
	FirewallRuleGroupID  string `json:"FirewallRuleGroupId"`
}
