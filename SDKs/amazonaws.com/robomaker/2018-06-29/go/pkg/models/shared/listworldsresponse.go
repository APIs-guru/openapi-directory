package shared



type ListWorldsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    WorldSummaries []WorldSummary `json:"worldSummaries,omitempty"`
    
}

