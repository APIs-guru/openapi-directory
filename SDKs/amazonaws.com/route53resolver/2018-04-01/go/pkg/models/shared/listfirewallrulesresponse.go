package shared

type ListFirewallRulesResponse struct {
	FirewallRules []FirewallRule `json:"FirewallRules"`
	NextToken     *string        `json:"NextToken"`
}
