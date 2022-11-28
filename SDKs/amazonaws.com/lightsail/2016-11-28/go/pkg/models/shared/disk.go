package shared

import (
	"time"
)

// Disk
// Describes a block storage disk.
type Disk struct {
	AddOns          []AddOn           `json:"addOns,omitempty"`
	Arn             *string           `json:"arn,omitempty"`
	AttachedTo      *string           `json:"attachedTo,omitempty"`
	AttachmentState *string           `json:"attachmentState,omitempty"`
	CreatedAt       *time.Time        `json:"createdAt,omitempty"`
	GbInUse         *int64            `json:"gbInUse,omitempty"`
	Iops            *int64            `json:"iops,omitempty"`
	IsAttached      *bool             `json:"isAttached,omitempty"`
	IsSystemDisk    *bool             `json:"isSystemDisk,omitempty"`
	Location        *ResourceLocation `json:"location,omitempty"`
	Name            *string           `json:"name,omitempty"`
	Path            *string           `json:"path,omitempty"`
	ResourceType    *ResourceTypeEnum `json:"resourceType,omitempty"`
	SizeInGb        *int64            `json:"sizeInGb,omitempty"`
	State           *DiskStateEnum    `json:"state,omitempty"`
	SupportCode     *string           `json:"supportCode,omitempty"`
	Tags            []Tag             `json:"tags,omitempty"`
}
