package shared

type PerformanceReportList struct {
	Kind              *string             `json:"kind"`
	PerformanceReport []PerformanceReport `json:"performanceReport"`
}
