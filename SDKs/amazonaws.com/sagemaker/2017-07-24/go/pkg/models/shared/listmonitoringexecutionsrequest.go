package shared

import (
	"time"
)

type ListMonitoringExecutionsRequest struct {
	CreationTimeAfter           *time.Time                      `json:"CreationTimeAfter"`
	CreationTimeBefore          *time.Time                      `json:"CreationTimeBefore"`
	EndpointName                *string                         `json:"EndpointName"`
	LastModifiedTimeAfter       *time.Time                      `json:"LastModifiedTimeAfter"`
	LastModifiedTimeBefore      *time.Time                      `json:"LastModifiedTimeBefore"`
	MaxResults                  *int64                          `json:"MaxResults"`
	MonitoringJobDefinitionName *string                         `json:"MonitoringJobDefinitionName"`
	MonitoringScheduleName      *string                         `json:"MonitoringScheduleName"`
	MonitoringTypeEquals        *MonitoringTypeEnum             `json:"MonitoringTypeEquals"`
	NextToken                   *string                         `json:"NextToken"`
	ScheduledTimeAfter          *time.Time                      `json:"ScheduledTimeAfter"`
	ScheduledTimeBefore         *time.Time                      `json:"ScheduledTimeBefore"`
	SortBy                      *MonitoringExecutionSortKeyEnum `json:"SortBy"`
	SortOrder                   *SortOrderEnum                  `json:"SortOrder"`
	StatusEquals                *ExecutionStatusEnum            `json:"StatusEquals"`
}
