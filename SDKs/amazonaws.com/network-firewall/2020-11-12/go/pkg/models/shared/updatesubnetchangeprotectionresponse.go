package shared

type UpdateSubnetChangeProtectionResponse struct {
	FirewallArn            *string `json:"FirewallArn,omitempty"`
	FirewallName           *string `json:"FirewallName,omitempty"`
	SubnetChangeProtection *bool   `json:"SubnetChangeProtection,omitempty"`
	UpdateToken            *string `json:"UpdateToken,omitempty"`
}
