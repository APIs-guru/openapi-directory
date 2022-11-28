package shared

// SlotTypeValue
// Each slot type can have a set of values. Each <code>SlotTypeValue</code> represents a value that the slot type can take.
type SlotTypeValue struct {
	SampleValue *SampleValue  `json:"sampleValue,omitempty"`
	Synonyms    []SampleValue `json:"synonyms,omitempty"`
}
