package shared

type ListBotVersionsResponse struct {
	BotID               *string             `json:"botId,omitempty"`
	BotVersionSummaries []BotVersionSummary `json:"botVersionSummaries,omitempty"`
	NextToken           *string             `json:"nextToken,omitempty"`
}
