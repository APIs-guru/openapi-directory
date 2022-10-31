package shared



type CreateFirewallRequest struct {
    DeleteProtection *bool `json:"DeleteProtection,omitempty"`
    Description *string `json:"Description,omitempty"`
    FirewallName string `json:"FirewallName"`
    FirewallPolicyArn string `json:"FirewallPolicyArn"`
    FirewallPolicyChangeProtection *bool `json:"FirewallPolicyChangeProtection,omitempty"`
    SubnetChangeProtection *bool `json:"SubnetChangeProtection,omitempty"`
    SubnetMappings []SubnetMapping `json:"SubnetMappings"`
    Tags []Tag `json:"Tags,omitempty"`
    VpcID string `json:"VpcId"`
    
}

