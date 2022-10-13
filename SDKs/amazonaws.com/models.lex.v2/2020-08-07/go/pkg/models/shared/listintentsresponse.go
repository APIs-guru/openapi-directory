package shared

type ListIntentsResponse struct {
	BotID           *string         `json:"botId"`
	BotVersion      *string         `json:"botVersion"`
	IntentSummaries []IntentSummary `json:"intentSummaries"`
	LocaleID        *string         `json:"localeId"`
	NextToken       *string         `json:"nextToken"`
}
