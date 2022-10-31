package shared



type DescribeCanariesLastRunResponse struct {
    CanariesLastRun []CanaryLastRun `json:"CanariesLastRun,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

