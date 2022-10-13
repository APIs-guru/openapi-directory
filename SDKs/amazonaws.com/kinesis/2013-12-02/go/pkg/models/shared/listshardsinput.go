package shared

import (
	"time"
)

type ListShardsInput struct {
	ExclusiveStartShardID   *string      `json:"ExclusiveStartShardId"`
	MaxResults              *int64       `json:"MaxResults"`
	NextToken               *string      `json:"NextToken"`
	ShardFilter             *ShardFilter `json:"ShardFilter"`
	StreamCreationTimestamp *time.Time   `json:"StreamCreationTimestamp"`
	StreamName              *string      `json:"StreamName"`
}
