package shared

type DeleteBotAliasResponse struct {
	BotAliasID     *string             `json:"botAliasId"`
	BotAliasStatus *BotAliasStatusEnum `json:"botAliasStatus"`
	BotID          *string             `json:"botId"`
}
