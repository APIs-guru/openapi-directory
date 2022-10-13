package shared

import (
	"time"
)

type ListImageVersionsRequest struct {
	CreationTimeAfter      *time.Time                 `json:"CreationTimeAfter"`
	CreationTimeBefore     *time.Time                 `json:"CreationTimeBefore"`
	ImageName              string                     `json:"ImageName"`
	LastModifiedTimeAfter  *time.Time                 `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore *time.Time                 `json:"LastModifiedTimeBefore"`
	MaxResults             *int64                     `json:"MaxResults"`
	NextToken              *string                    `json:"NextToken"`
	SortBy                 *ImageVersionSortByEnum    `json:"SortBy"`
	SortOrder              *ImageVersionSortOrderEnum `json:"SortOrder"`
}
