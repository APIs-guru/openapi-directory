package shared

import (
	"time"
)

type ServerReplicationParameters struct {
	Encrypted                *bool            `json:"encrypted"`
	Frequency                *int64           `json:"frequency"`
	KmsKeyID                 *string          `json:"kmsKeyId"`
	LicenseType              *LicenseTypeEnum `json:"licenseType"`
	NumberOfRecentAmisToKeep *int64           `json:"numberOfRecentAmisToKeep"`
	RunOnce                  *bool            `json:"runOnce"`
	SeedTime                 *time.Time       `json:"seedTime"`
}
