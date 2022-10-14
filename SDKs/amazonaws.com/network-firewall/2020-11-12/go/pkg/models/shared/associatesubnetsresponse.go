package shared

type AssociateSubnetsResponse struct {
	FirewallArn    *string         `json:"FirewallArn,omitempty"`
	FirewallName   *string         `json:"FirewallName,omitempty"`
	SubnetMappings []SubnetMapping `json:"SubnetMappings,omitempty"`
	UpdateToken    *string         `json:"UpdateToken,omitempty"`
}
