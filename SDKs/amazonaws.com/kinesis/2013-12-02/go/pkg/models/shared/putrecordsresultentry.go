package shared

// PutRecordsResultEntry
// Represents the result of an individual record from a <code>PutRecords</code> request. A record that is successfully added to a stream includes <code>SequenceNumber</code> and <code>ShardId</code> in the result. A record that fails to be added to the stream includes <code>ErrorCode</code> and <code>ErrorMessage</code> in the result.
type PutRecordsResultEntry struct {
	ErrorCode      *string `json:"ErrorCode,omitempty"`
	ErrorMessage   *string `json:"ErrorMessage,omitempty"`
	SequenceNumber *string `json:"SequenceNumber,omitempty"`
	ShardID        *string `json:"ShardId,omitempty"`
}
