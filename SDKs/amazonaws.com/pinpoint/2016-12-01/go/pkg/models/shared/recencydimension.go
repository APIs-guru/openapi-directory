package shared

// RecencyDimension
// Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active.
type RecencyDimension struct {
	Duration    DurationEnum    `json:"Duration"`
	RecencyType RecencyTypeEnum `json:"RecencyType"`
}
