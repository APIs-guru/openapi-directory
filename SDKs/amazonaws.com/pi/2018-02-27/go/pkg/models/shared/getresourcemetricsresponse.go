package shared

import (
	"time"
)

type GetResourceMetricsResponse struct {
	AlignedEndTime   *time.Time            `json:"AlignedEndTime,omitempty"`
	AlignedStartTime *time.Time            `json:"AlignedStartTime,omitempty"`
	Identifier       *string               `json:"Identifier,omitempty"`
	MetricList       []MetricKeyDataPoints `json:"MetricList,omitempty"`
	NextToken        *string               `json:"NextToken,omitempty"`
}
