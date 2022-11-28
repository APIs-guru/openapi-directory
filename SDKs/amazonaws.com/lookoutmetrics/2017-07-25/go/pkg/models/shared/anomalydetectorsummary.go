package shared

import (
	"time"
)

// AnomalyDetectorSummary
// Contains information about an an anomaly detector.
type AnomalyDetectorSummary struct {
	AnomalyDetectorArn         *string                    `json:"AnomalyDetectorArn,omitempty"`
	AnomalyDetectorDescription *string                    `json:"AnomalyDetectorDescription,omitempty"`
	AnomalyDetectorName        *string                    `json:"AnomalyDetectorName,omitempty"`
	CreationTime               *time.Time                 `json:"CreationTime,omitempty"`
	LastModificationTime       *time.Time                 `json:"LastModificationTime,omitempty"`
	Status                     *AnomalyDetectorStatusEnum `json:"Status,omitempty"`
	Tags                       map[string]string          `json:"Tags,omitempty"`
}
