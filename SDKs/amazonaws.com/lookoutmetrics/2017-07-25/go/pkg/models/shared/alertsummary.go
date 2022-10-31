package shared

import (
	"time"
)

type AlertSummary struct {
	AlertArn                  *string           `json:"AlertArn,omitempty"`
	AlertName                 *string           `json:"AlertName,omitempty"`
	AlertSensitivityThreshold *int64            `json:"AlertSensitivityThreshold,omitempty"`
	AlertStatus               *AlertStatusEnum  `json:"AlertStatus,omitempty"`
	AlertType                 *AlertTypeEnum    `json:"AlertType,omitempty"`
	AnomalyDetectorArn        *string           `json:"AnomalyDetectorArn,omitempty"`
	CreationTime              *time.Time        `json:"CreationTime,omitempty"`
	LastModificationTime      *time.Time        `json:"LastModificationTime,omitempty"`
	Tags                      map[string]string `json:"Tags,omitempty"`
}
