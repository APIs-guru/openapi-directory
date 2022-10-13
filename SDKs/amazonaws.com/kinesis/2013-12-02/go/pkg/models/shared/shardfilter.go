package shared

import (
	"time"
)

type ShardFilter struct {
	ShardID   *string             `json:"ShardId"`
	Timestamp *time.Time          `json:"Timestamp"`
	Type      ShardFilterTypeEnum `json:"Type"`
}
