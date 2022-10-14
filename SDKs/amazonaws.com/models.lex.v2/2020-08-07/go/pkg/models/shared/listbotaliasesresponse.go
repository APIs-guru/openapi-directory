package shared

type ListBotAliasesResponse struct {
	BotAliasSummaries []BotAliasSummary `json:"botAliasSummaries,omitempty"`
	BotID             *string           `json:"botId,omitempty"`
	NextToken         *string           `json:"nextToken,omitempty"`
}
