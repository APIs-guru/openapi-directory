package shared

type DeleteFirewallPolicyRequest struct {
	FirewallPolicyArn  *string `json:"FirewallPolicyArn"`
	FirewallPolicyName *string `json:"FirewallPolicyName"`
}
