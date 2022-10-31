package shared



type PerformanceReportList struct {
    Kind *string `json:"kind,omitempty"`
    PerformanceReport []PerformanceReport `json:"performanceReport,omitempty"`
    
}

