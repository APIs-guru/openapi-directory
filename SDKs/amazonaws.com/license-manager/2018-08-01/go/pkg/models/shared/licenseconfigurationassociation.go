package shared

import (
	"time"
)

type LicenseConfigurationAssociation struct {
	AmiAssociationScope *string           `json:"AmiAssociationScope"`
	AssociationTime     *time.Time        `json:"AssociationTime"`
	ResourceArn         *string           `json:"ResourceArn"`
	ResourceOwnerID     *string           `json:"ResourceOwnerId"`
	ResourceType        *ResourceTypeEnum `json:"ResourceType"`
}
