package shared

type FlowTemplateDescription struct {
	Definition                *DefinitionDocument  `json:"definition,omitempty"`
	Summary                   *FlowTemplateSummary `json:"summary,omitempty"`
	ValidatedNamespaceVersion *int64               `json:"validatedNamespaceVersion,omitempty"`
}
