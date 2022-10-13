package shared

import (
	"time"
)

type GetResourceMetricsResponse struct {
	AlignedEndTime   *time.Time            `json:"AlignedEndTime"`
	AlignedStartTime *time.Time            `json:"AlignedStartTime"`
	Identifier       *string               `json:"Identifier"`
	MetricList       []MetricKeyDataPoints `json:"MetricList"`
	NextToken        *string               `json:"NextToken"`
}
