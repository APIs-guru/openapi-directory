package shared

import (
	"time"
)

type OpsItemRelatedItemSummary struct {
	AssociationID    *string          `json:"AssociationId"`
	AssociationType  *string          `json:"AssociationType"`
	CreatedBy        *OpsItemIdentity `json:"CreatedBy"`
	CreatedTime      *time.Time       `json:"CreatedTime"`
	LastModifiedBy   *OpsItemIdentity `json:"LastModifiedBy"`
	LastModifiedTime *time.Time       `json:"LastModifiedTime"`
	OpsItemID        *string          `json:"OpsItemId"`
	ResourceType     *string          `json:"ResourceType"`
	ResourceURI      *string          `json:"ResourceUri"`
}
