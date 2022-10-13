package shared

import (
	"time"
)

type ListModelsInput struct {
	CreationTimeAfter  *time.Time        `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time        `json:"CreationTimeBefore"`
	MaxResults         *int64            `json:"MaxResults"`
	NameContains       *string           `json:"NameContains"`
	NextToken          *string           `json:"NextToken"`
	SortBy             *ModelSortKeyEnum `json:"SortBy"`
	SortOrder          *OrderKeyEnum     `json:"SortOrder"`
}
