package shared



type MergeShardsInput struct {
    AdjacentShardToMerge string `json:"AdjacentShardToMerge"`
    ShardToMerge string `json:"ShardToMerge"`
    StreamName string `json:"StreamName"`
    
}

