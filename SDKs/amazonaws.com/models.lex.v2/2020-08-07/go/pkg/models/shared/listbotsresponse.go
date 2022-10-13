package shared

type ListBotsResponse struct {
	BotSummaries []BotSummary `json:"botSummaries"`
	NextToken    *string      `json:"nextToken"`
}
