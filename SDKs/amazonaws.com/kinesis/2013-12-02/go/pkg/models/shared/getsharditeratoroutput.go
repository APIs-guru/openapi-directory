package shared

// GetShardIteratorOutput
// Represents the output for <code>GetShardIterator</code>.
type GetShardIteratorOutput struct {
	ShardIterator *string `json:"ShardIterator,omitempty"`
}
