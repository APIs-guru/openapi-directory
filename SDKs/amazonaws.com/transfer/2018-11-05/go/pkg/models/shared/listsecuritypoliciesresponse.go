package shared



type ListSecurityPoliciesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    SecurityPolicyNames []string `json:"SecurityPolicyNames"`
    
}

