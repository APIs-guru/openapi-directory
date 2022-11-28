package shared

// DefinitionDocument
// A document that defines an entity.
type DefinitionDocument struct {
	Language DefinitionLanguageEnum `json:"language"`
	Text     string                 `json:"text"`
}
