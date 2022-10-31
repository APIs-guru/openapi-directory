package shared

type DoubleRange struct {
	Max *float64 `json:"max,omitempty"`
	Min *float64 `json:"min,omitempty"`
}
