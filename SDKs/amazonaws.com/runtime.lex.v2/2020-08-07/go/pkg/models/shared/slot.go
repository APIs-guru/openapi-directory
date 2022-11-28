package shared

// Slot
// A value that Amazon Lex V2 uses to fulfill an intent.
type Slot struct {
	Value  *Value `json:"value,omitempty"`
	Values []Slot `json:"values,omitempty"`
}
