package shared

type SlotTypeValue struct {
	SampleValue *SampleValue  `json:"sampleValue"`
	Synonyms    []SampleValue `json:"synonyms"`
}
