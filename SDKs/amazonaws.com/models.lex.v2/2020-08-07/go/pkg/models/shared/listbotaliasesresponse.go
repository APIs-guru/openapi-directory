package shared

type ListBotAliasesResponse struct {
	BotAliasSummaries []BotAliasSummary `json:"botAliasSummaries"`
	BotID             *string           `json:"botId"`
	NextToken         *string           `json:"nextToken"`
}
