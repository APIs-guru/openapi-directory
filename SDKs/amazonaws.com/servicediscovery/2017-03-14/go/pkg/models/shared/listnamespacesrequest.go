package shared

type ListNamespacesRequest struct {
	Filters    []NamespaceFilter `json:"Filters"`
	MaxResults *int64            `json:"MaxResults"`
	NextToken  *string           `json:"NextToken"`
}
