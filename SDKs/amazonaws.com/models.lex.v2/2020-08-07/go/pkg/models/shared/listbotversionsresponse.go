package shared

type ListBotVersionsResponse struct {
	BotID               *string             `json:"botId"`
	BotVersionSummaries []BotVersionSummary `json:"botVersionSummaries"`
	NextToken           *string             `json:"nextToken"`
}
