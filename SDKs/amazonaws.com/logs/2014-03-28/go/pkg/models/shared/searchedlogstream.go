package shared

// SearchedLogStream
// Represents the search status of a log stream.
type SearchedLogStream struct {
	LogStreamName      *string `json:"logStreamName,omitempty"`
	SearchedCompletely *bool   `json:"searchedCompletely,omitempty"`
}
