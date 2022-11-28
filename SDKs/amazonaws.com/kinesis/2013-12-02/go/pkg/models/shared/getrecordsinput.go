package shared

// GetRecordsInput
// Represents the input for <a>GetRecords</a>.
type GetRecordsInput struct {
	Limit         *int64 `json:"Limit,omitempty"`
	ShardIterator string `json:"ShardIterator"`
}
