package shared

// SequenceNumberRange
// The beginning and ending sequence numbers for the stream records contained within a shard.
type SequenceNumberRange struct {
	EndingSequenceNumber   *string `json:"EndingSequenceNumber,omitempty"`
	StartingSequenceNumber *string `json:"StartingSequenceNumber,omitempty"`
}
