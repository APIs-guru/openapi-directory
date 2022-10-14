package shared

import (
	"time"
)

type ResetDistributionCacheResult struct {
	CreateTime *time.Time `json:"createTime,omitempty"`
	Operation  *Operation `json:"operation,omitempty"`
	Status     *string    `json:"status,omitempty"`
}
