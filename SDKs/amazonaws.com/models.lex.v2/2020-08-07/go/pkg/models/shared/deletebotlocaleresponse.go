package shared

type DeleteBotLocaleResponse struct {
	BotID           *string              `json:"botId,omitempty"`
	BotLocaleStatus *BotLocaleStatusEnum `json:"botLocaleStatus,omitempty"`
	BotVersion      *string              `json:"botVersion,omitempty"`
	LocaleID        *string              `json:"localeId,omitempty"`
}
