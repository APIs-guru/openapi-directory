package shared

import (
	"time"
)

type ListModelPackageGroupsInput struct {
	CreationTimeAfter  *time.Time                   `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time                   `json:"CreationTimeBefore"`
	MaxResults         *int64                       `json:"MaxResults"`
	NameContains       *string                      `json:"NameContains"`
	NextToken          *string                      `json:"NextToken"`
	SortBy             *ModelPackageGroupSortByEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum               `json:"SortOrder"`
}
