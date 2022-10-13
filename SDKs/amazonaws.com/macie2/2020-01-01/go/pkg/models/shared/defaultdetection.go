package shared

type DefaultDetection struct {
	Count       *int64       `json:"count"`
	Occurrences *Occurrences `json:"occurrences"`
	Type        *string      `json:"type"`
}
