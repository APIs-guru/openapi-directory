package shared



type PutRecordInput struct {
    Data string `json:"Data"`
    ExplicitHashKey *string `json:"ExplicitHashKey,omitempty"`
    PartitionKey string `json:"PartitionKey"`
    SequenceNumberForOrdering *string `json:"SequenceNumberForOrdering,omitempty"`
    StreamName string `json:"StreamName"`
    
}

