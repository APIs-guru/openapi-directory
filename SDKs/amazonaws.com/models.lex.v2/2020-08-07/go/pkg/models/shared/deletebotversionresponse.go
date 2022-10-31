package shared



type DeleteBotVersionResponse struct {
    BotID *string `json:"botId,omitempty"`
    BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
    BotVersion *string `json:"botVersion,omitempty"`
    
}

