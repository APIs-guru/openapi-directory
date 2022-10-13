package shared

type DescribeFirewallPolicyResponse struct {
	FirewallPolicy         *FirewallPolicy        `json:"FirewallPolicy"`
	FirewallPolicyResponse FirewallPolicyResponse `json:"FirewallPolicyResponse"`
	UpdateToken            string                 `json:"UpdateToken"`
}
