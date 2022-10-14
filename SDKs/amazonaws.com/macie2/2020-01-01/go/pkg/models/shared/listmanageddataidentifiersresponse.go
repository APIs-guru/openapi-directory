package shared

type ListManagedDataIdentifiersResponse struct {
	Items     []ManagedDataIdentifierSummary `json:"items,omitempty"`
	NextToken *string                        `json:"nextToken,omitempty"`
}
