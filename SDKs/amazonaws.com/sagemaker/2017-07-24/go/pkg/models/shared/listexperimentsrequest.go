package shared

import (
	"time"
)

type ListExperimentsRequest struct {
	CreatedAfter  *time.Time             `json:"CreatedAfter,omitempty"`
	CreatedBefore *time.Time             `json:"CreatedBefore,omitempty"`
	MaxResults    *int64                 `json:"MaxResults,omitempty"`
	NextToken     *string                `json:"NextToken,omitempty"`
	SortBy        *SortExperimentsByEnum `json:"SortBy,omitempty"`
	SortOrder     *SortOrderEnum         `json:"SortOrder,omitempty"`
}
