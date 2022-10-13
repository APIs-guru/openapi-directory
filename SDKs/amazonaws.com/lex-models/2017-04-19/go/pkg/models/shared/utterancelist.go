package shared

type UtteranceList struct {
	BotVersion *string         `json:"botVersion"`
	Utterances []UtteranceData `json:"utterances"`
}
