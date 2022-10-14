package shared

type SearchedLogStream struct {
	LogStreamName      *string `json:"logStreamName,omitempty"`
	SearchedCompletely *bool   `json:"searchedCompletely,omitempty"`
}
