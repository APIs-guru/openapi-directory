package shared

import (
	"time"
)

type AlertSummary struct {
	AlertArn                  *string           `json:"AlertArn"`
	AlertName                 *string           `json:"AlertName"`
	AlertSensitivityThreshold *int64            `json:"AlertSensitivityThreshold"`
	AlertStatus               *AlertStatusEnum  `json:"AlertStatus"`
	AlertType                 *AlertTypeEnum    `json:"AlertType"`
	AnomalyDetectorArn        *string           `json:"AnomalyDetectorArn"`
	CreationTime              *time.Time        `json:"CreationTime"`
	LastModificationTime      *time.Time        `json:"LastModificationTime"`
	Tags                      map[string]string `json:"Tags"`
}
