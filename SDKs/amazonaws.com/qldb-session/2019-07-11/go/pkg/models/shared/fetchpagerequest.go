package shared

// FetchPageRequest
// Specifies the details of the page to be fetched.
type FetchPageRequest struct {
	NextPageToken string `json:"NextPageToken"`
	TransactionID string `json:"TransactionId"`
}
