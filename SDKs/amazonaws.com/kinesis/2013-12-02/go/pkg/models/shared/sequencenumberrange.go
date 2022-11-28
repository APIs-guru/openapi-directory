package shared

// SequenceNumberRange
// The range of possible sequence numbers for the shard.
type SequenceNumberRange struct {
	EndingSequenceNumber   *string `json:"EndingSequenceNumber,omitempty"`
	StartingSequenceNumber string  `json:"StartingSequenceNumber"`
}
