package shared

import (
	"time"
)

// Snapshot
// Describes a snapshot.
type Snapshot struct {
	SnapshotTime *time.Time `json:"SnapshotTime,omitempty"`
}
