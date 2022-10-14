package shared

type Streamingbuffer struct {
	EstimatedBytes  *string `json:"estimatedBytes,omitempty"`
	EstimatedRows   *string `json:"estimatedRows,omitempty"`
	OldestEntryTime *string `json:"oldestEntryTime,omitempty"`
}
