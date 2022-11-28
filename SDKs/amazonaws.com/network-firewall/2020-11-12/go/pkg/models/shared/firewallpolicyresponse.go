package shared

// FirewallPolicyResponse
// The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>.
type FirewallPolicyResponse struct {
	Description          *string             `json:"Description,omitempty"`
	FirewallPolicyArn    string              `json:"FirewallPolicyArn"`
	FirewallPolicyID     string              `json:"FirewallPolicyId"`
	FirewallPolicyName   string              `json:"FirewallPolicyName"`
	FirewallPolicyStatus *ResourceStatusEnum `json:"FirewallPolicyStatus,omitempty"`
	Tags                 []Tag               `json:"Tags,omitempty"`
}
