package shared

import (
	"time"
)

type ListAlgorithmsInput struct {
	CreationTimeAfter  *time.Time           `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time           `json:"CreationTimeBefore"`
	MaxResults         *int64               `json:"MaxResults"`
	NameContains       *string              `json:"NameContains"`
	NextToken          *string              `json:"NextToken"`
	SortBy             *AlgorithmSortByEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum       `json:"SortOrder"`
}
