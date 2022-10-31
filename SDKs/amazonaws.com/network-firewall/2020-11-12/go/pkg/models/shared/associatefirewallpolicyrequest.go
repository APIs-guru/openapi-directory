package shared

type AssociateFirewallPolicyRequest struct {
	FirewallArn       *string `json:"FirewallArn,omitempty"`
	FirewallName      *string `json:"FirewallName,omitempty"`
	FirewallPolicyArn string  `json:"FirewallPolicyArn"`
	UpdateToken       *string `json:"UpdateToken,omitempty"`
}
