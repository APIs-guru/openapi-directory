package shared

type ExportResourceSpecification struct {
	BotExportSpecification       *BotExportSpecification       `json:"botExportSpecification,omitempty"`
	BotLocaleExportSpecification *BotLocaleExportSpecification `json:"botLocaleExportSpecification,omitempty"`
}
