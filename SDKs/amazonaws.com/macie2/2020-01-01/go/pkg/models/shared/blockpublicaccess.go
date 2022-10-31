package shared



type BlockPublicAccess struct {
    BlockPublicAcls *bool `json:"blockPublicAcls,omitempty"`
    BlockPublicPolicy *bool `json:"blockPublicPolicy,omitempty"`
    IgnorePublicAcls *bool `json:"ignorePublicAcls,omitempty"`
    RestrictPublicBuckets *bool `json:"restrictPublicBuckets,omitempty"`
    
}

