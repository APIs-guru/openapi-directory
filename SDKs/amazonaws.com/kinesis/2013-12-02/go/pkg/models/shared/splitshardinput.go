package shared

// SplitShardInput
// Represents the input for <code>SplitShard</code>.
type SplitShardInput struct {
	NewStartingHashKey string `json:"NewStartingHashKey"`
	ShardToSplit       string `json:"ShardToSplit"`
	StreamName         string `json:"StreamName"`
}
