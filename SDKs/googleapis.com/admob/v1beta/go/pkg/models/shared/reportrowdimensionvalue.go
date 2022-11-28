package shared

// ReportRowDimensionValue
// Representation of a dimension value.
type ReportRowDimensionValue struct {
	DisplayLabel *string `json:"displayLabel,omitempty"`
	Value        *string `json:"value,omitempty"`
}
