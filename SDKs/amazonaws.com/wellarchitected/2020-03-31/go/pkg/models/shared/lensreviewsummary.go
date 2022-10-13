package shared

import (
	"time"
)

type LensReviewSummary struct {
	LensAlias   *string          `json:"LensAlias"`
	LensName    *string          `json:"LensName"`
	LensStatus  *LensStatusEnum  `json:"LensStatus"`
	LensVersion *string          `json:"LensVersion"`
	RiskCounts  map[string]int64 `json:"RiskCounts"`
	UpdatedAt   *time.Time       `json:"UpdatedAt"`
}
