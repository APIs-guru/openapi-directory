package shared



type DescribeEffectivePolicyRequest struct {
    PolicyType EffectivePolicyTypeEnum `json:"PolicyType"`
    TargetID *string `json:"TargetId,omitempty"`
    
}

