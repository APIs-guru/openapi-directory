package shared

import (
	"time"
)

type RegionInfo struct {
	SseKmsKeyID          *string          `json:"sseKmsKeyId,omitempty"`
	Status               RegionStatusEnum `json:"status"`
	StatusMessage        *string          `json:"statusMessage,omitempty"`
	StatusUpdateDateTime time.Time        `json:"statusUpdateDateTime"`
}
