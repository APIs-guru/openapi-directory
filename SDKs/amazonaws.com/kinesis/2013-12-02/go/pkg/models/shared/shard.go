package shared



type Shard struct {
    AdjacentParentShardID *string `json:"AdjacentParentShardId,omitempty"`
    HashKeyRange HashKeyRange `json:"HashKeyRange"`
    ParentShardID *string `json:"ParentShardId,omitempty"`
    SequenceNumberRange SequenceNumberRange `json:"SequenceNumberRange"`
    ShardID string `json:"ShardId"`
    
}

