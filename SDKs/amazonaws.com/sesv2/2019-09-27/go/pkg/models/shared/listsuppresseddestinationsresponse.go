package shared

// ListSuppressedDestinationsResponse
// A list of suppressed email addresses.
type ListSuppressedDestinationsResponse struct {
	NextToken                      *string                        `json:"NextToken,omitempty"`
	SuppressedDestinationSummaries []SuppressedDestinationSummary `json:"SuppressedDestinationSummaries,omitempty"`
}
