package shared

type ImportResourceSpecification struct {
	BotImportSpecification       *BotImportSpecification       `json:"botImportSpecification,omitempty"`
	BotLocaleImportSpecification *BotLocaleImportSpecification `json:"botLocaleImportSpecification,omitempty"`
}
