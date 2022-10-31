package shared

type UtteranceList struct {
	BotVersion *string         `json:"botVersion,omitempty"`
	Utterances []UtteranceData `json:"utterances,omitempty"`
}
