package shared

type ListSuppressedDestinationsResponse struct {
	NextToken                      *string                        `json:"NextToken"`
	SuppressedDestinationSummaries []SuppressedDestinationSummary `json:"SuppressedDestinationSummaries"`
}
