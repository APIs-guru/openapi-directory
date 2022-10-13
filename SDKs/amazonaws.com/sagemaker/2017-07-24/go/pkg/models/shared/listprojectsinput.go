package shared

import (
	"time"
)

type ListProjectsInput struct {
	CreationTimeAfter  *time.Time            `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time            `json:"CreationTimeBefore"`
	MaxResults         *int64                `json:"MaxResults"`
	NameContains       *string               `json:"NameContains"`
	NextToken          *string               `json:"NextToken"`
	SortBy             *ProjectSortByEnum    `json:"SortBy"`
	SortOrder          *ProjectSortOrderEnum `json:"SortOrder"`
}
