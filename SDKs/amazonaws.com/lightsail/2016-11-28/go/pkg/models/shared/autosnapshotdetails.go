package shared

import (
"time")

type AutoSnapshotDetails struct {
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Date *string `json:"date,omitempty"`
    FromAttachedDisks []AttachedDisk `json:"fromAttachedDisks,omitempty"`
    Status *AutoSnapshotStatusEnum `json:"status,omitempty"`
    
}

