package shared

type ListChildAccountsResponse struct {
	Accounts      []Account `json:"accounts"`
	NextPageToken *string   `json:"nextPageToken"`
}
