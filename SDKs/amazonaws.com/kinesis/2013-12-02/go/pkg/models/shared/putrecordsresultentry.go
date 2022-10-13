package shared

type PutRecordsResultEntry struct {
	ErrorCode      *string `json:"ErrorCode"`
	ErrorMessage   *string `json:"ErrorMessage"`
	SequenceNumber *string `json:"SequenceNumber"`
	ShardID        *string `json:"ShardId"`
}
