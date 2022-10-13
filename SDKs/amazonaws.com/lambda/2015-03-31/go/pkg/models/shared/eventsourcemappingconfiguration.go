package shared

import (
	"time"
)

type EventSourceMappingConfiguration struct {
	BatchSize                      *int64                      `json:"BatchSize"`
	BisectBatchOnFunctionError     *bool                       `json:"BisectBatchOnFunctionError"`
	DestinationConfig              *DestinationConfig          `json:"DestinationConfig"`
	EventSourceArn                 *string                     `json:"EventSourceArn"`
	FunctionArn                    *string                     `json:"FunctionArn"`
	FunctionResponseTypes          []FunctionResponseTypeEnum  `json:"FunctionResponseTypes"`
	LastModified                   *time.Time                  `json:"LastModified"`
	LastProcessingResult           *string                     `json:"LastProcessingResult"`
	MaximumBatchingWindowInSeconds *int64                      `json:"MaximumBatchingWindowInSeconds"`
	MaximumRecordAgeInSeconds      *int64                      `json:"MaximumRecordAgeInSeconds"`
	MaximumRetryAttempts           *int64                      `json:"MaximumRetryAttempts"`
	ParallelizationFactor          *int64                      `json:"ParallelizationFactor"`
	Queues                         []string                    `json:"Queues"`
	SelfManagedEventSource         *SelfManagedEventSource     `json:"SelfManagedEventSource"`
	SourceAccessConfigurations     []SourceAccessConfiguration `json:"SourceAccessConfigurations"`
	StartingPosition               *EventSourcePositionEnum    `json:"StartingPosition"`
	StartingPositionTimestamp      *time.Time                  `json:"StartingPositionTimestamp"`
	State                          *string                     `json:"State"`
	StateTransitionReason          *string                     `json:"StateTransitionReason"`
	Topics                         []string                    `json:"Topics"`
	TumblingWindowInSeconds        *int64                      `json:"TumblingWindowInSeconds"`
	UUID                           *string                     `json:"UUID"`
}
