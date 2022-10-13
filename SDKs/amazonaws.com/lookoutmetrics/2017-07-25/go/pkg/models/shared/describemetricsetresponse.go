package shared

import (
	"time"
)

type DescribeMetricSetResponse struct {
	AnomalyDetectorArn   *string          `json:"AnomalyDetectorArn"`
	CreationTime         *time.Time       `json:"CreationTime"`
	DimensionList        []string         `json:"DimensionList"`
	LastModificationTime *time.Time       `json:"LastModificationTime"`
	MetricList           []Metric         `json:"MetricList"`
	MetricSetArn         *string          `json:"MetricSetArn"`
	MetricSetDescription *string          `json:"MetricSetDescription"`
	MetricSetFrequency   *FrequencyEnum   `json:"MetricSetFrequency"`
	MetricSetName        *string          `json:"MetricSetName"`
	MetricSource         *MetricSource    `json:"MetricSource"`
	Offset               *int64           `json:"Offset"`
	TimestampColumn      *TimestampColumn `json:"TimestampColumn"`
	Timezone             *string          `json:"Timezone"`
}
