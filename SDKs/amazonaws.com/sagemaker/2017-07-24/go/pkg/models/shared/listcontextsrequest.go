package shared

import (
	"time"
)

type ListContextsRequest struct {
	ContextType   *string             `json:"ContextType"`
	CreatedAfter  *time.Time          `json:"CreatedAfter"`
	CreatedBefore *time.Time          `json:"CreatedBefore"`
	MaxResults    *int64              `json:"MaxResults"`
	NextToken     *string             `json:"NextToken"`
	SortBy        *SortContextsByEnum `json:"SortBy"`
	SortOrder     *SortOrderEnum      `json:"SortOrder"`
	SourceURI     *string             `json:"SourceUri"`
}
