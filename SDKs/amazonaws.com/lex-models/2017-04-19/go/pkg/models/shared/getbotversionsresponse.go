package shared

type GetBotVersionsResponse struct {
	Bots      []BotMetadata `json:"bots,omitempty"`
	NextToken *string       `json:"nextToken,omitempty"`
}
