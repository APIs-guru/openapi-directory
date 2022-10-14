package shared

type BlackFrame struct {
	MaxPixelThreshold     *float32 `json:"MaxPixelThreshold,omitempty"`
	MinCoveragePercentage *float32 `json:"MinCoveragePercentage,omitempty"`
}
