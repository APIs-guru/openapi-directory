package shared

import (
	"time"
)

type ServiceTemplate struct {
	Arn                  string            `json:"arn"`
	CreatedAt            time.Time         `json:"createdAt"`
	Description          *string           `json:"description"`
	DisplayName          *string           `json:"displayName"`
	EncryptionKey        *string           `json:"encryptionKey"`
	LastModifiedAt       time.Time         `json:"lastModifiedAt"`
	Name                 string            `json:"name"`
	PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning"`
	RecommendedVersion   *string           `json:"recommendedVersion"`
}
