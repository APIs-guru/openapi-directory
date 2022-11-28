package shared

// GetRecordsInput
// Represents the input of a <code>GetRecords</code> operation.
type GetRecordsInput struct {
	Limit         *int64 `json:"Limit,omitempty"`
	ShardIterator string `json:"ShardIterator"`
}
