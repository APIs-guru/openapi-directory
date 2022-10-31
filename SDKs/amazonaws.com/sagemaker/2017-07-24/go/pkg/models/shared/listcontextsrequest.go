package shared

import (
	"time"
)

type ListContextsRequest struct {
	ContextType   *string             `json:"ContextType,omitempty"`
	CreatedAfter  *time.Time          `json:"CreatedAfter,omitempty"`
	CreatedBefore *time.Time          `json:"CreatedBefore,omitempty"`
	MaxResults    *int64              `json:"MaxResults,omitempty"`
	NextToken     *string             `json:"NextToken,omitempty"`
	SortBy        *SortContextsByEnum `json:"SortBy,omitempty"`
	SortOrder     *SortOrderEnum      `json:"SortOrder,omitempty"`
	SourceURI     *string             `json:"SourceUri,omitempty"`
}
