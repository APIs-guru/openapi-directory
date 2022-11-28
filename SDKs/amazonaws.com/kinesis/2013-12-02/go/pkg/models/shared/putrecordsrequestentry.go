package shared

// PutRecordsRequestEntry
// Represents the output for <code>PutRecords</code>.
type PutRecordsRequestEntry struct {
	Data            string  `json:"Data"`
	ExplicitHashKey *string `json:"ExplicitHashKey,omitempty"`
	PartitionKey    string  `json:"PartitionKey"`
}
