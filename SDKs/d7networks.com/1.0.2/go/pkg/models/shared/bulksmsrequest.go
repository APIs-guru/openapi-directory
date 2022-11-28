package shared

// BulkSmsRequest
// Bulk SMS Request
type BulkSmsRequest struct {
	Messages []Message `json:"messages"`
}
