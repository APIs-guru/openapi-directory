package shared

import (
	"time"
)

type ListMonitoringSchedulesRequest struct {
	CreationTimeAfter           *time.Time                     `json:"CreationTimeAfter"`
	CreationTimeBefore          *time.Time                     `json:"CreationTimeBefore"`
	EndpointName                *string                        `json:"EndpointName"`
	LastModifiedTimeAfter       *time.Time                     `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore      *time.Time                     `json:"LastModifiedTimeBefore"`
	MaxResults                  *int64                         `json:"MaxResults"`
	MonitoringJobDefinitionName *string                        `json:"MonitoringJobDefinitionName"`
	MonitoringTypeEquals        *MonitoringTypeEnum            `json:"MonitoringTypeEquals"`
	NameContains                *string                        `json:"NameContains"`
	NextToken                   *string                        `json:"NextToken"`
	SortBy                      *MonitoringScheduleSortKeyEnum `json:"SortBy"`
	SortOrder                   *SortOrderEnum                 `json:"SortOrder"`
	StatusEquals                *ScheduleStatusEnum            `json:"StatusEquals"`
}
