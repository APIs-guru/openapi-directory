package shared



type UpdateFirewallDeleteProtectionRequest struct {
    DeleteProtection bool `json:"DeleteProtection"`
    FirewallArn *string `json:"FirewallArn,omitempty"`
    FirewallName *string `json:"FirewallName,omitempty"`
    UpdateToken *string `json:"UpdateToken,omitempty"`
    
}

