package shared

type FirewallPolicyResponse struct {
	Description          *string             `json:"Description"`
	FirewallPolicyArn    string              `json:"FirewallPolicyArn"`
	FirewallPolicyID     string              `json:"FirewallPolicyId"`
	FirewallPolicyName   string              `json:"FirewallPolicyName"`
	FirewallPolicyStatus *ResourceStatusEnum `json:"FirewallPolicyStatus"`
	Tags                 []Tag               `json:"Tags"`
}
