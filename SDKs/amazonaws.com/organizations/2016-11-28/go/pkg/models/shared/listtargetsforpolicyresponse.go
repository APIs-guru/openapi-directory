package shared



type ListTargetsForPolicyResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Targets []PolicyTargetSummary `json:"Targets,omitempty"`
    
}

