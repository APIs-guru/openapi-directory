package shared

import (
	"time"
)

type ListActionsRequest struct {
	ActionType    *string            `json:"ActionType"`
	CreatedAfter  *time.Time         `json:"CreatedAfter"`
	CreatedBefore *time.Time         `json:"CreatedBefore"`
	MaxResults    *int64             `json:"MaxResults"`
	NextToken     *string            `json:"NextToken"`
	SortBy        *SortActionsByEnum `json:"SortBy"`
	SortOrder     *SortOrderEnum     `json:"SortOrder"`
	SourceURI     *string            `json:"SourceUri"`
}
