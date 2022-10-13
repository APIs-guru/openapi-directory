package shared

type ImportResourceSpecification struct {
	BotImportSpecification       *BotImportSpecification       `json:"botImportSpecification"`
	BotLocaleImportSpecification *BotLocaleImportSpecification `json:"botLocaleImportSpecification"`
}
