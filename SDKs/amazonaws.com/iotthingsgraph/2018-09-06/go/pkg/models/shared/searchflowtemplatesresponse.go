package shared



type SearchFlowTemplatesResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    Summaries []FlowTemplateSummary `json:"summaries,omitempty"`
    
}

