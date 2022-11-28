package shared

// SystemTemplateDescription
// An object that contains a system's definition document and summary information.
type SystemTemplateDescription struct {
	Definition                *DefinitionDocument    `json:"definition,omitempty"`
	Summary                   *SystemTemplateSummary `json:"summary,omitempty"`
	ValidatedNamespaceVersion *int64                 `json:"validatedNamespaceVersion,omitempty"`
}
