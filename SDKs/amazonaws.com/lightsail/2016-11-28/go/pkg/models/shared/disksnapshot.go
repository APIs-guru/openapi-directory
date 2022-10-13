package shared

import (
	"time"
)

type DiskSnapshot struct {
	Arn                *string                `json:"arn"`
	CreatedAt          *time.Time             `json:"createdAt"`
	FromDiskArn        *string                `json:"fromDiskArn"`
	FromDiskName       *string                `json:"fromDiskName"`
	FromInstanceArn    *string                `json:"fromInstanceArn"`
	FromInstanceName   *string                `json:"fromInstanceName"`
	IsFromAutoSnapshot *bool                  `json:"isFromAutoSnapshot"`
	Location           *ResourceLocation      `json:"location"`
	Name               *string                `json:"name"`
	Progress           *string                `json:"progress"`
	ResourceType       *ResourceTypeEnum      `json:"resourceType"`
	SizeInGb           *int64                 `json:"sizeInGb"`
	State              *DiskSnapshotStateEnum `json:"state"`
	SupportCode        *string                `json:"supportCode"`
	Tags               []Tag                  `json:"tags"`
}
