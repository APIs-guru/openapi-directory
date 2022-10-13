package shared

import (
	"time"
)

type ListStudioLifecycleConfigsRequest struct {
	AppTypeEquals      *StudioLifecycleConfigAppTypeEnum `json:"AppTypeEquals"`
	CreationTimeAfter  *time.Time                        `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time                        `json:"CreationTimeBefore"`
	MaxResults         *int64                            `json:"MaxResults"`
	ModifiedTimeAfter  *time.Time                        `json:"ModifiedTimeAfter"`
	ModifiedTimeBefore *time.Time                        `json:"ModifiedTimeBefore"`
	NameContains       *string                           `json:"NameContains"`
	NextToken          *string                           `json:"NextToken"`
	SortBy             *StudioLifecycleConfigSortKeyEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum                    `json:"SortOrder"`
}
