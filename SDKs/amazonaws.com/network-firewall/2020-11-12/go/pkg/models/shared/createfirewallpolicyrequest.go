package shared

type CreateFirewallPolicyRequest struct {
	Description        *string        `json:"Description,omitempty"`
	DryRun             *bool          `json:"DryRun,omitempty"`
	FirewallPolicy     FirewallPolicy `json:"FirewallPolicy"`
	FirewallPolicyName string         `json:"FirewallPolicyName"`
	Tags               []Tag          `json:"Tags,omitempty"`
}
