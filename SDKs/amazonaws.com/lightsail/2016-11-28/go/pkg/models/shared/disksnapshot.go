package shared

import (
	"time"
)

type DiskSnapshot struct {
	Arn                *string                `json:"arn,omitempty"`
	CreatedAt          *time.Time             `json:"createdAt,omitempty"`
	FromDiskArn        *string                `json:"fromDiskArn,omitempty"`
	FromDiskName       *string                `json:"fromDiskName,omitempty"`
	FromInstanceArn    *string                `json:"fromInstanceArn,omitempty"`
	FromInstanceName   *string                `json:"fromInstanceName,omitempty"`
	IsFromAutoSnapshot *bool                  `json:"isFromAutoSnapshot,omitempty"`
	Location           *ResourceLocation      `json:"location,omitempty"`
	Name               *string                `json:"name,omitempty"`
	Progress           *string                `json:"progress,omitempty"`
	ResourceType       *ResourceTypeEnum      `json:"resourceType,omitempty"`
	SizeInGb           *int64                 `json:"sizeInGb,omitempty"`
	State              *DiskSnapshotStateEnum `json:"state,omitempty"`
	SupportCode        *string                `json:"supportCode,omitempty"`
	Tags               []Tag                  `json:"tags,omitempty"`
}
