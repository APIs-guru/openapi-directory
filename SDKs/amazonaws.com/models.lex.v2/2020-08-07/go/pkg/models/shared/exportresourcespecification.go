package shared

type ExportResourceSpecification struct {
	BotExportSpecification       *BotExportSpecification       `json:"botExportSpecification"`
	BotLocaleExportSpecification *BotLocaleExportSpecification `json:"botLocaleExportSpecification"`
}
