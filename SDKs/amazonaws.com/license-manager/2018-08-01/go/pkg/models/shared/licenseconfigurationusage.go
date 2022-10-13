package shared

import (
	"time"
)

type LicenseConfigurationUsage struct {
	AssociationTime  *time.Time        `json:"AssociationTime"`
	ConsumedLicenses *int64            `json:"ConsumedLicenses"`
	ResourceArn      *string           `json:"ResourceArn"`
	ResourceOwnerID  *string           `json:"ResourceOwnerId"`
	ResourceStatus   *string           `json:"ResourceStatus"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType"`
}
