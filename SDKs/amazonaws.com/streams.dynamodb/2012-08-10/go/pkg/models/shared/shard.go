package shared



type Shard struct {
    ParentShardID *string `json:"ParentShardId,omitempty"`
    SequenceNumberRange *SequenceNumberRange `json:"SequenceNumberRange,omitempty"`
    ShardID *string `json:"ShardId,omitempty"`
    
}

