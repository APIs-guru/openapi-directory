package shared

import (
	"time"
)

type ListExperimentsRequest struct {
	CreatedAfter  *time.Time             `json:"CreatedAfter"`
	CreatedBefore *time.Time             `json:"CreatedBefore"`
	MaxResults    *int64                 `json:"MaxResults"`
	NextToken     *string                `json:"NextToken"`
	SortBy        *SortExperimentsByEnum `json:"SortBy"`
	SortOrder     *SortOrderEnum         `json:"SortOrder"`
}
