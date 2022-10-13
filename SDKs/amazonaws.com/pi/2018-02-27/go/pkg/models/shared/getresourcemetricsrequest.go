package shared

import (
	"time"
)

type GetResourceMetricsRequest struct {
	EndTime         time.Time       `json:"EndTime"`
	Identifier      string          `json:"Identifier"`
	MaxResults      *int64          `json:"MaxResults"`
	MetricQueries   []MetricQuery   `json:"MetricQueries"`
	NextToken       *string         `json:"NextToken"`
	PeriodInSeconds *int64          `json:"PeriodInSeconds"`
	ServiceType     ServiceTypeEnum `json:"ServiceType"`
	StartTime       time.Time       `json:"StartTime"`
}
