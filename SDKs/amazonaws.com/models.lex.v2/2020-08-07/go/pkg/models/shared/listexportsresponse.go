package shared

type ListExportsResponse struct {
	BotID           *string         `json:"botId"`
	BotVersion      *string         `json:"botVersion"`
	ExportSummaries []ExportSummary `json:"exportSummaries"`
	NextToken       *string         `json:"nextToken"`
}
