package shared

// MouthOpen
// Indicates whether or not the mouth on the face is open, and the confidence level in the determination.
type MouthOpen struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
