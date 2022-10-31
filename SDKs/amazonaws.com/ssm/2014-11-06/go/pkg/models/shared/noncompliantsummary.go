package shared

type NonCompliantSummary struct {
	NonCompliantCount *int64           `json:"NonCompliantCount,omitempty"`
	SeveritySummary   *SeveritySummary `json:"SeveritySummary,omitempty"`
}
