package shared

type DeleteBotResponse struct {
	BotID     *string        `json:"botId,omitempty"`
	BotStatus *BotStatusEnum `json:"botStatus,omitempty"`
}
