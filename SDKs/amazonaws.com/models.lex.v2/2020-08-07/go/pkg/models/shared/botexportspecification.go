package shared

// BotExportSpecification
// Provides the identity of a the bot that was exported.
type BotExportSpecification struct {
	BotID      string `json:"botId"`
	BotVersion string `json:"botVersion"`
}
