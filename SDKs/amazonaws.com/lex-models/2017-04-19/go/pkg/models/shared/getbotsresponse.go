package shared

type GetBotsResponse struct {
	Bots      []BotMetadata `json:"bots"`
	NextToken *string       `json:"nextToken"`
}
