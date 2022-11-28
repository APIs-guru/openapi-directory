package shared

// ExportResourceSpecification
// Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
type ExportResourceSpecification struct {
	BotExportSpecification       *BotExportSpecification       `json:"botExportSpecification,omitempty"`
	BotLocaleExportSpecification *BotLocaleExportSpecification `json:"botLocaleExportSpecification,omitempty"`
}
