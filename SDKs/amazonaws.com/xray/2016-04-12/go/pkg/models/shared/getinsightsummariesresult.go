package shared



type GetInsightSummariesResult struct {
    InsightSummaries []InsightSummary `json:"InsightSummaries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

