package shared

type CustomDetection struct {
	Arn         *string      `json:"arn,omitempty"`
	Count       *int64       `json:"count,omitempty"`
	Name        *string      `json:"name,omitempty"`
	Occurrences *Occurrences `json:"occurrences,omitempty"`
}
