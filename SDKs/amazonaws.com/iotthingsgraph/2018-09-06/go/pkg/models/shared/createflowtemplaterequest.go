package shared

type CreateFlowTemplateRequest struct {
	CompatibleNamespaceVersion *int64             `json:"compatibleNamespaceVersion,omitempty"`
	Definition                 DefinitionDocument `json:"definition"`
}
