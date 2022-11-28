package shared

// LunRange
// A LUN(Logical Unit Number) range.
type LunRange struct {
	Quantity *int32 `json:"quantity,omitempty"`
	SizeGb   *int32 `json:"sizeGb,omitempty"`
}
