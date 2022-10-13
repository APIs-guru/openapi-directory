package shared

type UpdateFirewallPolicyChangeProtectionResponse struct {
	FirewallArn                    *string `json:"FirewallArn"`
	FirewallName                   *string `json:"FirewallName"`
	FirewallPolicyChangeProtection *bool   `json:"FirewallPolicyChangeProtection"`
	UpdateToken                    *string `json:"UpdateToken"`
}
