package shared

type BulkEmailEntryResult struct {
	Error     *string              `json:"Error,omitempty"`
	MessageID *string              `json:"MessageId,omitempty"`
	Status    *BulkEmailStatusEnum `json:"Status,omitempty"`
}
