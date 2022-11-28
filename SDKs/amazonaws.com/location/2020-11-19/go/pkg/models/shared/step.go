package shared

// Step
//
//	Represents an element of a leg within a route. A step contains instructions for how to move to the next step in the leg.
type Step struct {
	Distance        float64   `json:"Distance"`
	DurationSeconds float64   `json:"DurationSeconds"`
	EndPosition     []float64 `json:"EndPosition"`
	GeometryOffset  *int64    `json:"GeometryOffset,omitempty"`
	StartPosition   []float64 `json:"StartPosition"`
}
