package shared

import (
	"time"
)

type ListFeatureGroupsRequest struct {
	CreationTimeAfter        *time.Time                   `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore       *time.Time                   `json:"CreationTimeBefore,omitempty"`
	FeatureGroupStatusEquals *FeatureGroupStatusEnum      `json:"FeatureGroupStatusEquals,omitempty"`
	MaxResults               *int64                       `json:"MaxResults,omitempty"`
	NameContains             *string                      `json:"NameContains,omitempty"`
	NextToken                *string                      `json:"NextToken,omitempty"`
	OfflineStoreStatusEquals *OfflineStoreStatusValueEnum `json:"OfflineStoreStatusEquals,omitempty"`
	SortBy                   *FeatureGroupSortByEnum      `json:"SortBy,omitempty"`
	SortOrder                *FeatureGroupSortOrderEnum   `json:"SortOrder,omitempty"`
}
