package shared



type SequenceNumberRange struct {
    EndingSequenceNumber *string `json:"EndingSequenceNumber,omitempty"`
    StartingSequenceNumber string `json:"StartingSequenceNumber"`
    
}

