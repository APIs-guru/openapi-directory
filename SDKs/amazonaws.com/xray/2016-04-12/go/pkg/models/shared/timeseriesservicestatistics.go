package shared

import (
"time")

type TimeSeriesServiceStatistics struct {
    EdgeSummaryStatistics *EdgeStatistics `json:"EdgeSummaryStatistics,omitempty"`
    ResponseTimeHistogram []HistogramEntry `json:"ResponseTimeHistogram,omitempty"`
    ServiceForecastStatistics *ForecastStatistics `json:"ServiceForecastStatistics,omitempty"`
    ServiceSummaryStatistics *ServiceStatistics `json:"ServiceSummaryStatistics,omitempty"`
    Timestamp *time.Time `json:"Timestamp,omitempty"`
    
}

