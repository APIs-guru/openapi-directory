package shared

import (
	"time"
)

type EventSourceMappingConfiguration struct {
	BatchSize                      *int64                      `json:"BatchSize,omitempty"`
	BisectBatchOnFunctionError     *bool                       `json:"BisectBatchOnFunctionError,omitempty"`
	DestinationConfig              *DestinationConfig          `json:"DestinationConfig,omitempty"`
	EventSourceArn                 *string                     `json:"EventSourceArn,omitempty"`
	FunctionArn                    *string                     `json:"FunctionArn,omitempty"`
	FunctionResponseTypes          []FunctionResponseTypeEnum  `json:"FunctionResponseTypes,omitempty"`
	LastModified                   *time.Time                  `json:"LastModified,omitempty"`
	LastProcessingResult           *string                     `json:"LastProcessingResult,omitempty"`
	MaximumBatchingWindowInSeconds *int64                      `json:"MaximumBatchingWindowInSeconds,omitempty"`
	MaximumRecordAgeInSeconds      *int64                      `json:"MaximumRecordAgeInSeconds,omitempty"`
	MaximumRetryAttempts           *int64                      `json:"MaximumRetryAttempts,omitempty"`
	ParallelizationFactor          *int64                      `json:"ParallelizationFactor,omitempty"`
	Queues                         []string                    `json:"Queues,omitempty"`
	SelfManagedEventSource         *SelfManagedEventSource     `json:"SelfManagedEventSource,omitempty"`
	SourceAccessConfigurations     []SourceAccessConfiguration `json:"SourceAccessConfigurations,omitempty"`
	StartingPosition               *EventSourcePositionEnum    `json:"StartingPosition,omitempty"`
	StartingPositionTimestamp      *time.Time                  `json:"StartingPositionTimestamp,omitempty"`
	State                          *string                     `json:"State,omitempty"`
	StateTransitionReason          *string                     `json:"StateTransitionReason,omitempty"`
	Topics                         []string                    `json:"Topics,omitempty"`
	TumblingWindowInSeconds        *int64                      `json:"TumblingWindowInSeconds,omitempty"`
	UUID                           *string                     `json:"UUID,omitempty"`
}
