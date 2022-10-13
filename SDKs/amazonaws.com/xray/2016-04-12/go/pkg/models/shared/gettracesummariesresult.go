package shared

import (
	"time"
)

type GetTraceSummariesResult struct {
	ApproximateTime      *time.Time     `json:"ApproximateTime"`
	NextToken            *string        `json:"NextToken"`
	TraceSummaries       []TraceSummary `json:"TraceSummaries"`
	TracesProcessedCount *int64         `json:"TracesProcessedCount"`
}
