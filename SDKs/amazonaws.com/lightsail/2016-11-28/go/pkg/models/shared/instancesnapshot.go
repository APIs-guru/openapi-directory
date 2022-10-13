package shared

import (
	"time"
)

type InstanceSnapshot struct {
	Arn                *string                    `json:"arn"`
	CreatedAt          *time.Time                 `json:"createdAt"`
	FromAttachedDisks  []Disk                     `json:"fromAttachedDisks"`
	FromBlueprintID    *string                    `json:"fromBlueprintId"`
	FromBundleID       *string                    `json:"fromBundleId"`
	FromInstanceArn    *string                    `json:"fromInstanceArn"`
	FromInstanceName   *string                    `json:"fromInstanceName"`
	IsFromAutoSnapshot *bool                      `json:"isFromAutoSnapshot"`
	Location           *ResourceLocation          `json:"location"`
	Name               *string                    `json:"name"`
	Progress           *string                    `json:"progress"`
	ResourceType       *ResourceTypeEnum          `json:"resourceType"`
	SizeInGb           *int64                     `json:"sizeInGb"`
	State              *InstanceSnapshotStateEnum `json:"state"`
	SupportCode        *string                    `json:"supportCode"`
	Tags               []Tag                      `json:"tags"`
}
