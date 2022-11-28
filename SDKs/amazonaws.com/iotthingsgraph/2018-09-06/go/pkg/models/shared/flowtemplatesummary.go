package shared

import (
	"time"
)

// FlowTemplateSummary
// An object that contains summary information about a workflow.
type FlowTemplateSummary struct {
	Arn            *string    `json:"arn,omitempty"`
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	ID             *string    `json:"id,omitempty"`
	RevisionNumber *int64     `json:"revisionNumber,omitempty"`
}
