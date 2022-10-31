package shared

import (
"time")

type DescribeMetricSetResponse struct {
    AnomalyDetectorArn *string `json:"AnomalyDetectorArn,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DimensionList []string `json:"DimensionList,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    MetricList []Metric `json:"MetricList,omitempty"`
    MetricSetArn *string `json:"MetricSetArn,omitempty"`
    MetricSetDescription *string `json:"MetricSetDescription,omitempty"`
    MetricSetFrequency *FrequencyEnum `json:"MetricSetFrequency,omitempty"`
    MetricSetName *string `json:"MetricSetName,omitempty"`
    MetricSource *MetricSource `json:"MetricSource,omitempty"`
    Offset *int64 `json:"Offset,omitempty"`
    TimestampColumn *TimestampColumn `json:"TimestampColumn,omitempty"`
    Timezone *string `json:"Timezone,omitempty"`
    
}

