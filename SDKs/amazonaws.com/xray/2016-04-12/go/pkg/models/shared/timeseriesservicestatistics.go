package shared

import (
	"time"
)

// TimeSeriesServiceStatistics
// A list of TimeSeriesStatistic structures.
type TimeSeriesServiceStatistics struct {
	EdgeSummaryStatistics     *EdgeStatistics     `json:"EdgeSummaryStatistics,omitempty"`
	ResponseTimeHistogram     []HistogramEntry    `json:"ResponseTimeHistogram,omitempty"`
	ServiceForecastStatistics *ForecastStatistics `json:"ServiceForecastStatistics,omitempty"`
	ServiceSummaryStatistics  *ServiceStatistics  `json:"ServiceSummaryStatistics,omitempty"`
	Timestamp                 *time.Time          `json:"Timestamp,omitempty"`
}
