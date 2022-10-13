package shared

type ListBotLocalesResponse struct {
	BotID              *string            `json:"botId"`
	BotLocaleSummaries []BotLocaleSummary `json:"botLocaleSummaries"`
	BotVersion         *string            `json:"botVersion"`
	NextToken          *string            `json:"nextToken"`
}
