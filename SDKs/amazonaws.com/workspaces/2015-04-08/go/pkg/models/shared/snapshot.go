package shared

import (
	"time"
)

type Snapshot struct {
	SnapshotTime *time.Time `json:"SnapshotTime"`
}
