package shared

import (
	"time"
)

type SnapshotDetails struct {
	ApplicationVersionID      int64              `json:"ApplicationVersionId"`
	SnapshotCreationTimestamp *time.Time         `json:"SnapshotCreationTimestamp"`
	SnapshotName              string             `json:"SnapshotName"`
	SnapshotStatus            SnapshotStatusEnum `json:"SnapshotStatus"`
}
