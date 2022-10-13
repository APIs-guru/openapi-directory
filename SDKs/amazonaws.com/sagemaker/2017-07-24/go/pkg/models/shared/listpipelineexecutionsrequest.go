package shared

import (
	"time"
)

type ListPipelineExecutionsRequest struct {
	CreatedAfter  *time.Time                    `json:"CreatedAfter"`
	CreatedBefore *time.Time                    `json:"CreatedBefore"`
	MaxResults    *int64                        `json:"MaxResults"`
	NextToken     *string                       `json:"NextToken"`
	PipelineName  string                        `json:"PipelineName"`
	SortBy        *SortPipelineExecutionsByEnum `json:"SortBy"`
	SortOrder     *SortOrderEnum                `json:"SortOrder"`
}
