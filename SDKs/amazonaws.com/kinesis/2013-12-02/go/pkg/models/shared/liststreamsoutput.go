package shared

// ListStreamsOutput
// Represents the output for <code>ListStreams</code>.
type ListStreamsOutput struct {
	HasMoreStreams bool     `json:"HasMoreStreams"`
	StreamNames    []string `json:"StreamNames"`
}
