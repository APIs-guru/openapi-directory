package shared

type SplitShardInput struct {
	NewStartingHashKey string `json:"NewStartingHashKey"`
	ShardToSplit       string `json:"ShardToSplit"`
	StreamName         string `json:"StreamName"`
}
