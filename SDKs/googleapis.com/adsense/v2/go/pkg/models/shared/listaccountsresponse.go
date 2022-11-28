package shared

// ListAccountsResponse
// Response definition for the account list rpc.
type ListAccountsResponse struct {
	Accounts      []Account `json:"accounts,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
