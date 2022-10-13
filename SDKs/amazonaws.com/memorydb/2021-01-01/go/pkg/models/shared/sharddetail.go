package shared

import (
	"time"
)

type ShardDetail struct {
	Configuration        *ShardConfiguration `json:"Configuration"`
	Name                 *string             `json:"Name"`
	Size                 *string             `json:"Size"`
	SnapshotCreationTime *time.Time          `json:"SnapshotCreationTime"`
}
