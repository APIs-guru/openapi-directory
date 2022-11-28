package shared

// Value
// The value of a slot.
type Value struct {
	InterpretedValue string   `json:"interpretedValue"`
	OriginalValue    *string  `json:"originalValue,omitempty"`
	ResolvedValues   []string `json:"resolvedValues,omitempty"`
}
