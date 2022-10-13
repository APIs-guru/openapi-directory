package shared

type AssociateFirewallPolicyResponse struct {
	FirewallArn       *string `json:"FirewallArn"`
	FirewallName      *string `json:"FirewallName"`
	FirewallPolicyArn *string `json:"FirewallPolicyArn"`
	UpdateToken       *string `json:"UpdateToken"`
}
