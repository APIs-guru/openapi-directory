package shared

type NumberFilter struct {
	Eq  *float64 `json:"Eq"`
	Gte *float64 `json:"Gte"`
	Lte *float64 `json:"Lte"`
}
