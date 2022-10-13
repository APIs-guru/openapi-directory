package shared

type StringFilter struct {
	Comparison *StringFilterComparisonEnum `json:"Comparison"`
	Value      *string                     `json:"Value"`
}
