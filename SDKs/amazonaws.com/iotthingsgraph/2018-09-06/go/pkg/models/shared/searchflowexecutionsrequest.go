package shared

import (
	"time"
)

type SearchFlowExecutionsRequest struct {
	EndTime          *time.Time `json:"endTime"`
	FlowExecutionID  *string    `json:"flowExecutionId"`
	MaxResults       *int64     `json:"maxResults"`
	NextToken        *string    `json:"nextToken"`
	StartTime        *time.Time `json:"startTime"`
	SystemInstanceID string     `json:"systemInstanceId"`
}
