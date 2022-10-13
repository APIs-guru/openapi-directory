package shared

import (
	"time"
)

type Edge struct {
	Aliases               []Alias          `json:"Aliases"`
	EndTime               *time.Time       `json:"EndTime"`
	ReferenceID           *int64           `json:"ReferenceId"`
	ResponseTimeHistogram []HistogramEntry `json:"ResponseTimeHistogram"`
	StartTime             *time.Time       `json:"StartTime"`
	SummaryStatistics     *EdgeStatistics  `json:"SummaryStatistics"`
}
