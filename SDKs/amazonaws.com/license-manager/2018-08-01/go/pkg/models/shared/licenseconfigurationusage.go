package shared

import (
	"time"
)

type LicenseConfigurationUsage struct {
	AssociationTime  *time.Time        `json:"AssociationTime,omitempty"`
	ConsumedLicenses *int64            `json:"ConsumedLicenses,omitempty"`
	ResourceArn      *string           `json:"ResourceArn,omitempty"`
	ResourceOwnerID  *string           `json:"ResourceOwnerId,omitempty"`
	ResourceStatus   *string           `json:"ResourceStatus,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
