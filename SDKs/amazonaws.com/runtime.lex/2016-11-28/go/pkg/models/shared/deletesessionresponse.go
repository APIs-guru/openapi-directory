package shared

type DeleteSessionResponse struct {
	BotAlias  *string `json:"botAlias,omitempty"`
	BotName   *string `json:"botName,omitempty"`
	SessionID *string `json:"sessionId,omitempty"`
	UserID    *string `json:"userId,omitempty"`
}
