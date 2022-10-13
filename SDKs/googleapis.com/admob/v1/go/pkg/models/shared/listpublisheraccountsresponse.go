package shared

type ListPublisherAccountsResponse struct {
	Account       []PublisherAccount `json:"account"`
	NextPageToken *string            `json:"nextPageToken"`
}
