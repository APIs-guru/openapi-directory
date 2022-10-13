package shared

import (
	"time"
)

type LensReview struct {
	LensAlias             *string               `json:"LensAlias"`
	LensName              *string               `json:"LensName"`
	LensStatus            *LensStatusEnum       `json:"LensStatus"`
	LensVersion           *string               `json:"LensVersion"`
	NextToken             *string               `json:"NextToken"`
	Notes                 *string               `json:"Notes"`
	PillarReviewSummaries []PillarReviewSummary `json:"PillarReviewSummaries"`
	RiskCounts            map[string]int64      `json:"RiskCounts"`
	UpdatedAt             *time.Time            `json:"UpdatedAt"`
}
