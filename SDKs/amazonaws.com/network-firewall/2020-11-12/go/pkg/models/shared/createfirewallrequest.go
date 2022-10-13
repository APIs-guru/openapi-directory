package shared

type CreateFirewallRequest struct {
	DeleteProtection               *bool           `json:"DeleteProtection"`
	Description                    *string         `json:"Description"`
	FirewallName                   string          `json:"FirewallName"`
	FirewallPolicyArn              string          `json:"FirewallPolicyArn"`
	FirewallPolicyChangeProtection *bool           `json:"FirewallPolicyChangeProtection"`
	SubnetChangeProtection         *bool           `json:"SubnetChangeProtection"`
	SubnetMappings                 []SubnetMapping `json:"SubnetMappings"`
	Tags                           []Tag           `json:"Tags"`
	VpcID                          string          `json:"VpcId"`
}
