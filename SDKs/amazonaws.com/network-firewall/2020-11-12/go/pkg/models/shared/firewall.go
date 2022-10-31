package shared

type Firewall struct {
	DeleteProtection               *bool           `json:"DeleteProtection,omitempty"`
	Description                    *string         `json:"Description,omitempty"`
	FirewallArn                    *string         `json:"FirewallArn,omitempty"`
	FirewallID                     string          `json:"FirewallId"`
	FirewallName                   *string         `json:"FirewallName,omitempty"`
	FirewallPolicyArn              string          `json:"FirewallPolicyArn"`
	FirewallPolicyChangeProtection *bool           `json:"FirewallPolicyChangeProtection,omitempty"`
	SubnetChangeProtection         *bool           `json:"SubnetChangeProtection,omitempty"`
	SubnetMappings                 []SubnetMapping `json:"SubnetMappings"`
	Tags                           []Tag           `json:"Tags,omitempty"`
	VpcID                          string          `json:"VpcId"`
}
