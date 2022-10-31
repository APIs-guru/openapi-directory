package shared



type GetResourcePoliciesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourcePolicies []ResourcePolicy `json:"resourcePolicies"`
    
}

