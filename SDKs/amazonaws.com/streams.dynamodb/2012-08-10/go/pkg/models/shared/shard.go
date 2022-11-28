package shared

// Shard
// A uniquely identified group of stream records within a stream.
type Shard struct {
	ParentShardID       *string              `json:"ParentShardId,omitempty"`
	SequenceNumberRange *SequenceNumberRange `json:"SequenceNumberRange,omitempty"`
	ShardID             *string              `json:"ShardId,omitempty"`
}
