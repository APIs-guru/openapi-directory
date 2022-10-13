package shared

import (
	"time"
)

type DocumentReviewerResponseSource struct {
	Comment      []DocumentReviewCommentSource `json:"Comment"`
	CreateTime   *time.Time                    `json:"CreateTime"`
	ReviewStatus *ReviewStatusEnum             `json:"ReviewStatus"`
	Reviewer     *string                       `json:"Reviewer"`
	UpdatedTime  *time.Time                    `json:"UpdatedTime"`
}
