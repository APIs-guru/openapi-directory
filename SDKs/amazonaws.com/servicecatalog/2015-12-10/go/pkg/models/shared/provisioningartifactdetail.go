package shared

import (
	"time"
)

// ProvisioningArtifactDetail
// Information about a provisioning artifact (also known as a version) for a product.
type ProvisioningArtifactDetail struct {
	Active      *bool                             `json:"Active,omitempty"`
	CreatedTime *time.Time                        `json:"CreatedTime,omitempty"`
	Description *string                           `json:"Description,omitempty"`
	Guidance    *ProvisioningArtifactGuidanceEnum `json:"Guidance,omitempty"`
	ID          *string                           `json:"Id,omitempty"`
	Name        *string                           `json:"Name,omitempty"`
	Type        *ProvisioningArtifactTypeEnum     `json:"Type,omitempty"`
}
