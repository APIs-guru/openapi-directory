package shared

import (
	"time"
)

// OpsMetadata
// Operational metadata for an application in Application Manager.
type OpsMetadata struct {
	CreationDate     *time.Time `json:"CreationDate,omitempty"`
	LastModifiedDate *time.Time `json:"LastModifiedDate,omitempty"`
	LastModifiedUser *string    `json:"LastModifiedUser,omitempty"`
	OpsMetadataArn   *string    `json:"OpsMetadataArn,omitempty"`
	ResourceID       *string    `json:"ResourceId,omitempty"`
}
