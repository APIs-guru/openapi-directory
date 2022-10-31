package shared



type SystemTemplateDescription struct {
    Definition *DefinitionDocument `json:"definition,omitempty"`
    Summary *SystemTemplateSummary `json:"summary,omitempty"`
    ValidatedNamespaceVersion *int64 `json:"validatedNamespaceVersion,omitempty"`
    
}

