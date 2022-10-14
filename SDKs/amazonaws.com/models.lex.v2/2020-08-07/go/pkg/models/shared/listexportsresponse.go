package shared

type ListExportsResponse struct {
	BotID           *string         `json:"botId,omitempty"`
	BotVersion      *string         `json:"botVersion,omitempty"`
	ExportSummaries []ExportSummary `json:"exportSummaries,omitempty"`
	NextToken       *string         `json:"nextToken,omitempty"`
}
