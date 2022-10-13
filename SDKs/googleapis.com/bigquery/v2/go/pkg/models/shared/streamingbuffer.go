package shared

type Streamingbuffer struct {
	EstimatedBytes  *string `json:"estimatedBytes"`
	EstimatedRows   *string `json:"estimatedRows"`
	OldestEntryTime *string `json:"oldestEntryTime"`
}
