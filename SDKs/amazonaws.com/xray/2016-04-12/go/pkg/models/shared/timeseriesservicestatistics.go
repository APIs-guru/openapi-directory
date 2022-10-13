package shared

import (
	"time"
)

type TimeSeriesServiceStatistics struct {
	EdgeSummaryStatistics     *EdgeStatistics     `json:"EdgeSummaryStatistics"`
	ResponseTimeHistogram     []HistogramEntry    `json:"ResponseTimeHistogram"`
	ServiceForecastStatistics *ForecastStatistics `json:"ServiceForecastStatistics"`
	ServiceSummaryStatistics  *ServiceStatistics  `json:"ServiceSummaryStatistics"`
	Timestamp                 *time.Time          `json:"Timestamp"`
}
