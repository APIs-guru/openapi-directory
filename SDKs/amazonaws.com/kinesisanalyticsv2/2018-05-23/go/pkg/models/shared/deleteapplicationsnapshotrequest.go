package shared

import (
	"time"
)

type DeleteApplicationSnapshotRequest struct {
	ApplicationName           string    `json:"ApplicationName"`
	SnapshotCreationTimestamp time.Time `json:"SnapshotCreationTimestamp"`
	SnapshotName              string    `json:"SnapshotName"`
}
