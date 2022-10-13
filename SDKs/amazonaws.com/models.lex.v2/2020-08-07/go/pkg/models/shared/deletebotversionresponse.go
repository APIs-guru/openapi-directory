package shared

type DeleteBotVersionResponse struct {
	BotID      *string        `json:"botId"`
	BotStatus  *BotStatusEnum `json:"botStatus"`
	BotVersion *string        `json:"botVersion"`
}
