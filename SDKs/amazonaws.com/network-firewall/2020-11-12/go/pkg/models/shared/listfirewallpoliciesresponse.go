package shared

type ListFirewallPoliciesResponse struct {
	FirewallPolicies []FirewallPolicyMetadata `json:"FirewallPolicies,omitempty"`
	NextToken        *string                  `json:"NextToken,omitempty"`
}
