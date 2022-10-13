package shared

import (
	"time"
)

type StreamDescription struct {
	CreationRequestDateTime *time.Time          `json:"CreationRequestDateTime"`
	KeySchema               []KeySchemaElement  `json:"KeySchema"`
	LastEvaluatedShardID    *string             `json:"LastEvaluatedShardId"`
	Shards                  []Shard             `json:"Shards"`
	StreamArn               *string             `json:"StreamArn"`
	StreamLabel             *string             `json:"StreamLabel"`
	StreamStatus            *StreamStatusEnum   `json:"StreamStatus"`
	StreamViewType          *StreamViewTypeEnum `json:"StreamViewType"`
	TableName               *string             `json:"TableName"`
}
