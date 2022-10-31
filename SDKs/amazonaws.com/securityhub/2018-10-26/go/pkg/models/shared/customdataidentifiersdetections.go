package shared

type CustomDataIdentifiersDetections struct {
	Arn         *string      `json:"Arn,omitempty"`
	Count       *int64       `json:"Count,omitempty"`
	Name        *string      `json:"Name,omitempty"`
	Occurrences *Occurrences `json:"Occurrences,omitempty"`
}
