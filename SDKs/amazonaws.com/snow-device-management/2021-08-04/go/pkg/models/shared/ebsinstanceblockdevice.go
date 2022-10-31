package shared

import (
"time")

type EbsInstanceBlockDevice struct {
    AttachTime *time.Time `json:"attachTime,omitempty"`
    DeleteOnTermination *bool `json:"deleteOnTermination,omitempty"`
    Status *AttachmentStatusEnum `json:"status,omitempty"`
    VolumeID *string `json:"volumeId,omitempty"`
    
}

