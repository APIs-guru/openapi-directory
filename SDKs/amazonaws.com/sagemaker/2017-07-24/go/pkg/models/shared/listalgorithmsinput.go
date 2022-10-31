package shared

import (
	"time"
)

type ListAlgorithmsInput struct {
	CreationTimeAfter  *time.Time           `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore *time.Time           `json:"CreationTimeBefore,omitempty"`
	MaxResults         *int64               `json:"MaxResults,omitempty"`
	NameContains       *string              `json:"NameContains,omitempty"`
	NextToken          *string              `json:"NextToken,omitempty"`
	SortBy             *AlgorithmSortByEnum `json:"SortBy,omitempty"`
	SortOrder          *SortOrderEnum       `json:"SortOrder,omitempty"`
}
