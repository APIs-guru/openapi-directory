package shared

type DeleteSessionResponse struct {
	BotAliasID *string `json:"botAliasId"`
	BotID      *string `json:"botId"`
	LocaleID   *string `json:"localeId"`
	SessionID  *string `json:"sessionId"`
}
