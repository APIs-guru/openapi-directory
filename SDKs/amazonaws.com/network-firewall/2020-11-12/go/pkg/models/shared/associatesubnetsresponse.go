package shared

type AssociateSubnetsResponse struct {
	FirewallArn    *string         `json:"FirewallArn"`
	FirewallName   *string         `json:"FirewallName"`
	SubnetMappings []SubnetMapping `json:"SubnetMappings"`
	UpdateToken    *string         `json:"UpdateToken"`
}
