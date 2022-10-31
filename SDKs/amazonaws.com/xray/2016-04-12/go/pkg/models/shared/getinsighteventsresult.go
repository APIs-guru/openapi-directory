package shared



type GetInsightEventsResult struct {
    InsightEvents []InsightEvent `json:"InsightEvents,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

