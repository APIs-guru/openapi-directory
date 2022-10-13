package shared

type UpdateFirewallDeleteProtectionResponse struct {
	DeleteProtection *bool   `json:"DeleteProtection"`
	FirewallArn      *string `json:"FirewallArn"`
	FirewallName     *string `json:"FirewallName"`
	UpdateToken      *string `json:"UpdateToken"`
}
