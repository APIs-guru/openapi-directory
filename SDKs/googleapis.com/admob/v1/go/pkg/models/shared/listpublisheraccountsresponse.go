package shared

// ListPublisherAccountsResponse
// Response for the publisher account list request.
type ListPublisherAccountsResponse struct {
	Account       []PublisherAccount `json:"account,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
