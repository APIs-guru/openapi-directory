package shared

type ListCustomDataIdentifiersResponse struct {
	Items     []CustomDataIdentifierSummary `json:"items,omitempty"`
	NextToken *string                       `json:"nextToken,omitempty"`
}
