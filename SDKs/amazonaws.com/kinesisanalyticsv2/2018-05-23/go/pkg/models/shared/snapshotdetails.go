package shared

import (
	"time"
)

// SnapshotDetails
// Provides details about a snapshot of application state.
type SnapshotDetails struct {
	ApplicationVersionID      int64              `json:"ApplicationVersionId"`
	SnapshotCreationTimestamp *time.Time         `json:"SnapshotCreationTimestamp,omitempty"`
	SnapshotName              string             `json:"SnapshotName"`
	SnapshotStatus            SnapshotStatusEnum `json:"SnapshotStatus"`
}
