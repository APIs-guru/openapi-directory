package shared

// ReportRow
// A row in the report.
type ReportRow struct {
	Dimensions []string          `json:"dimensions,omitempty"`
	Metrics    []DateRangeValues `json:"metrics,omitempty"`
}
