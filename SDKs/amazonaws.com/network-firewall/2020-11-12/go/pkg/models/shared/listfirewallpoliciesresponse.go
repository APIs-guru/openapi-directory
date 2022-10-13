package shared

type ListFirewallPoliciesResponse struct {
	FirewallPolicies []FirewallPolicyMetadata `json:"FirewallPolicies"`
	NextToken        *string                  `json:"NextToken"`
}
