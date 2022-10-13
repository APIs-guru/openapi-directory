package shared

type SequenceNumberRange struct {
	EndingSequenceNumber   *string `json:"EndingSequenceNumber"`
	StartingSequenceNumber string  `json:"StartingSequenceNumber"`
}
