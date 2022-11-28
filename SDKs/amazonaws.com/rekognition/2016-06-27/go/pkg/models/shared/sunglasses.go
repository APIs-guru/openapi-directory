package shared

// Sunglasses
// Indicates whether or not the face is wearing sunglasses, and the confidence level in the determination.
type Sunglasses struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
