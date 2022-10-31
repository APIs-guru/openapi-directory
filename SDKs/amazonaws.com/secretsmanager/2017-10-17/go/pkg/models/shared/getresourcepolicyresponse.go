package shared



type GetResourcePolicyResponse struct {
    Arn *string `json:"ARN,omitempty"`
    Name *string `json:"Name,omitempty"`
    ResourcePolicy *string `json:"ResourcePolicy,omitempty"`
    
}

