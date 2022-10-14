package shared

import (
	"time"
)

type ShardFilter struct {
	ShardID   *string             `json:"ShardId,omitempty"`
	Timestamp *time.Time          `json:"Timestamp,omitempty"`
	Type      ShardFilterTypeEnum `json:"Type"`
}
