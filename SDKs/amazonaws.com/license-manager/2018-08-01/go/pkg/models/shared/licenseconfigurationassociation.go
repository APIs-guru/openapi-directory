package shared

import (
	"time"
)

type LicenseConfigurationAssociation struct {
	AmiAssociationScope *string           `json:"AmiAssociationScope,omitempty"`
	AssociationTime     *time.Time        `json:"AssociationTime,omitempty"`
	ResourceArn         *string           `json:"ResourceArn,omitempty"`
	ResourceOwnerID     *string           `json:"ResourceOwnerId,omitempty"`
	ResourceType        *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
