package shared

// UtteranceList
// Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
type UtteranceList struct {
	BotVersion *string         `json:"botVersion,omitempty"`
	Utterances []UtteranceData `json:"utterances,omitempty"`
}
