package shared

type ListCustomDataIdentifiersResponse struct {
	Items     []CustomDataIdentifierSummary `json:"items"`
	NextToken *string                       `json:"nextToken"`
}
