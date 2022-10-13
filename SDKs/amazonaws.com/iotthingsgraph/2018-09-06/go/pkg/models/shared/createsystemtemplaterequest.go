package shared

type CreateSystemTemplateRequest struct {
	CompatibleNamespaceVersion *int64             `json:"compatibleNamespaceVersion"`
	Definition                 DefinitionDocument `json:"definition"`
}
