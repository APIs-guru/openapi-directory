package shared

import (
	"time"
)

type ResetDistributionCacheResult struct {
	CreateTime *time.Time `json:"createTime"`
	Operation  *Operation `json:"operation"`
	Status     *string    `json:"status"`
}
