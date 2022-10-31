package shared



type ListImportsResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    ImportSummaries []ImportSummary `json:"importSummaries,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

