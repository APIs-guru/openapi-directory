package shared

// SetDimension
// Specifies the dimension type and values for a segment dimension.
type SetDimension struct {
	DimensionType *DimensionTypeEnum `json:"DimensionType,omitempty"`
	Values        []string           `json:"Values"`
}
