package shared

type CustomDataIdentifiersDetections struct {
	Arn         *string      `json:"Arn"`
	Count       *int64       `json:"Count"`
	Name        *string      `json:"Name"`
	Occurrences *Occurrences `json:"Occurrences"`
}
