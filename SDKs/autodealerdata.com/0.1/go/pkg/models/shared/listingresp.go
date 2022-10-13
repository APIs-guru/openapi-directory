package shared

import (
	"time"
)

type ListingResp struct {
	BrandName      *string              `json:"brandName"`
	CacheTimeLimit *int64               `json:"cacheTimeLimit"`
	Condition      *string              `json:"condition"`
	Data           ListingRespPaginated `json:"data"`
	EndDate        *time.Time           `json:"endDate"`
	ModelName      *string              `json:"modelName"`
	Msg            *string              `json:"msg"`
	RegionName     *string              `json:"regionName"`
	StartDate      *time.Time           `json:"startDate"`
}
