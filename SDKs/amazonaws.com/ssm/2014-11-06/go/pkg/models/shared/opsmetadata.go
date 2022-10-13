package shared

import (
	"time"
)

type OpsMetadata struct {
	CreationDate     *time.Time `json:"CreationDate"`
	LastModifiedDate *time.Time `json:"LastModifiedDate"`
	LastModifiedUser *string    `json:"LastModifiedUser"`
	OpsMetadataArn   *string    `json:"OpsMetadataArn"`
	ResourceID       *string    `json:"ResourceId"`
}
