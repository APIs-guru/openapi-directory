package shared

type FlowTemplateDescription struct {
	Definition                *DefinitionDocument  `json:"definition"`
	Summary                   *FlowTemplateSummary `json:"summary"`
	ValidatedNamespaceVersion *int64               `json:"validatedNamespaceVersion"`
}
