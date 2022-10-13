package shared

type CreateFirewallPolicyRequest struct {
	Description        *string        `json:"Description"`
	DryRun             *bool          `json:"DryRun"`
	FirewallPolicy     FirewallPolicy `json:"FirewallPolicy"`
	FirewallPolicyName string         `json:"FirewallPolicyName"`
	Tags               []Tag          `json:"Tags"`
}
