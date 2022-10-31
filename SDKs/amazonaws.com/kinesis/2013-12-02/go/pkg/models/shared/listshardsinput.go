package shared

import (
	"time"
)

type ListShardsInput struct {
	ExclusiveStartShardID   *string      `json:"ExclusiveStartShardId,omitempty"`
	MaxResults              *int64       `json:"MaxResults,omitempty"`
	NextToken               *string      `json:"NextToken,omitempty"`
	ShardFilter             *ShardFilter `json:"ShardFilter,omitempty"`
	StreamCreationTimestamp *time.Time   `json:"StreamCreationTimestamp,omitempty"`
	StreamName              *string      `json:"StreamName,omitempty"`
}
