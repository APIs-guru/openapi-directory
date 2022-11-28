package shared

import (
	"time"
)

// ProvisioningArtifactSummary
// Summary information about a provisioning artifact (also known as a version) for a product.
type ProvisioningArtifactSummary struct {
	CreatedTime                  *time.Time        `json:"CreatedTime,omitempty"`
	Description                  *string           `json:"Description,omitempty"`
	ID                           *string           `json:"Id,omitempty"`
	Name                         *string           `json:"Name,omitempty"`
	ProvisioningArtifactMetadata map[string]string `json:"ProvisioningArtifactMetadata,omitempty"`
}
