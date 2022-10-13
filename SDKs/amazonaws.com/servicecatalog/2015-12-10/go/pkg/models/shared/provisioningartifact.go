package shared

import (
	"time"
)

type ProvisioningArtifact struct {
	CreatedTime *time.Time                        `json:"CreatedTime"`
	Description *string                           `json:"Description"`
	Guidance    *ProvisioningArtifactGuidanceEnum `json:"Guidance"`
	ID          *string                           `json:"Id"`
	Name        *string                           `json:"Name"`
}
