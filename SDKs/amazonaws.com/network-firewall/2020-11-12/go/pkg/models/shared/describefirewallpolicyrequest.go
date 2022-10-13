package shared

type DescribeFirewallPolicyRequest struct {
	FirewallPolicyArn  *string `json:"FirewallPolicyArn"`
	FirewallPolicyName *string `json:"FirewallPolicyName"`
}
