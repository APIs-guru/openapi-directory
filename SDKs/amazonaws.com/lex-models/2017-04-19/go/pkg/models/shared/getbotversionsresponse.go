package shared

type GetBotVersionsResponse struct {
	Bots      []BotMetadata `json:"bots"`
	NextToken *string       `json:"nextToken"`
}
