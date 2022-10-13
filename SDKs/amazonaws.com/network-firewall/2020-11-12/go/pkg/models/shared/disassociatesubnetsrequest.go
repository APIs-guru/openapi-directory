package shared

type DisassociateSubnetsRequest struct {
	FirewallArn  *string  `json:"FirewallArn"`
	FirewallName *string  `json:"FirewallName"`
	SubnetIds    []string `json:"SubnetIds"`
	UpdateToken  *string  `json:"UpdateToken"`
}
