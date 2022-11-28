package shared

// Eyeglasses
// Indicates whether or not the face is wearing eye glasses, and the confidence level in the determination.
type Eyeglasses struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
