package shared

import (
	"time"
)

type Alert struct {
	Action                    *Action          `json:"Action"`
	AlertArn                  *string          `json:"AlertArn"`
	AlertDescription          *string          `json:"AlertDescription"`
	AlertName                 *string          `json:"AlertName"`
	AlertSensitivityThreshold *int64           `json:"AlertSensitivityThreshold"`
	AlertStatus               *AlertStatusEnum `json:"AlertStatus"`
	AlertType                 *AlertTypeEnum   `json:"AlertType"`
	AnomalyDetectorArn        *string          `json:"AnomalyDetectorArn"`
	CreationTime              *time.Time       `json:"CreationTime"`
	LastModificationTime      *time.Time       `json:"LastModificationTime"`
}
