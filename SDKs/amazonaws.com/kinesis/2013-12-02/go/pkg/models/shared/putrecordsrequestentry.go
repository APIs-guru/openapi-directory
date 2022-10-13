package shared

type PutRecordsRequestEntry struct {
	Data            string  `json:"Data"`
	ExplicitHashKey *string `json:"ExplicitHashKey"`
	PartitionKey    string  `json:"PartitionKey"`
}
