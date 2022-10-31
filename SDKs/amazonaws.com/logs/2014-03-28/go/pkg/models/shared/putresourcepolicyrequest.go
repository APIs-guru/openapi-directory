package shared



type PutResourcePolicyRequest struct {
    PolicyDocument *string `json:"policyDocument,omitempty"`
    PolicyName *string `json:"policyName,omitempty"`
    
}

