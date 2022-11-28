package shared

import (
	"time"
)

// ServiceTemplate
// The service template detail data.
type ServiceTemplate struct {
	Arn                  string            `json:"arn"`
	CreatedAt            time.Time         `json:"createdAt"`
	Description          *string           `json:"description,omitempty"`
	DisplayName          *string           `json:"displayName,omitempty"`
	EncryptionKey        *string           `json:"encryptionKey,omitempty"`
	LastModifiedAt       time.Time         `json:"lastModifiedAt"`
	Name                 string            `json:"name"`
	PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning,omitempty"`
	RecommendedVersion   *string           `json:"recommendedVersion,omitempty"`
}
