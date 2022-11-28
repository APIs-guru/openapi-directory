package shared

// MapFilter
// A map filter for querying findings. Each map filter provides the field to check, the value to look for, and the comparison operator.
type MapFilter struct {
	Comparison *MapFilterComparisonEnum `json:"Comparison,omitempty"`
	Key        *string                  `json:"Key,omitempty"`
	Value      *string                  `json:"Value,omitempty"`
}
