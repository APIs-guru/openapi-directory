package shared

type GetUtterancesViewResponse struct {
	BotName    *string         `json:"botName"`
	Utterances []UtteranceList `json:"utterances"`
}
