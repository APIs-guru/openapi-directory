package shared

type DescribeFirewallPolicyResponse struct {
	FirewallPolicy         *FirewallPolicy        `json:"FirewallPolicy,omitempty"`
	FirewallPolicyResponse FirewallPolicyResponse `json:"FirewallPolicyResponse"`
	UpdateToken            string                 `json:"UpdateToken"`
}
