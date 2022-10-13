package shared

type CompliantSummary struct {
	CompliantCount  *int64           `json:"CompliantCount"`
	SeveritySummary *SeveritySummary `json:"SeveritySummary"`
}
