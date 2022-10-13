package shared

import (
	"time"
)

type RegionInfo struct {
	SseKmsKeyID          *string          `json:"sseKmsKeyId"`
	Status               RegionStatusEnum `json:"status"`
	StatusMessage        *string          `json:"statusMessage"`
	StatusUpdateDateTime time.Time        `json:"statusUpdateDateTime"`
}
