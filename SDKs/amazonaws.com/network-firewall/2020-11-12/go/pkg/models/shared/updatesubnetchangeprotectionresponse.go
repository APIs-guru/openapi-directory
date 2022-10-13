package shared

type UpdateSubnetChangeProtectionResponse struct {
	FirewallArn            *string `json:"FirewallArn"`
	FirewallName           *string `json:"FirewallName"`
	SubnetChangeProtection *bool   `json:"SubnetChangeProtection"`
	UpdateToken            *string `json:"UpdateToken"`
}
