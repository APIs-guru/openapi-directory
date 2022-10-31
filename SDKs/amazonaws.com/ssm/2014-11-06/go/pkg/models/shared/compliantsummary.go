package shared

type CompliantSummary struct {
	CompliantCount  *int64           `json:"CompliantCount,omitempty"`
	SeveritySummary *SeveritySummary `json:"SeveritySummary,omitempty"`
}
