package shared

import (
	"time"
)

type AutoSnapshotDetails struct {
	CreatedAt         *time.Time              `json:"createdAt"`
	Date              *string                 `json:"date"`
	FromAttachedDisks []AttachedDisk          `json:"fromAttachedDisks"`
	Status            *AutoSnapshotStatusEnum `json:"status"`
}
