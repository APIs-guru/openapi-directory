package shared

type ListImportsResponse struct {
	BotID           *string         `json:"botId"`
	BotVersion      *string         `json:"botVersion"`
	ImportSummaries []ImportSummary `json:"importSummaries"`
	NextToken       *string         `json:"nextToken"`
}
