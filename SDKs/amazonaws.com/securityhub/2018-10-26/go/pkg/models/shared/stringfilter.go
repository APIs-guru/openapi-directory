package shared

// StringFilter
// A string filter for querying findings.
type StringFilter struct {
	Comparison *StringFilterComparisonEnum `json:"Comparison,omitempty"`
	Value      *string                     `json:"Value,omitempty"`
}
