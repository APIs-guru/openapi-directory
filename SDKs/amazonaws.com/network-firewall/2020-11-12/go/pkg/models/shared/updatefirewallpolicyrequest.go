package shared



type UpdateFirewallPolicyRequest struct {
    Description *string `json:"Description,omitempty"`
    DryRun *bool `json:"DryRun,omitempty"`
    FirewallPolicy FirewallPolicy `json:"FirewallPolicy"`
    FirewallPolicyArn *string `json:"FirewallPolicyArn,omitempty"`
    FirewallPolicyName *string `json:"FirewallPolicyName,omitempty"`
    UpdateToken string `json:"UpdateToken"`
    
}

