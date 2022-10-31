package shared



type AssociateSubnetsRequest struct {
    FirewallArn *string `json:"FirewallArn,omitempty"`
    FirewallName *string `json:"FirewallName,omitempty"`
    SubnetMappings []SubnetMapping `json:"SubnetMappings"`
    UpdateToken *string `json:"UpdateToken,omitempty"`
    
}

