package shared

import (
"time")

type ListingResp struct {
    BrandName *string `json:"brandName,omitempty"`
    CacheTimeLimit *int64 `json:"cacheTimeLimit,omitempty"`
    Condition *string `json:"condition,omitempty"`
    Data ListingRespPaginated `json:"data"`
    EndDate *time.Time `json:"endDate,omitempty"`
    ModelName *string `json:"modelName,omitempty"`
    Msg *string `json:"msg,omitempty"`
    RegionName *string `json:"regionName,omitempty"`
    StartDate *time.Time `json:"startDate,omitempty"`
    
}

