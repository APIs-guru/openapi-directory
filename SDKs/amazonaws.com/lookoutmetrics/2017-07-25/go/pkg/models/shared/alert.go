package shared

import (
	"time"
)

// Alert
// A configuration for Amazon SNS-integrated notifications.
type Alert struct {
	Action                    *Action          `json:"Action,omitempty"`
	AlertArn                  *string          `json:"AlertArn,omitempty"`
	AlertDescription          *string          `json:"AlertDescription,omitempty"`
	AlertName                 *string          `json:"AlertName,omitempty"`
	AlertSensitivityThreshold *int64           `json:"AlertSensitivityThreshold,omitempty"`
	AlertStatus               *AlertStatusEnum `json:"AlertStatus,omitempty"`
	AlertType                 *AlertTypeEnum   `json:"AlertType,omitempty"`
	AnomalyDetectorArn        *string          `json:"AnomalyDetectorArn,omitempty"`
	CreationTime              *time.Time       `json:"CreationTime,omitempty"`
	LastModificationTime      *time.Time       `json:"LastModificationTime,omitempty"`
}
