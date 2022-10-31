package shared

type NumberFilter struct {
	Eq  *float64 `json:"Eq,omitempty"`
	Gte *float64 `json:"Gte,omitempty"`
	Lte *float64 `json:"Lte,omitempty"`
}
