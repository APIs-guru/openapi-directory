package shared

import (
	"time"
)

type ListTrialsRequest struct {
	CreatedAfter       *time.Time        `json:"CreatedAfter"`
	CreatedBefore      *time.Time        `json:"CreatedBefore"`
	ExperimentName     *string           `json:"ExperimentName"`
	MaxResults         *int64            `json:"MaxResults"`
	NextToken          *string           `json:"NextToken"`
	SortBy             *SortTrialsByEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum    `json:"SortOrder"`
	TrialComponentName *string           `json:"TrialComponentName"`
}
