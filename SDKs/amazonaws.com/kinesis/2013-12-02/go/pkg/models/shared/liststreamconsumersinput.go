package shared

import (
	"time"
)

type ListStreamConsumersInput struct {
	MaxResults              *int64     `json:"MaxResults"`
	NextToken               *string    `json:"NextToken"`
	StreamArn               string     `json:"StreamARN"`
	StreamCreationTimestamp *time.Time `json:"StreamCreationTimestamp"`
}
