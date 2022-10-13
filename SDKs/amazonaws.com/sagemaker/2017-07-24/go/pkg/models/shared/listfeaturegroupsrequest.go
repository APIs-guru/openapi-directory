package shared

import (
	"time"
)

type ListFeatureGroupsRequest struct {
	CreationTimeAfter        *time.Time                   `json:"CreationTimeAfter"`
	CreationTimeBefore       *time.Time                   `json:"CreationTimeBefore"`
	FeatureGroupStatusEquals *FeatureGroupStatusEnum      `json:"FeatureGroupStatusEquals"`
	MaxResults               *int64                       `json:"MaxResults"`
	NameContains             *string                      `json:"NameContains"`
	NextToken                *string                      `json:"NextToken"`
	OfflineStoreStatusEquals *OfflineStoreStatusValueEnum `json:"OfflineStoreStatusEquals"`
	SortBy                   *FeatureGroupSortByEnum      `json:"SortBy"`
	SortOrder                *FeatureGroupSortOrderEnum   `json:"SortOrder"`
}
