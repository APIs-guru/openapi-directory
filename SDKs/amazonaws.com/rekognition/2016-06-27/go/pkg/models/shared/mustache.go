package shared

// Mustache
// Indicates whether or not the face has a mustache, and the confidence level in the determination.
type Mustache struct {
	Confidence *float32 `json:"Confidence,omitempty"`
	Value      *bool    `json:"Value,omitempty"`
}
