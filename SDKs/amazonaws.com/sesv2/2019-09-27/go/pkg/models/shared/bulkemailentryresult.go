package shared

type BulkEmailEntryResult struct {
	Error     *string              `json:"Error"`
	MessageID *string              `json:"MessageId"`
	Status    *BulkEmailStatusEnum `json:"Status"`
}
