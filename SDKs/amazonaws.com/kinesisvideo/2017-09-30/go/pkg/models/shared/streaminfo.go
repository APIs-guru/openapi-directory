package shared

import (
	"time"
)

type StreamInfo struct {
	CreationTime         *time.Time  `json:"CreationTime"`
	DataRetentionInHours *int64      `json:"DataRetentionInHours"`
	DeviceName           *string     `json:"DeviceName"`
	KmsKeyID             *string     `json:"KmsKeyId"`
	MediaType            *string     `json:"MediaType"`
	Status               *StatusEnum `json:"Status"`
	StreamArn            *string     `json:"StreamARN"`
	StreamName           *string     `json:"StreamName"`
	Version              *string     `json:"Version"`
}
