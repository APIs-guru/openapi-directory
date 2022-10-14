package shared

import (
	"time"
)

type ListPipelinesRequest struct {
	CreatedAfter       *time.Time           `json:"CreatedAfter,omitempty"`
	CreatedBefore      *time.Time           `json:"CreatedBefore,omitempty"`
	MaxResults         *int64               `json:"MaxResults,omitempty"`
	NextToken          *string              `json:"NextToken,omitempty"`
	PipelineNamePrefix *string              `json:"PipelineNamePrefix,omitempty"`
	SortBy             *SortPipelinesByEnum `json:"SortBy,omitempty"`
	SortOrder          *SortOrderEnum       `json:"SortOrder,omitempty"`
}
