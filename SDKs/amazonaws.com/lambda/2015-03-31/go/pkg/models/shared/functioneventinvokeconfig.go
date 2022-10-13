package shared

import (
	"time"
)

type FunctionEventInvokeConfig struct {
	DestinationConfig        *DestinationConfig `json:"DestinationConfig"`
	FunctionArn              *string            `json:"FunctionArn"`
	LastModified             *time.Time         `json:"LastModified"`
	MaximumEventAgeInSeconds *int64             `json:"MaximumEventAgeInSeconds"`
	MaximumRetryAttempts     *int64             `json:"MaximumRetryAttempts"`
}
