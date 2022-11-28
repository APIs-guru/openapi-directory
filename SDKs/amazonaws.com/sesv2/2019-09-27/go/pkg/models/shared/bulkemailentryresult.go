package shared

// BulkEmailEntryResult
// The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
type BulkEmailEntryResult struct {
	Error     *string              `json:"Error,omitempty"`
	MessageID *string              `json:"MessageId,omitempty"`
	Status    *BulkEmailStatusEnum `json:"Status,omitempty"`
}
