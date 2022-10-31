package shared



type PutKeyPolicyRequest struct {
    BypassPolicyLockoutSafetyCheck *bool `json:"BypassPolicyLockoutSafetyCheck,omitempty"`
    KeyID string `json:"KeyId"`
    Policy string `json:"Policy"`
    PolicyName string `json:"PolicyName"`
    
}

