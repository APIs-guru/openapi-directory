package shared

import (
	"time"
)

type EnvironmentTemplateSummary struct {
	Arn                string            `json:"arn"`
	CreatedAt          time.Time         `json:"createdAt"`
	Description        *string           `json:"description,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	LastModifiedAt     time.Time         `json:"lastModifiedAt"`
	Name               string            `json:"name"`
	Provisioning       *ProvisioningEnum `json:"provisioning,omitempty"`
	RecommendedVersion *string           `json:"recommendedVersion,omitempty"`
}
