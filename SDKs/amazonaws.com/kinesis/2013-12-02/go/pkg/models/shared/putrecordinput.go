package shared

type PutRecordInput struct {
	Data                      string  `json:"Data"`
	ExplicitHashKey           *string `json:"ExplicitHashKey"`
	PartitionKey              string  `json:"PartitionKey"`
	SequenceNumberForOrdering *string `json:"SequenceNumberForOrdering"`
	StreamName                string  `json:"StreamName"`
}
