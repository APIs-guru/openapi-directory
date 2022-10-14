package shared

import (
	"time"
)

type StreamDescription struct {
	CreationRequestDateTime *time.Time          `json:"CreationRequestDateTime,omitempty"`
	KeySchema               []KeySchemaElement  `json:"KeySchema,omitempty"`
	LastEvaluatedShardID    *string             `json:"LastEvaluatedShardId,omitempty"`
	Shards                  []Shard             `json:"Shards,omitempty"`
	StreamArn               *string             `json:"StreamArn,omitempty"`
	StreamLabel             *string             `json:"StreamLabel,omitempty"`
	StreamStatus            *StreamStatusEnum   `json:"StreamStatus,omitempty"`
	StreamViewType          *StreamViewTypeEnum `json:"StreamViewType,omitempty"`
	TableName               *string             `json:"TableName,omitempty"`
}
