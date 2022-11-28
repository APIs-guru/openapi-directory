package shared

// CapacitySize
// Currently, the <code>CapacitySize</code> API is not supported.
type CapacitySize struct {
	Type  CapacitySizeTypeEnum `json:"Type"`
	Value int64                `json:"Value"`
}
