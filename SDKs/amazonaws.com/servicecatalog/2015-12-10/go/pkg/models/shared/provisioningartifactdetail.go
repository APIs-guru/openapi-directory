package shared

import (
	"time"
)

type ProvisioningArtifactDetail struct {
	Active      *bool                             `json:"Active"`
	CreatedTime *time.Time                        `json:"CreatedTime"`
	Description *string                           `json:"Description"`
	Guidance    *ProvisioningArtifactGuidanceEnum `json:"Guidance"`
	ID          *string                           `json:"Id"`
	Name        *string                           `json:"Name"`
	Type        *ProvisioningArtifactTypeEnum     `json:"Type"`
}
