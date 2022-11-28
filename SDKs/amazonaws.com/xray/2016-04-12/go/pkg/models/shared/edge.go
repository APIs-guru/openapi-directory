package shared

import (
	"time"
)

// Edge
// Information about a connection between two services.
type Edge struct {
	Aliases               []Alias          `json:"Aliases,omitempty"`
	EndTime               *time.Time       `json:"EndTime,omitempty"`
	ReferenceID           *int64           `json:"ReferenceId,omitempty"`
	ResponseTimeHistogram []HistogramEntry `json:"ResponseTimeHistogram,omitempty"`
	StartTime             *time.Time       `json:"StartTime,omitempty"`
	SummaryStatistics     *EdgeStatistics  `json:"SummaryStatistics,omitempty"`
}
