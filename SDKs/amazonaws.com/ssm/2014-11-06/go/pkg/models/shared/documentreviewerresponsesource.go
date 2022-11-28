package shared

import (
	"time"
)

// DocumentReviewerResponseSource
// Information about a reviewer's response to a document review request.
type DocumentReviewerResponseSource struct {
	Comment      []DocumentReviewCommentSource `json:"Comment,omitempty"`
	CreateTime   *time.Time                    `json:"CreateTime,omitempty"`
	ReviewStatus *ReviewStatusEnum             `json:"ReviewStatus,omitempty"`
	Reviewer     *string                       `json:"Reviewer,omitempty"`
	UpdatedTime  *time.Time                    `json:"UpdatedTime,omitempty"`
}
