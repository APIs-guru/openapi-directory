package shared

import (
"time")

type ShardDetail struct {
    Configuration *ShardConfiguration `json:"Configuration,omitempty"`
    Name *string `json:"Name,omitempty"`
    Size *string `json:"Size,omitempty"`
    SnapshotCreationTime *time.Time `json:"SnapshotCreationTime,omitempty"`
    
}

