package shared

import (
	"time"
)

type GetShardIteratorInput struct {
	ShardID                string                `json:"ShardId"`
	ShardIteratorType      ShardIteratorTypeEnum `json:"ShardIteratorType"`
	StartingSequenceNumber *string               `json:"StartingSequenceNumber"`
	StreamName             string                `json:"StreamName"`
	Timestamp              *time.Time            `json:"Timestamp"`
}
