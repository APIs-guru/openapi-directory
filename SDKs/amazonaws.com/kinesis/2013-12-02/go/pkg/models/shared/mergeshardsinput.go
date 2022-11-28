package shared

// MergeShardsInput
// Represents the input for <code>MergeShards</code>.
type MergeShardsInput struct {
	AdjacentShardToMerge string `json:"AdjacentShardToMerge"`
	ShardToMerge         string `json:"ShardToMerge"`
	StreamName           string `json:"StreamName"`
}
