package shared

import (
	"time"
)

// LensReview
// A lens review of a question.
type LensReview struct {
	LensAlias             *string               `json:"LensAlias,omitempty"`
	LensName              *string               `json:"LensName,omitempty"`
	LensStatus            *LensStatusEnum       `json:"LensStatus,omitempty"`
	LensVersion           *string               `json:"LensVersion,omitempty"`
	NextToken             *string               `json:"NextToken,omitempty"`
	Notes                 *string               `json:"Notes,omitempty"`
	PillarReviewSummaries []PillarReviewSummary `json:"PillarReviewSummaries,omitempty"`
	RiskCounts            map[string]int64      `json:"RiskCounts,omitempty"`
	UpdatedAt             *time.Time            `json:"UpdatedAt,omitempty"`
}
