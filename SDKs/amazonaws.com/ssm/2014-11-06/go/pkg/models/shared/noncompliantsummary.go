package shared

type NonCompliantSummary struct {
	NonCompliantCount *int64           `json:"NonCompliantCount"`
	SeveritySummary   *SeveritySummary `json:"SeveritySummary"`
}
