package shared



type ListBotsResponse struct {
    BotSummaries []BotSummary `json:"botSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

