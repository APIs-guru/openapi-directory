package shared

// FlowTemplateDescription
// An object that contains a workflow's definition and summary information.
type FlowTemplateDescription struct {
	Definition                *DefinitionDocument  `json:"definition,omitempty"`
	Summary                   *FlowTemplateSummary `json:"summary,omitempty"`
	ValidatedNamespaceVersion *int64               `json:"validatedNamespaceVersion,omitempty"`
}
