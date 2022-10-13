package shared

import (
	"time"
)

type ListPipelinesRequest struct {
	CreatedAfter       *time.Time           `json:"CreatedAfter"`
	CreatedBefore      *time.Time           `json:"CreatedBefore"`
	MaxResults         *int64               `json:"MaxResults"`
	NextToken          *string              `json:"NextToken"`
	PipelineNamePrefix *string              `json:"PipelineNamePrefix"`
	SortBy             *SortPipelinesByEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum       `json:"SortOrder"`
}
