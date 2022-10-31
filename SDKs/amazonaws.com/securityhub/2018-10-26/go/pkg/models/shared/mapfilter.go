package shared

type MapFilter struct {
	Comparison *MapFilterComparisonEnum `json:"Comparison,omitempty"`
	Key        *string                  `json:"Key,omitempty"`
	Value      *string                  `json:"Value,omitempty"`
}
