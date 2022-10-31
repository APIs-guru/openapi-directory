package shared



type UpdateSystemTemplateRequest struct {
    CompatibleNamespaceVersion *int64 `json:"compatibleNamespaceVersion,omitempty"`
    Definition DefinitionDocument `json:"definition"`
    ID string `json:"id"`
    
}

