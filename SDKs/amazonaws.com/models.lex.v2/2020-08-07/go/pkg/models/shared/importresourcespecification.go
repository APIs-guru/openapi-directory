package shared

// ImportResourceSpecification
// Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
type ImportResourceSpecification struct {
	BotImportSpecification       *BotImportSpecification       `json:"botImportSpecification,omitempty"`
	BotLocaleImportSpecification *BotLocaleImportSpecification `json:"botLocaleImportSpecification,omitempty"`
}
