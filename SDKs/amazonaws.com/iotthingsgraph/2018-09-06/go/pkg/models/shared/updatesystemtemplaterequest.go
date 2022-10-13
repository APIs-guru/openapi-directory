package shared

type UpdateSystemTemplateRequest struct {
	CompatibleNamespaceVersion *int64             `json:"compatibleNamespaceVersion"`
	Definition                 DefinitionDocument `json:"definition"`
	ID                         string             `json:"id"`
}
