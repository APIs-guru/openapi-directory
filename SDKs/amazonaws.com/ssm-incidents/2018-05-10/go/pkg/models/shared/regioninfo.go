package shared

import (
	"time"
)

// RegionInfo
// Information about a Region in your replication set.
type RegionInfo struct {
	SseKmsKeyID          *string          `json:"sseKmsKeyId,omitempty"`
	Status               RegionStatusEnum `json:"status"`
	StatusMessage        *string          `json:"statusMessage,omitempty"`
	StatusUpdateDateTime time.Time        `json:"statusUpdateDateTime"`
}
