package shared

import (
	"time"
)

type SearchFlowExecutionsRequest struct {
	EndTime          *time.Time `json:"endTime,omitempty"`
	FlowExecutionID  *string    `json:"flowExecutionId,omitempty"`
	MaxResults       *int64     `json:"maxResults,omitempty"`
	NextToken        *string    `json:"nextToken,omitempty"`
	StartTime        *time.Time `json:"startTime,omitempty"`
	SystemInstanceID string     `json:"systemInstanceId"`
}
