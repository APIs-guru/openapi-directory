package shared



type GetCanaryRunsResponse struct {
    CanaryRuns []CanaryRun `json:"CanaryRuns,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

