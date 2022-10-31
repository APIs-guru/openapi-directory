package shared

type UpdateSubnetChangeProtectionRequest struct {
	FirewallArn            *string `json:"FirewallArn,omitempty"`
	FirewallName           *string `json:"FirewallName,omitempty"`
	SubnetChangeProtection bool    `json:"SubnetChangeProtection"`
	UpdateToken            *string `json:"UpdateToken,omitempty"`
}
