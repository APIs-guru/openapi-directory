package shared

import (
	"time"
)

type CreateReplicationJobRequest struct {
	Description              *string          `json:"description"`
	Encrypted                *bool            `json:"encrypted"`
	Frequency                *int64           `json:"frequency"`
	KmsKeyID                 *string          `json:"kmsKeyId"`
	LicenseType              *LicenseTypeEnum `json:"licenseType"`
	NumberOfRecentAmisToKeep *int64           `json:"numberOfRecentAmisToKeep"`
	RoleName                 *string          `json:"roleName"`
	RunOnce                  *bool            `json:"runOnce"`
	SeedReplicationTime      time.Time        `json:"seedReplicationTime"`
	ServerID                 string           `json:"serverId"`
}
