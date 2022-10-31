package shared

import (
	"time"
)

type DocumentReviewerResponseSource struct {
	Comment      []DocumentReviewCommentSource `json:"Comment,omitempty"`
	CreateTime   *time.Time                    `json:"CreateTime,omitempty"`
	ReviewStatus *ReviewStatusEnum             `json:"ReviewStatus,omitempty"`
	Reviewer     *string                       `json:"Reviewer,omitempty"`
	UpdatedTime  *time.Time                    `json:"UpdatedTime,omitempty"`
}
