package shared



type DeleteSessionResponse struct {
    BotAliasID *string `json:"botAliasId,omitempty"`
    BotID *string `json:"botId,omitempty"`
    LocaleID *string `json:"localeId,omitempty"`
    SessionID *string `json:"sessionId,omitempty"`
    
}

