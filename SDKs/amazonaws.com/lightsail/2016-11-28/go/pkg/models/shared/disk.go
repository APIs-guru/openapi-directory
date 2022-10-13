package shared

import (
	"time"
)

type Disk struct {
	AddOns          []AddOn           `json:"addOns"`
	Arn             *string           `json:"arn"`
	AttachedTo      *string           `json:"attachedTo"`
	AttachmentState *string           `json:"attachmentState"`
	CreatedAt       *time.Time        `json:"createdAt"`
	GbInUse         *int64            `json:"gbInUse"`
	Iops            *int64            `json:"iops"`
	IsAttached      *bool             `json:"isAttached"`
	IsSystemDisk    *bool             `json:"isSystemDisk"`
	Location        *ResourceLocation `json:"location"`
	Name            *string           `json:"name"`
	Path            *string           `json:"path"`
	ResourceType    *ResourceTypeEnum `json:"resourceType"`
	SizeInGb        *int64            `json:"sizeInGb"`
	State           *DiskStateEnum    `json:"state"`
	SupportCode     *string           `json:"supportCode"`
	Tags            []Tag             `json:"tags"`
}
