package shared

import (
	"time"
)

type FunctionEventInvokeConfig struct {
	DestinationConfig        *DestinationConfig `json:"DestinationConfig,omitempty"`
	FunctionArn              *string            `json:"FunctionArn,omitempty"`
	LastModified             *time.Time         `json:"LastModified,omitempty"`
	MaximumEventAgeInSeconds *int64             `json:"MaximumEventAgeInSeconds,omitempty"`
	MaximumRetryAttempts     *int64             `json:"MaximumRetryAttempts,omitempty"`
}
