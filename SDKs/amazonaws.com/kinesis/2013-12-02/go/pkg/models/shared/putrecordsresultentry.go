package shared

type PutRecordsResultEntry struct {
	ErrorCode      *string `json:"ErrorCode,omitempty"`
	ErrorMessage   *string `json:"ErrorMessage,omitempty"`
	SequenceNumber *string `json:"SequenceNumber,omitempty"`
	ShardID        *string `json:"ShardId,omitempty"`
}
