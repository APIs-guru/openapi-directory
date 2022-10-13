package shared

import (
	"time"
)

type EnvironmentTemplate struct {
	Arn                string            `json:"arn"`
	CreatedAt          time.Time         `json:"createdAt"`
	Description        *string           `json:"description"`
	DisplayName        *string           `json:"displayName"`
	EncryptionKey      *string           `json:"encryptionKey"`
	LastModifiedAt     time.Time         `json:"lastModifiedAt"`
	Name               string            `json:"name"`
	Provisioning       *ProvisioningEnum `json:"provisioning"`
	RecommendedVersion *string           `json:"recommendedVersion"`
}
