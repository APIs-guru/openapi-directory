package shared

type PutRecordsRequestEntry struct {
	Data            string  `json:"Data"`
	ExplicitHashKey *string `json:"ExplicitHashKey,omitempty"`
	PartitionKey    string  `json:"PartitionKey"`
}
