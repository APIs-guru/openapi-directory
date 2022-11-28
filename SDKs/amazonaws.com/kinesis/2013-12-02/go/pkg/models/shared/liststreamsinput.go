package shared

// ListStreamsInput
// Represents the input for <code>ListStreams</code>.
type ListStreamsInput struct {
	ExclusiveStartStreamName *string `json:"ExclusiveStartStreamName,omitempty"`
	Limit                    *int64  `json:"Limit,omitempty"`
}
