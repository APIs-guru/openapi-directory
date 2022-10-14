package shared

import (
	"time"
)

type GetTraceSummariesResult struct {
	ApproximateTime      *time.Time     `json:"ApproximateTime,omitempty"`
	NextToken            *string        `json:"NextToken,omitempty"`
	TraceSummaries       []TraceSummary `json:"TraceSummaries,omitempty"`
	TracesProcessedCount *int64         `json:"TracesProcessedCount,omitempty"`
}
