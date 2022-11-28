package shared

// ListStreamsOutput
// Represents the output of a <code>ListStreams</code> operation.
type ListStreamsOutput struct {
	LastEvaluatedStreamArn *string  `json:"LastEvaluatedStreamArn,omitempty"`
	Streams                []Stream `json:"Streams,omitempty"`
}
