package shared

import (
	"time"
)

type ListMonitoringSchedulesRequest struct {
	CreationTimeAfter           *time.Time                     `json:"CreationTimeAfter,omitempty"`
	CreationTimeBefore          *time.Time                     `json:"CreationTimeBefore,omitempty"`
	EndpointName                *string                        `json:"EndpointName,omitempty"`
	LastModifiedTimeAfter       *time.Time                     `json:"LastModifiedTimeAfter,omitempty"`
	LastModifiedTimeBefore      *time.Time                     `json:"LastModifiedTimeBefore,omitempty"`
	MaxResults                  *int64                         `json:"MaxResults,omitempty"`
	MonitoringJobDefinitionName *string                        `json:"MonitoringJobDefinitionName,omitempty"`
	MonitoringTypeEquals        *MonitoringTypeEnum            `json:"MonitoringTypeEquals,omitempty"`
	NameContains                *string                        `json:"NameContains,omitempty"`
	NextToken                   *string                        `json:"NextToken,omitempty"`
	SortBy                      *MonitoringScheduleSortKeyEnum `json:"SortBy,omitempty"`
	SortOrder                   *SortOrderEnum                 `json:"SortOrder,omitempty"`
	StatusEquals                *ScheduleStatusEnum            `json:"StatusEquals,omitempty"`
}
