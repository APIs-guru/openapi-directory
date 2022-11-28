package shared

// GetShardIteratorInput
// Represents the input of a <code>GetShardIterator</code> operation.
type GetShardIteratorInput struct {
	SequenceNumber    *string               `json:"SequenceNumber,omitempty"`
	ShardID           string                `json:"ShardId"`
	ShardIteratorType ShardIteratorTypeEnum `json:"ShardIteratorType"`
	StreamArn         string                `json:"StreamArn"`
}
