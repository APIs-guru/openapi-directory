package shared

import (
	"time"
)

// EventSourceConfiguration
// Describes mapping between an Amazon Kinesis stream and a Lambda function.
type EventSourceConfiguration struct {
	BatchSize    *int64            `json:"BatchSize,omitempty"`
	EventSource  *string           `json:"EventSource,omitempty"`
	FunctionName *string           `json:"FunctionName,omitempty"`
	IsActive     *bool             `json:"IsActive,omitempty"`
	LastModified *time.Time        `json:"LastModified,omitempty"`
	Parameters   map[string]string `json:"Parameters,omitempty"`
	Role         *string           `json:"Role,omitempty"`
	Status       *string           `json:"Status,omitempty"`
	UUID         *string           `json:"UUID,omitempty"`
}
