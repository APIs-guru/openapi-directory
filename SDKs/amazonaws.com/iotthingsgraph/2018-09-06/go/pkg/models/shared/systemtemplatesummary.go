package shared

import (
	"time"
)

// SystemTemplateSummary
// An object that contains information about a system.
type SystemTemplateSummary struct {
	Arn            *string    `json:"arn,omitempty"`
	CreatedAt      *time.Time `json:"createdAt,omitempty"`
	ID             *string    `json:"id,omitempty"`
	RevisionNumber *int64     `json:"revisionNumber,omitempty"`
}
