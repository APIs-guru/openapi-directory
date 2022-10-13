package shared

type Shard struct {
	AdjacentParentShardID *string             `json:"AdjacentParentShardId"`
	HashKeyRange          HashKeyRange        `json:"HashKeyRange"`
	ParentShardID         *string             `json:"ParentShardId"`
	SequenceNumberRange   SequenceNumberRange `json:"SequenceNumberRange"`
	ShardID               string              `json:"ShardId"`
}
