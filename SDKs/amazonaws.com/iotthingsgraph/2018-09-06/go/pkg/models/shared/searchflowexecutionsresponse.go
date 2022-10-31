package shared



type SearchFlowExecutionsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Summaries []FlowExecutionSummary `json:"summaries,omitempty"`
    
}

