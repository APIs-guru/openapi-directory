package shared

import (
	"time"
)

type GetDistributionLatestCacheResetResult struct {
	CreateTime *time.Time `json:"createTime"`
	Status     *string    `json:"status"`
}
