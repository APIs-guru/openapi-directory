package shared

type ListManagedDataIdentifiersResponse struct {
	Items     []ManagedDataIdentifierSummary `json:"items"`
	NextToken *string                        `json:"nextToken"`
}
