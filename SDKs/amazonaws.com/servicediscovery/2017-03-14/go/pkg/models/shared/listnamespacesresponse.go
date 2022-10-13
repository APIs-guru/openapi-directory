package shared

type ListNamespacesResponse struct {
	Namespaces []NamespaceSummary `json:"Namespaces"`
	NextToken  *string            `json:"NextToken"`
}
