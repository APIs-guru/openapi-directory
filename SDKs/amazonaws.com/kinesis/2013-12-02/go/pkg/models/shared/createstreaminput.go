package shared

// CreateStreamInput
// Represents the input for <code>CreateStream</code>.
type CreateStreamInput struct {
	ShardCount int64  `json:"ShardCount"`
	StreamName string `json:"StreamName"`
}
