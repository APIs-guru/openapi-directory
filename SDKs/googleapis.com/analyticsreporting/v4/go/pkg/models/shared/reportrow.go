package shared

type ReportRow struct {
	Dimensions []string          `json:"dimensions"`
	Metrics    []DateRangeValues `json:"metrics"`
}
