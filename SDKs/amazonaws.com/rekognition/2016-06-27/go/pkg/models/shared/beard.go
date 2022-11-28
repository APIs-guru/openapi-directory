package shared

// Beard
// Indicates whether or not the face has a beard, and the confidence level in the determination.
type Beard struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
