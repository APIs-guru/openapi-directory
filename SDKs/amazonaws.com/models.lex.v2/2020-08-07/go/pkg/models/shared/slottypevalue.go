package shared

type SlotTypeValue struct {
	SampleValue *SampleValue  `json:"sampleValue,omitempty"`
	Synonyms    []SampleValue `json:"synonyms,omitempty"`
}
