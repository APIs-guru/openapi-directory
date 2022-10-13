package shared

import (
	"time"
)

type ProvisioningArtifactSummary struct {
	CreatedTime                  *time.Time        `json:"CreatedTime"`
	Description                  *string           `json:"Description"`
	ID                           *string           `json:"Id"`
	Name                         *string           `json:"Name"`
	ProvisioningArtifactMetadata map[string]string `json:"ProvisioningArtifactMetadata"`
}
