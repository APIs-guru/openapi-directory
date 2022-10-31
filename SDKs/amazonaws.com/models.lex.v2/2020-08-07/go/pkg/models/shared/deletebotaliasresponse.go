package shared



type DeleteBotAliasResponse struct {
    BotAliasID *string `json:"botAliasId,omitempty"`
    BotAliasStatus *BotAliasStatusEnum `json:"botAliasStatus,omitempty"`
    BotID *string `json:"botId,omitempty"`
    
}

