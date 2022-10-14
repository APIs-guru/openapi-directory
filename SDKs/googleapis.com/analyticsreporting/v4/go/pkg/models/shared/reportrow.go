package shared

type ReportRow struct {
	Dimensions []string          `json:"dimensions,omitempty"`
	Metrics    []DateRangeValues `json:"metrics,omitempty"`
}
