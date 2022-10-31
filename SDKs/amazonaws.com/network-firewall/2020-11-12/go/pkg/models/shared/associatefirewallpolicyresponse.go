package shared

type AssociateFirewallPolicyResponse struct {
	FirewallArn       *string `json:"FirewallArn,omitempty"`
	FirewallName      *string `json:"FirewallName,omitempty"`
	FirewallPolicyArn *string `json:"FirewallPolicyArn,omitempty"`
	UpdateToken       *string `json:"UpdateToken,omitempty"`
}
