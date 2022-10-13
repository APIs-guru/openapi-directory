package shared

import (
	"time"
)

type ServiceTemplateSummary struct {
	Arn                  string            `json:"arn"`
	CreatedAt            time.Time         `json:"createdAt"`
	Description          *string           `json:"description"`
	DisplayName          *string           `json:"displayName"`
	LastModifiedAt       time.Time         `json:"lastModifiedAt"`
	Name                 string            `json:"name"`
	PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning"`
	RecommendedVersion   *string           `json:"recommendedVersion"`
}
