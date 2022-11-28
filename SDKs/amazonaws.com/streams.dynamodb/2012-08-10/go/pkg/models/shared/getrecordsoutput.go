package shared

// GetRecordsOutput
// Represents the output of a <code>GetRecords</code> operation.
type GetRecordsOutput struct {
	NextShardIterator *string  `json:"NextShardIterator,omitempty"`
	Records           []Record `json:"Records,omitempty"`
}
