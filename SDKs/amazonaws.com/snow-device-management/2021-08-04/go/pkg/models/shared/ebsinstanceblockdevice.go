package shared

import (
	"time"
)

// EbsInstanceBlockDevice
// Describes a parameter used to set up an Amazon Elastic Block Store (Amazon EBS) volume in a block device mapping.
type EbsInstanceBlockDevice struct {
	AttachTime          *time.Time            `json:"attachTime,omitempty"`
	DeleteOnTermination *bool                 `json:"deleteOnTermination,omitempty"`
	Status              *AttachmentStatusEnum `json:"status,omitempty"`
	VolumeID            *string               `json:"volumeId,omitempty"`
}
