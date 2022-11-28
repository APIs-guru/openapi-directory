package shared

import (
	"time"
)

// GetShardIteratorInput
// Represents the input for <code>GetShardIterator</code>.
type GetShardIteratorInput struct {
	ShardID                string                `json:"ShardId"`
	ShardIteratorType      ShardIteratorTypeEnum `json:"ShardIteratorType"`
	StartingSequenceNumber *string               `json:"StartingSequenceNumber,omitempty"`
	StreamName             string                `json:"StreamName"`
	Timestamp              *time.Time            `json:"Timestamp,omitempty"`
}
