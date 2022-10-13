package shared

type ListFirewallConfigsResponse struct {
	FirewallConfigs []FirewallConfig `json:"FirewallConfigs"`
	NextToken       *string          `json:"NextToken"`
}
