package shared

import (
"time")

type ListMonitoringExecutionsRequest struct {
    CreationTimeAfter *time.Time `json:"CreationTimeAfter,omitempty"`
    CreationTimeBefore *time.Time `json:"CreationTimeBefore,omitempty"`
    EndpointName *string `json:"EndpointName,omitempty"`
    LastModifiedTimeAfter *time.Time `json:"LastModifiedTimeAfter,omitempty"`
    LastModifiedTimeBefore *time.Time `json:"LastModifiedTimeBefore,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    MonitoringJobDefinitionName *string `json:"MonitoringJobDefinitionName,omitempty"`
    MonitoringScheduleName *string `json:"MonitoringScheduleName,omitempty"`
    MonitoringTypeEquals *MonitoringTypeEnum `json:"MonitoringTypeEquals,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ScheduledTimeAfter *time.Time `json:"ScheduledTimeAfter,omitempty"`
    ScheduledTimeBefore *time.Time `json:"ScheduledTimeBefore,omitempty"`
    SortBy *MonitoringExecutionSortKeyEnum `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    StatusEquals *ExecutionStatusEnum `json:"StatusEquals,omitempty"`
    
}

