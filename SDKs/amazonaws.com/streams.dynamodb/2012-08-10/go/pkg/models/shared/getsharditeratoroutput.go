package shared

// GetShardIteratorOutput
// Represents the output of a <code>GetShardIterator</code> operation.
type GetShardIteratorOutput struct {
	ShardIterator *string `json:"ShardIterator,omitempty"`
}
