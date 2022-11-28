package shared

import (
	"time"
)

// InstanceSnapshot
// Describes an instance snapshot.
type InstanceSnapshot struct {
	Arn                *string                    `json:"arn,omitempty"`
	CreatedAt          *time.Time                 `json:"createdAt,omitempty"`
	FromAttachedDisks  []Disk                     `json:"fromAttachedDisks,omitempty"`
	FromBlueprintID    *string                    `json:"fromBlueprintId,omitempty"`
	FromBundleID       *string                    `json:"fromBundleId,omitempty"`
	FromInstanceArn    *string                    `json:"fromInstanceArn,omitempty"`
	FromInstanceName   *string                    `json:"fromInstanceName,omitempty"`
	IsFromAutoSnapshot *bool                      `json:"isFromAutoSnapshot,omitempty"`
	Location           *ResourceLocation          `json:"location,omitempty"`
	Name               *string                    `json:"name,omitempty"`
	Progress           *string                    `json:"progress,omitempty"`
	ResourceType       *ResourceTypeEnum          `json:"resourceType,omitempty"`
	SizeInGb           *int64                     `json:"sizeInGb,omitempty"`
	State              *InstanceSnapshotStateEnum `json:"state,omitempty"`
	SupportCode        *string                    `json:"supportCode,omitempty"`
	Tags               []Tag                      `json:"tags,omitempty"`
}
