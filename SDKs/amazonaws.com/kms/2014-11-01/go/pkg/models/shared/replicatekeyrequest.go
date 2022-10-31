package shared



type ReplicateKeyRequest struct {
    BypassPolicyLockoutSafetyCheck *bool `json:"BypassPolicyLockoutSafetyCheck,omitempty"`
    Description *string `json:"Description,omitempty"`
    KeyID string `json:"KeyId"`
    Policy *string `json:"Policy,omitempty"`
    ReplicaRegion string `json:"ReplicaRegion"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

