package shared



type ResourcePolicy struct {
    LastUpdatedTime *int64 `json:"lastUpdatedTime,omitempty"`
    PolicyDocument *string `json:"policyDocument,omitempty"`
    PolicyName *string `json:"policyName,omitempty"`
    
}

