package shared

type DeleteSessionResponse struct {
	BotAlias  *string `json:"botAlias"`
	BotName   *string `json:"botName"`
	SessionID *string `json:"sessionId"`
	UserID    *string `json:"userId"`
}
