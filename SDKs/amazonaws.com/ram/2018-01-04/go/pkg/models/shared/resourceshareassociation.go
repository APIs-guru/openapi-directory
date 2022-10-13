package shared

import (
	"time"
)

type ResourceShareAssociation struct {
	AssociatedEntity  *string                             `json:"associatedEntity"`
	AssociationType   *ResourceShareAssociationTypeEnum   `json:"associationType"`
	CreationTime      *time.Time                          `json:"creationTime"`
	External          *bool                               `json:"external"`
	LastUpdatedTime   *time.Time                          `json:"lastUpdatedTime"`
	ResourceShareArn  *string                             `json:"resourceShareArn"`
	ResourceShareName *string                             `json:"resourceShareName"`
	Status            *ResourceShareAssociationStatusEnum `json:"status"`
	StatusMessage     *string                             `json:"statusMessage"`
}
