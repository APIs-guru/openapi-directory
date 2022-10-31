package shared



type GetFindingsResponse struct {
    Findings []AwsSecurityFinding `json:"Findings"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

