package shared

import (
"time")

type DescribeEventsRequest struct {
    Duration *int64 `json:"Duration,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    SourceName *string `json:"SourceName,omitempty"`
    SourceType *SourceTypeEnum `json:"SourceType,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    
}

