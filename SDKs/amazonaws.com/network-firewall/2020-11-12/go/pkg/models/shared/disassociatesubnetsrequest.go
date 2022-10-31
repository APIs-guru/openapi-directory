package shared



type DisassociateSubnetsRequest struct {
    FirewallArn *string `json:"FirewallArn,omitempty"`
    FirewallName *string `json:"FirewallName,omitempty"`
    SubnetIds []string `json:"SubnetIds"`
    UpdateToken *string `json:"UpdateToken,omitempty"`
    
}

