package shared

type DeleteBotResponse struct {
	BotID     *string        `json:"botId"`
	BotStatus *BotStatusEnum `json:"botStatus"`
}
