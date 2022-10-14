package shared

type ListFirewallConfigsResponse struct {
	FirewallConfigs []FirewallConfig `json:"FirewallConfigs,omitempty"`
	NextToken       *string          `json:"NextToken,omitempty"`
}
