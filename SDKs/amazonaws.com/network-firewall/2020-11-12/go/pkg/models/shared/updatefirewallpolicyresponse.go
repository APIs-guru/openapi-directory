package shared

type UpdateFirewallPolicyResponse struct {
	FirewallPolicyResponse FirewallPolicyResponse `json:"FirewallPolicyResponse"`
	UpdateToken            string                 `json:"UpdateToken"`
}
