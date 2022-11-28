package shared

// NonCompliantSummary
// A summary of resources that aren't compliant. The summary is organized according to resource type.
type NonCompliantSummary struct {
	NonCompliantCount *int64           `json:"NonCompliantCount,omitempty"`
	SeveritySummary   *SeveritySummary `json:"SeveritySummary,omitempty"`
}
