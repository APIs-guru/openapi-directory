package shared

// BotLocaleExportSpecification
// Provides the bot locale parameters required for exporting a bot locale.
type BotLocaleExportSpecification struct {
	BotID      string `json:"botId"`
	BotVersion string `json:"botVersion"`
	LocaleID   string `json:"localeId"`
}
