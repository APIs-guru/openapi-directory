package shared

// CompliantSummary
// A summary of resources that are compliant. The summary is organized according to the resource count for each compliance type.
type CompliantSummary struct {
	CompliantCount  *int64           `json:"CompliantCount,omitempty"`
	SeveritySummary *SeveritySummary `json:"SeveritySummary,omitempty"`
}
