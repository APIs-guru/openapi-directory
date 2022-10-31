package shared

type UpdateFirewallPolicyChangeProtectionResponse struct {
	FirewallArn                    *string `json:"FirewallArn,omitempty"`
	FirewallName                   *string `json:"FirewallName,omitempty"`
	FirewallPolicyChangeProtection *bool   `json:"FirewallPolicyChangeProtection,omitempty"`
	UpdateToken                    *string `json:"UpdateToken,omitempty"`
}
