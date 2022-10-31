package shared



type DescribeResourcePoliciesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    ResourcePolicies []ResourcePolicy `json:"resourcePolicies,omitempty"`
    
}

