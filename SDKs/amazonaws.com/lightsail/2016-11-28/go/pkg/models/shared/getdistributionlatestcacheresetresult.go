package shared

import (
	"time"
)

type GetDistributionLatestCacheResetResult struct {
	CreateTime *time.Time `json:"createTime,omitempty"`
	Status     *string    `json:"status,omitempty"`
}
