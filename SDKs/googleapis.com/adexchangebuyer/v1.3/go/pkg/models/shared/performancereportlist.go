package shared

// PerformanceReportList
// The configuration data for an Ad Exchange performance report list.
type PerformanceReportList struct {
	Kind              *string             `json:"kind,omitempty"`
	PerformanceReport []PerformanceReport `json:"performanceReport,omitempty"`
}
