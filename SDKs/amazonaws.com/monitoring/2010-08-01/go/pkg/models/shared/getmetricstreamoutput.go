package shared

import (
	"time"
)

type GetMetricStreamOutput struct {
	Arn            *string
	CreationDate   *time.Time
	ExcludeFilters []MetricStreamFilter
	FirehoseArn    *string
	IncludeFilters []MetricStreamFilter
	LastUpdateDate *time.Time
	Name           *string
	OutputFormat   *MetricStreamOutputFormatEnum
	RoleArn        *string
	State          *string
}
