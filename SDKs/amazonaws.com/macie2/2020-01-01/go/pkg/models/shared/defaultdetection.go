package shared

type DefaultDetection struct {
	Count       *int64       `json:"count,omitempty"`
	Occurrences *Occurrences `json:"occurrences,omitempty"`
	Type        *string      `json:"type,omitempty"`
}
