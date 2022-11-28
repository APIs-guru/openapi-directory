package shared

import (
	"time"
)

// ShardDetail
// Provides details of a shard in a snapshot
type ShardDetail struct {
	Configuration        *ShardConfiguration `json:"Configuration,omitempty"`
	Name                 *string             `json:"Name,omitempty"`
	Size                 *string             `json:"Size,omitempty"`
	SnapshotCreationTime *time.Time          `json:"SnapshotCreationTime,omitempty"`
}
