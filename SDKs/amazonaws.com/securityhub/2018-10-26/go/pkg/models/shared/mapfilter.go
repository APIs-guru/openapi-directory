package shared

type MapFilter struct {
	Comparison *MapFilterComparisonEnum `json:"Comparison"`
	Key        *string                  `json:"Key"`
	Value      *string                  `json:"Value"`
}
