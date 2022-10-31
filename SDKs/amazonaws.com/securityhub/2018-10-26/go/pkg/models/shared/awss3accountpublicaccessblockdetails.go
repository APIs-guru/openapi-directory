package shared



type AwsS3AccountPublicAccessBlockDetails struct {
    BlockPublicAcls *bool `json:"BlockPublicAcls,omitempty"`
    BlockPublicPolicy *bool `json:"BlockPublicPolicy,omitempty"`
    IgnorePublicAcls *bool `json:"IgnorePublicAcls,omitempty"`
    RestrictPublicBuckets *bool `json:"RestrictPublicBuckets,omitempty"`
    
}

