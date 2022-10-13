package shared

import (
	"time"
)

type ListModelQualityJobDefinitionsRequest struct {
	CreationTimeAfter  *time.Time                          `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time                          `json:"CreationTimeBefore"`
	EndpointName       *string                             `json:"EndpointName"`
	MaxResults         *int64                              `json:"MaxResults"`
	NameContains       *string                             `json:"NameContains"`
	NextToken          *string                             `json:"NextToken"`
	SortBy             *MonitoringJobDefinitionSortKeyEnum `json:"SortBy"`
	SortOrder          *SortOrderEnum                      `json:"SortOrder"`
}
