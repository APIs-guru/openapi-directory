package shared

type SensitiveDataDetections struct {
	Count       *int64       `json:"Count"`
	Occurrences *Occurrences `json:"Occurrences"`
	Type        *string      `json:"Type"`
}
