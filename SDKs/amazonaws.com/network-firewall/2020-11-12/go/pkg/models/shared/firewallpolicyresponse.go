package shared



type FirewallPolicyResponse struct {
    Description *string `json:"Description,omitempty"`
    FirewallPolicyArn string `json:"FirewallPolicyArn"`
    FirewallPolicyID string `json:"FirewallPolicyId"`
    FirewallPolicyName string `json:"FirewallPolicyName"`
    FirewallPolicyStatus *ResourceStatusEnum `json:"FirewallPolicyStatus,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

