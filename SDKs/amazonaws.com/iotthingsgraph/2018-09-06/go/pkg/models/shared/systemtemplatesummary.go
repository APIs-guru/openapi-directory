package shared

import (
	"time"
)

type SystemTemplateSummary struct {
	Arn            *string    `json:"arn"`
	CreatedAt      *time.Time `json:"createdAt"`
	ID             *string    `json:"id"`
	RevisionNumber *int64     `json:"revisionNumber"`
}
