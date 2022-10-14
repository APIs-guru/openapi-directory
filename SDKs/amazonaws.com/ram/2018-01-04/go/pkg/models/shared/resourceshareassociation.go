package shared

import (
	"time"
)

type ResourceShareAssociation struct {
	AssociatedEntity  *string                             `json:"associatedEntity,omitempty"`
	AssociationType   *ResourceShareAssociationTypeEnum   `json:"associationType,omitempty"`
	CreationTime      *time.Time                          `json:"creationTime,omitempty"`
	External          *bool                               `json:"external,omitempty"`
	LastUpdatedTime   *time.Time                          `json:"lastUpdatedTime,omitempty"`
	ResourceShareArn  *string                             `json:"resourceShareArn,omitempty"`
	ResourceShareName *string                             `json:"resourceShareName,omitempty"`
	Status            *ResourceShareAssociationStatusEnum `json:"status,omitempty"`
	StatusMessage     *string                             `json:"statusMessage,omitempty"`
}
