package shared

import (
	"time"
)

type DescribeAnomalyDetectorResponse struct {
	AnomalyDetectorArn         *string                       `json:"AnomalyDetectorArn,omitempty"`
	AnomalyDetectorConfig      *AnomalyDetectorConfigSummary `json:"AnomalyDetectorConfig,omitempty"`
	AnomalyDetectorDescription *string                       `json:"AnomalyDetectorDescription,omitempty"`
	AnomalyDetectorName        *string                       `json:"AnomalyDetectorName,omitempty"`
	CreationTime               *time.Time                    `json:"CreationTime,omitempty"`
	FailureReason              *string                       `json:"FailureReason,omitempty"`
	KmsKeyArn                  *string                       `json:"KmsKeyArn,omitempty"`
	LastModificationTime       *time.Time                    `json:"LastModificationTime,omitempty"`
	Status                     *AnomalyDetectorStatusEnum    `json:"Status,omitempty"`
}
