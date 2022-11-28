package shared

// DimensionKeyDetail
// An object that describes the details for a specified dimension.
type DimensionKeyDetail struct {
	Dimension *string           `json:"Dimension,omitempty"`
	Status    *DetailStatusEnum `json:"Status,omitempty"`
	Value     *string           `json:"Value,omitempty"`
}
