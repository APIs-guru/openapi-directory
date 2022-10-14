package shared

type UpdateFirewallPolicyChangeProtectionRequest struct {
	FirewallArn                    *string `json:"FirewallArn,omitempty"`
	FirewallName                   *string `json:"FirewallName,omitempty"`
	FirewallPolicyChangeProtection bool    `json:"FirewallPolicyChangeProtection"`
	UpdateToken                    *string `json:"UpdateToken,omitempty"`
}
