package shared

type Shard struct {
	ParentShardID       *string              `json:"ParentShardId"`
	SequenceNumberRange *SequenceNumberRange `json:"SequenceNumberRange"`
	ShardID             *string              `json:"ShardId"`
}
