package shared

type SystemTemplateDescription struct {
	Definition                *DefinitionDocument    `json:"definition"`
	Summary                   *SystemTemplateSummary `json:"summary"`
	ValidatedNamespaceVersion *int64                 `json:"validatedNamespaceVersion"`
}
