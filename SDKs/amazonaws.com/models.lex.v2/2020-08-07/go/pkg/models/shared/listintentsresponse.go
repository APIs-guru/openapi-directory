package shared

type ListIntentsResponse struct {
	BotID           *string         `json:"botId,omitempty"`
	BotVersion      *string         `json:"botVersion,omitempty"`
	IntentSummaries []IntentSummary `json:"intentSummaries,omitempty"`
	LocaleID        *string         `json:"localeId,omitempty"`
	NextToken       *string         `json:"nextToken,omitempty"`
}
