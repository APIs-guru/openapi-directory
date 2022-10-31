package shared



type CreateSystemTemplateRequest struct {
    CompatibleNamespaceVersion *int64 `json:"compatibleNamespaceVersion,omitempty"`
    Definition DefinitionDocument `json:"definition"`
    
}

