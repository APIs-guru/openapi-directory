package shared

type CreateFlowTemplateRequest struct {
	CompatibleNamespaceVersion *int64             `json:"compatibleNamespaceVersion"`
	Definition                 DefinitionDocument `json:"definition"`
}
