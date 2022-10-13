package shared

type UpdateFirewallPolicyRequest struct {
	Description        *string        `json:"Description"`
	DryRun             *bool          `json:"DryRun"`
	FirewallPolicy     FirewallPolicy `json:"FirewallPolicy"`
	FirewallPolicyArn  *string        `json:"FirewallPolicyArn"`
	FirewallPolicyName *string        `json:"FirewallPolicyName"`
	UpdateToken        string         `json:"UpdateToken"`
}
