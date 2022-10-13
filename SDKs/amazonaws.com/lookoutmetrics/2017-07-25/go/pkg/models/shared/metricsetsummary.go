package shared

import (
	"time"
)

type MetricSetSummary struct {
	AnomalyDetectorArn   *string           `json:"AnomalyDetectorArn"`
	CreationTime         *time.Time        `json:"CreationTime"`
	LastModificationTime *time.Time        `json:"LastModificationTime"`
	MetricSetArn         *string           `json:"MetricSetArn"`
	MetricSetDescription *string           `json:"MetricSetDescription"`
	MetricSetName        *string           `json:"MetricSetName"`
	Tags                 map[string]string `json:"Tags"`
}
