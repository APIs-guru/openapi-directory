package shared



type GetBotAliasesResponse struct {
    BotAliases []BotAliasMetadata `json:"BotAliases,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

