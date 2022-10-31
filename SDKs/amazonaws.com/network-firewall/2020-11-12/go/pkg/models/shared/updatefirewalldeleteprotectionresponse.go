package shared

type UpdateFirewallDeleteProtectionResponse struct {
	DeleteProtection *bool   `json:"DeleteProtection,omitempty"`
	FirewallArn      *string `json:"FirewallArn,omitempty"`
	FirewallName     *string `json:"FirewallName,omitempty"`
	UpdateToken      *string `json:"UpdateToken,omitempty"`
}
