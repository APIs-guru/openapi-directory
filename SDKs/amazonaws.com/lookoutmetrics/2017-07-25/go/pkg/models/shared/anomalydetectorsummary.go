package shared

import (
	"time"
)

type AnomalyDetectorSummary struct {
	AnomalyDetectorArn         *string                    `json:"AnomalyDetectorArn"`
	AnomalyDetectorDescription *string                    `json:"AnomalyDetectorDescription"`
	AnomalyDetectorName        *string                    `json:"AnomalyDetectorName"`
	CreationTime               *time.Time                 `json:"CreationTime"`
	LastModificationTime       *time.Time                 `json:"LastModificationTime"`
	Status                     *AnomalyDetectorStatusEnum `json:"Status"`
	Tags                       map[string]string          `json:"Tags"`
}
