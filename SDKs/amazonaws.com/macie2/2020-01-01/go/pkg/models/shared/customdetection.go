package shared

type CustomDetection struct {
	Arn         *string      `json:"arn"`
	Count       *int64       `json:"count"`
	Name        *string      `json:"name"`
	Occurrences *Occurrences `json:"occurrences"`
}
