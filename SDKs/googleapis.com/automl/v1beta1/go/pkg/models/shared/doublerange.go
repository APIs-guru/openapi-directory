package shared

// DoubleRange
// A range between two double numbers.
type DoubleRange struct {
	End   *float64 `json:"end,omitempty"`
	Start *float64 `json:"start,omitempty"`
}
