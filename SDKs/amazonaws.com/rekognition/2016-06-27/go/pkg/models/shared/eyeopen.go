package shared

// EyeOpen
// Indicates whether or not the eyes on the face are open, and the confidence level in the determination.
type EyeOpen struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
