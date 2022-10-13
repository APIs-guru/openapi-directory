package shared

import (
	"time"
)

type EnvironmentTemplateSummary struct {
	Arn                string            `json:"arn"`
	CreatedAt          time.Time         `json:"createdAt"`
	Description        *string           `json:"description"`
	DisplayName        *string           `json:"displayName"`
	LastModifiedAt     time.Time         `json:"lastModifiedAt"`
	Name               string            `json:"name"`
	Provisioning       *ProvisioningEnum `json:"provisioning"`
	RecommendedVersion *string           `json:"recommendedVersion"`
}
