package shared

import (
	"time"
)

type ListTrialComponentsRequest struct {
	CreatedAfter   *time.Time                 `json:"CreatedAfter"`
	CreatedBefore  *time.Time                 `json:"CreatedBefore"`
	ExperimentName *string                    `json:"ExperimentName"`
	MaxResults     *int64                     `json:"MaxResults"`
	NextToken      *string                    `json:"NextToken"`
	SortBy         *SortTrialComponentsByEnum `json:"SortBy"`
	SortOrder      *SortOrderEnum             `json:"SortOrder"`
	SourceArn      *string                    `json:"SourceArn"`
	TrialName      *string                    `json:"TrialName"`
}
