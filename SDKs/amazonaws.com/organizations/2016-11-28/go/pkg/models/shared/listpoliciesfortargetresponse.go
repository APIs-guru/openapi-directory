package shared



type ListPoliciesForTargetResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Policies []PolicySummary `json:"Policies,omitempty"`
    
}

