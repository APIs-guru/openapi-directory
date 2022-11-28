package shared

// ListChildAccountsResponse
// Response definition for the child account list rpc.
type ListChildAccountsResponse struct {
	Accounts      []Account `json:"accounts,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
