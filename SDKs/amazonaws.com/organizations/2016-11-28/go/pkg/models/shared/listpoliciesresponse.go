package shared



type ListPoliciesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Policies []PolicySummary `json:"Policies,omitempty"`
    
}

