package shared

import (
"time")

type MetricSetSummary struct {
    AnomalyDetectorArn *string `json:"AnomalyDetectorArn,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    LastModificationTime *time.Time `json:"LastModificationTime,omitempty"`
    MetricSetArn *string `json:"MetricSetArn,omitempty"`
    MetricSetDescription *string `json:"MetricSetDescription,omitempty"`
    MetricSetName *string `json:"MetricSetName,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

