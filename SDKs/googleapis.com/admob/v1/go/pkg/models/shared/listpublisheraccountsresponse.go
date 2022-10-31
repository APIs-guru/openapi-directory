package shared

type ListPublisherAccountsResponse struct {
	Account       []PublisherAccount `json:"account,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
