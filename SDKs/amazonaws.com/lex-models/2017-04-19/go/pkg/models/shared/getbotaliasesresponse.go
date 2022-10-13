package shared

type GetBotAliasesResponse struct {
	BotAliases []BotAliasMetadata `json:"BotAliases"`
	NextToken  *string            `json:"nextToken"`
}
