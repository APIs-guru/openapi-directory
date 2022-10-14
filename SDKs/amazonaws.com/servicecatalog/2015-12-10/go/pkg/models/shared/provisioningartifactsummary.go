package shared

import (
	"time"
)

type ProvisioningArtifactSummary struct {
	CreatedTime                  *time.Time        `json:"CreatedTime,omitempty"`
	Description                  *string           `json:"Description,omitempty"`
	ID                           *string           `json:"Id,omitempty"`
	Name                         *string           `json:"Name,omitempty"`
	ProvisioningArtifactMetadata map[string]string `json:"ProvisioningArtifactMetadata,omitempty"`
}
