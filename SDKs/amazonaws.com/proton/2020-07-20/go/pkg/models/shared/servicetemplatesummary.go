package shared

import (
	"time"
)

// ServiceTemplateSummary
// The service template summary data.
type ServiceTemplateSummary struct {
	Arn                  string            `json:"arn"`
	CreatedAt            time.Time         `json:"createdAt"`
	Description          *string           `json:"description,omitempty"`
	DisplayName          *string           `json:"displayName,omitempty"`
	LastModifiedAt       time.Time         `json:"lastModifiedAt"`
	Name                 string            `json:"name"`
	PipelineProvisioning *ProvisioningEnum `json:"pipelineProvisioning,omitempty"`
	RecommendedVersion   *string           `json:"recommendedVersion,omitempty"`
}
