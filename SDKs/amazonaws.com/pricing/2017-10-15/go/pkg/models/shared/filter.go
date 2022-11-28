package shared

// Filter
// The constraints that you want all returned products to match.
type Filter struct {
	Field string         `json:"Field"`
	Type  FilterTypeEnum `json:"Type"`
	Value string         `json:"Value"`
}
