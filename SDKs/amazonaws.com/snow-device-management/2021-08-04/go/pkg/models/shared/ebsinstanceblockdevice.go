package shared

import (
	"time"
)

type EbsInstanceBlockDevice struct {
	AttachTime          *time.Time            `json:"attachTime"`
	DeleteOnTermination *bool                 `json:"deleteOnTermination"`
	Status              *AttachmentStatusEnum `json:"status"`
	VolumeID            *string               `json:"volumeId"`
}
