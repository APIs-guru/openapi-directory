package shared

type SearchedLogStream struct {
	LogStreamName      *string `json:"logStreamName"`
	SearchedCompletely *bool   `json:"searchedCompletely"`
}
