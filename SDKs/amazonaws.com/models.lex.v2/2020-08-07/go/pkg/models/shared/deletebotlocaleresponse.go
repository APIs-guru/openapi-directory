package shared

type DeleteBotLocaleResponse struct {
	BotID           *string              `json:"botId"`
	BotLocaleStatus *BotLocaleStatusEnum `json:"botLocaleStatus"`
	BotVersion      *string              `json:"botVersion"`
	LocaleID        *string              `json:"localeId"`
}
