package shared

import (
	"time"
)

type StreamInfo struct {
	CreationTime         *time.Time  `json:"CreationTime,omitempty"`
	DataRetentionInHours *int64      `json:"DataRetentionInHours,omitempty"`
	DeviceName           *string     `json:"DeviceName,omitempty"`
	KmsKeyID             *string     `json:"KmsKeyId,omitempty"`
	MediaType            *string     `json:"MediaType,omitempty"`
	Status               *StatusEnum `json:"Status,omitempty"`
	StreamArn            *string     `json:"StreamARN,omitempty"`
	StreamName           *string     `json:"StreamName,omitempty"`
	Version              *string     `json:"Version,omitempty"`
}
