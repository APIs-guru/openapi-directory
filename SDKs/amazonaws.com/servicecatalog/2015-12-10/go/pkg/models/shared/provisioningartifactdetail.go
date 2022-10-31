package shared

import (
	"time"
)

type ProvisioningArtifactDetail struct {
	Active      *bool                             `json:"Active,omitempty"`
	CreatedTime *time.Time                        `json:"CreatedTime,omitempty"`
	Description *string                           `json:"Description,omitempty"`
	Guidance    *ProvisioningArtifactGuidanceEnum `json:"Guidance,omitempty"`
	ID          *string                           `json:"Id,omitempty"`
	Name        *string                           `json:"Name,omitempty"`
	Type        *ProvisioningArtifactTypeEnum     `json:"Type,omitempty"`
}
