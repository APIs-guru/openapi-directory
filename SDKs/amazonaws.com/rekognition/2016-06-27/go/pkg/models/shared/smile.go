package shared

// Smile
// Indicates whether or not the face is smiling, and the confidence level in the determination.
type Smile struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
