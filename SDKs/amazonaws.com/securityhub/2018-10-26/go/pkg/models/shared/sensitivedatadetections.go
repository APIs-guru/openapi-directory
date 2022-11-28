package shared

// SensitiveDataDetections
// The list of detected instances of sensitive data.
type SensitiveDataDetections struct {
	Count       *int64       `json:"Count,omitempty"`
	Occurrences *Occurrences `json:"Occurrences,omitempty"`
	Type        *string      `json:"Type,omitempty"`
}
