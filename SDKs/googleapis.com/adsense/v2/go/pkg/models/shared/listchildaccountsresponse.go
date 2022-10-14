package shared

type ListChildAccountsResponse struct {
	Accounts      []Account `json:"accounts,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
