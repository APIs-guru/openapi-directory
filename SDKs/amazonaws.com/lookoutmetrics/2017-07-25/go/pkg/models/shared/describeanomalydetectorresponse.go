package shared

import (
	"time"
)

type DescribeAnomalyDetectorResponse struct {
	AnomalyDetectorArn         *string                       `json:"AnomalyDetectorArn"`
	AnomalyDetectorConfig      *AnomalyDetectorConfigSummary `json:"AnomalyDetectorConfig"`
	AnomalyDetectorDescription *string                       `json:"AnomalyDetectorDescription"`
	AnomalyDetectorName        *string                       `json:"AnomalyDetectorName"`
	CreationTime               *time.Time                    `json:"CreationTime"`
	FailureReason              *string                       `json:"FailureReason"`
	KmsKeyArn                  *string                       `json:"KmsKeyArn"`
	LastModificationTime       *time.Time                    `json:"LastModificationTime"`
	Status                     *AnomalyDetectorStatusEnum    `json:"Status"`
}
