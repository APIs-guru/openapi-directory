package shared

type ListStreamsOutput struct {
	HasMoreStreams bool     `json:"HasMoreStreams"`
	StreamNames    []string `json:"StreamNames"`
}
