package shared



type ListBotLocalesResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotLocaleSummaries []BotLocaleSummary `json:"botLocaleSummaries,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

